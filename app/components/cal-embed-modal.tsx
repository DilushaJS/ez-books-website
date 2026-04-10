'use client';

import { X } from 'lucide-react';

type CalEmbedModalProps = {
  isOpen: boolean;
  isLoading: boolean;
  embedUrl: string;
  onClose: () => void;
  onLoad: () => void;
};

export function CalEmbedModal({
  isOpen,
  isLoading,
  embedUrl,
  onClose,
  onLoad,
}: CalEmbedModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-black shadow"
          aria-label="Close scheduling modal"
        >
          <X className="h-4 w-4" />
        </button>
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-amber-200 border-t-amber-500" />
              <p className="text-sm text-gray-600">Loading schedule...</p>
            </div>
          </div>
        )}
        {embedUrl ? (
          <iframe
            title="Schedule a call"
            src={embedUrl}
            className="h-[75vh] w-full border-0"
            onLoad={onLoad}
            allow="camera; microphone; fullscreen; display-capture"
          />
        ) : (
          <div className="p-8 text-center text-sm text-gray-600">
            Cal link is not configured.
          </div>
        )}
      </div>
    </div>
  );
}
