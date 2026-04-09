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
  const [formState, setFormState] =
    useState<ContactFormState>(initialFormState);

  const [status, setStatus] =
    useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const [statusMessage, setStatusMessage] =
    useState('');

  const handleChange = (
    key: keyof ContactFormState,
    value: string
  ) => {
    setFormState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleInterestToggle = (value: string) => {
    setFormState((prev) => {
      const current = new Set(prev.interest);

      if (current.has(value)) {
        current.delete(value);
      } else {
        current.add(value);
      }

      return {
        ...prev,
        interest: Array.from(current),
      };
    });
  };

  const handleClear = (
    key: keyof ContactFormState
  ) => {
    handleChange(key, '');
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const payload =
        (await response.json().catch(() => ({}))) as {
          message?: string;
          error?: string;
        };

      if (!response.ok) {
        throw new Error(
          payload.error || 'Unable to send message.'
        );
      }

      setStatus('success');
      setStatusMessage(
        payload.message ||
          'Thanks! We will be in touch soon.'
      );

      setFormState(initialFormState);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Something went wrong.';

      setStatus('error');
      setStatusMessage(message);
    }
  };

  return (
    <section
      id="contact-us"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1246px]">
        <Card className="border border-[#E5E7EB] shadow-none rounded-xl">

          {/* HEADER */}

          <CardHeader className="text-center pt-12 pb-8">

            <CardTitle className="text-[48px] leading-[48px] tracking-[0.35px] font-bold text-black">
              Contact Us
            </CardTitle>

          </CardHeader>

          <CardContent className="px-8 pb-10 sm:px-10">

            <form
              className="space-y-12"
              onSubmit={handleSubmit}
            >

              {/* PERSONAL INFO */}

              <div className="space-y-6">

                <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-black">
                  Personal Info
                </h3>

                <div className="grid gap-6 md:grid-cols-2">

                  <InputField
                    id="fullName"
                    label="Full Name"
                    icon={User}
                    value={formState.fullName}
                    onChange={(v) =>
                      handleChange('fullName', v)
                    }
                    onClear={() =>
                      handleClear('fullName')
                    }
                    placeholder="Input text"
                    required
                  />

                  <InputField
                    id="businessName"
                    label="Business Name"
                    icon={Briefcase}
                    value={formState.businessName}
                    onChange={(v) =>
                      handleChange('businessName', v)
                    }
                    onClear={() =>
                      handleClear('businessName')
                    }
                    placeholder="Input text"
                  />

                  <InputField
                    id="email"
                    label="Email"
                    type="email"
                    icon={Mail}
                    value={formState.email}
                    onChange={(v) =>
                      handleChange('email', v)
                    }
                    onClear={() =>
                      handleClear('email')
                    }
                    placeholder="Input text"
                    required
                  />

                  <InputField
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    icon={Phone}
                    value={formState.phone}
                    onChange={(v) =>
                      handleChange('phone', v)
                    }
                    onClear={() =>
                      handleClear('phone')
                    }
                    placeholder="Input text"
                  />

                </div>

              </div>

              {/* INTEREST */}

              <div className="space-y-6">

                <div className="space-y-3">

                  <Label className="text-[14px] leading-[150%] text-gray-900">
                    Select What are you looking for
                  </Label>

                  <div className="flex flex-wrap gap-[10px]">

                    {interestOptions.map((option) => {

                      const selected =
                        formState.interest.includes(option);

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            handleInterestToggle(option)
                          }
                          className={`
                            px-[16px]
                            py-[12px]
                            rounded-[5px]
                            text-[16px]
                            font-medium
                            leading-[24px]
                            tracking-[-0.31px]
                            border
                            transition-all
                            duration-200
                            hover:bg-[#FFF3E6]
                            ${
                              selected
                                ? 'bg-[#E17100] text-white border-[#E17100]'
                                : 'bg-white text-[#E17100] border-[#E17100]'
                            }
                          `}
                        >
                          {option}
                        </button>
                      );

                    })}

                  </div>

                </div>

                {/* DESCRIPTION */}

                <div className="space-y-2">

                  <Label
                    htmlFor="description"
                    className="text-[14px] leading-[150%] text-gray-900"
                  >
                    Brief Description (Minimum 1-2 Sentences)
                  </Label>

                  <Textarea
                    id="description"
                    value={formState.description}
                    onChange={(e) =>
                      handleChange(
                        'description',
                        e.target.value
                      )
                    }
                    placeholder="Write text here ..."
                    className="
                      min-h-[180px]
                      bg-[#F9FAFB]
                      border border-[#D1D5DB]
                      focus:ring-2
                      focus:ring-[#E17100]
                      focus:border-[#E17100]
                    "
                    required
                  />

                </div>

              </div>

              {/* SUBMIT */}

              <div className="flex flex-col items-center gap-3 pt-4">

                <Button
                  type="submit"
                  size="lg"
                  className="
                    h-[52px]
                    w-full
                    max-w-[488px]
                    rounded-[8px]
                    bg-gradient-to-r
                    from-[#FEE685]
                    to-[#FFD230]
                    text-black
                    font-semibold
                    text-[16px]
                    shadow-md
                    transition
                    hover:opacity-90
                  "
                  disabled={status === 'submitting'}
                >

                  {status === 'submitting'
                    ? 'Sending...'
                    : 'Submit'}

                  <ArrowRight className="ml-2 h-4 w-4" />

                </Button>

                {statusMessage && (
                  <p
                    className={`text-sm ${
                      status === 'error'
                        ? 'text-red-600'
                        : 'text-emerald-600'
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}

              </div>

            </form>

          </CardContent>

        </Card>
      </div>
    </section>
  );
}

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

      <Label
        htmlFor={id}
        className="text-[14px] leading-[150%] text-gray-900"
      >
        {label}
      </Label>

      <div className="relative">

        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />

        <Input
          id={id}
          type={type}
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          placeholder={placeholder}
          className="
            h-[48px]
            pl-10 pr-10
            bg-[#F9FAFB]
            border border-[#D1D5DB]
            focus:ring-2
            focus:ring-[#E17100]
            focus:border-[#E17100]
          "
          required={required}
        />

        {value && (

          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>

        )}

      </div>

    </div>
  );
}