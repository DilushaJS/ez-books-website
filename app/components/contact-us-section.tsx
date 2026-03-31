'use client';

import { useState, type ComponentType, type FormEvent } from 'react';
import { ArrowRight, Briefcase, Mail, Phone, User, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type ContactFormState = {
	fullName: string;
	businessName: string;
	email: string;
	phone: string;
	interest: string[];
	description: string;
};

const initialFormState: ContactFormState = {
	fullName: '',
	businessName: '',
	email: '',
	phone: '',
	interest: [],
	description: '',
};

const interestOptions = [
	'Bookkeeping cleanup',
	'Monthly bookkeeping',
	'Lender-ready financials',
	'Cash flow forecasting',
	'Something else',
];

export function ContactUsSection() {
	const [formState, setFormState] = useState<ContactFormState>(initialFormState);
	const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
		'idle'
	);
	const [statusMessage, setStatusMessage] = useState('');

	const handleChange = (key: keyof ContactFormState, value: string) => {
		setFormState((prev) => ({ ...prev, [key]: value }));
	};

	const handleInterestToggle = (value: string) => {
		setFormState((prev) => {
			const current = new Set(prev.interest);
			if (current.has(value)) {
				current.delete(value);
			} else {
				current.add(value);
			}
			return { ...prev, interest: Array.from(current) };
		});
	};

	const handleClear = (key: keyof ContactFormState) => {
		handleChange(key, '');
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setStatus('submitting');
		setStatusMessage('');

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formState),
			});

			const payload = (await response.json().catch(() => ({}))) as {
				message?: string;
				error?: string;
			};

			if (!response.ok) {
				throw new Error(payload.error || 'Unable to send message.');
			}

			setStatus('success');
			setStatusMessage(payload.message || 'Thanks! We will be in touch soon.');
			setFormState(initialFormState);
		} catch (error) {
			const message = error instanceof Error ? error.message : 'Something went wrong.';
			setStatus('error');
			setStatusMessage(message);
		}
	};

	return (
		<section id="contact-us" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-5xl">
				<Card className="shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
					<CardHeader className="text-center">
						<CardTitle className="text-4xl sm:text-5xl tracking-[0.35px] text-black font-bold">Contact Us</CardTitle>
					</CardHeader>
					<CardContent>
						<form className="space-y-10" onSubmit={handleSubmit}>
							<div className="space-y-6">
								<h3 className="text-lg font-semibold text-gray-900">Personal Info</h3>
								<div className="grid gap-6 md:grid-cols-2">
									<InputField
										id="fullName"
										label="Full Name"
										icon={User}
										value={formState.fullName}
										onChange={(value) => handleChange('fullName', value)}
										onClear={() => handleClear('fullName')}
										placeholder="Input text"
										required
									/>
									<InputField
										id="businessName"
										label="Business Name"
										icon={Briefcase}
										value={formState.businessName}
										onChange={(value) => handleChange('businessName', value)}
										onClear={() => handleClear('businessName')}
										placeholder="Input text"
									/>
									<InputField
										id="email"
										label="Email"
										type="email"
										icon={Mail}
										value={formState.email}
										onChange={(value) => handleChange('email', value)}
										onClear={() => handleClear('email')}
										placeholder="Input text"
										required
									/>
									<InputField
										id="phone"
										label="Phone Number"
										type="tel"
										icon={Phone}
										value={formState.phone}
										onChange={(value) => handleChange('phone', value)}
										onClear={() => handleClear('phone')}
										placeholder="Input text"
									/>
								</div>
							</div>

							<div className="space-y-6">
								<div className="space-y-2">
									<Label htmlFor="interest">What are you looking for</Label>
									<div
										id="interest"
										className="grid gap-3 sm:grid-cols-2"
									>
										{interestOptions.map((option) => {
											const selected = formState.interest.includes(option);
											return (
												<button
													key={option}
													type="button"
													onClick={() => handleInterestToggle(option)}
													className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-medium transition ${
														selected
															? 'border-amber-300 bg-amber-50 text-gray-900'
															: 'border-gray-200 bg-white text-gray-600 hover:border-amber-200'
													}`}
													aria-pressed={selected}
												>
													<span>{option}</span>
													<span
														className={`inline-flex h-4 w-4 items-center justify-center rounded-full border ${
															selected
																? 'border-amber-400 bg-amber-400 text-black'
																: 'border-gray-300 bg-white'
														}`}
														aria-hidden="true"
													>
														{selected ? 'x' : ''}
													</span>
												</button>
											);
										})}
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="description">
										Brief Description (Minimum 1-2 Sentences)
									</Label>
									<Textarea
										id="description"
										value={formState.description}
										onChange={(event) => handleChange('description', event.target.value)}
										placeholder="Write text here ..."
										className="min-h-[160px]"
										required
									/>
								</div>
							</div>

							<div className="flex flex-col items-center gap-4">
								<Button
									type="submit"
									size="lg"
									className="h-12 w-full max-w-[488px] rounded-lg bg-gradient-to-r from-[#FEE685] to-[#FFD230] px-10 text-base font-semibold text-black shadow-md transition hover:opacity-90"
									disabled={status === 'submitting'}
								>
									{status === 'submitting' ? 'Sending...' : 'Submit'}
									<ArrowRight className="h-4 w-4" />
								</Button>
								{statusMessage ? (
									<p
										className={`text-sm ${
											status === 'error' ? 'text-red-600' : 'text-emerald-600'
										}`}
										role="status"
										aria-live="polite"
									>
										{statusMessage}
									</p>
								) : null}
							</div>
						</form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}

type InputFieldProps = {
	id: string;
	label: string;
	type?: string;
	icon: ComponentType<{ className?: string }>;
	value: string;
	placeholder?: string;
	required?: boolean;
	onChange: (value: string) => void;
	onClear: () => void;
};

function InputField({
	id,
	label,
	type = 'text',
	icon: Icon,
	value,
	placeholder,
	required,
	onChange,
	onClear,
}: InputFieldProps) {
	return (
		<div className="space-y-2">
			<Label htmlFor={id}>{label}</Label>
			<div className="relative">
				<Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
				<Input
					id={id}
					type={type}
					value={value}
					onChange={(event) => onChange(event.target.value)}
					placeholder={placeholder}
					className="pl-10 pr-10"
					required={required}
				/>
				{value ? (
					<button
						type="button"
						onClick={onClear}
						className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
						aria-label={`Clear ${label}`}
					>
						<X className="h-4 w-4" />
					</button>
				) : null}
			</div>
		</div>
	);
}
