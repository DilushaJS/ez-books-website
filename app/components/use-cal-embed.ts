'use client';

import { useMemo, useState } from 'react';

type UseCalEmbedResult = {
  calLink: string | undefined;
  embedUrl: string;
  isOpen: boolean;
  isLoading: boolean;
  open: () => void;
  close: () => void;
  markLoaded: () => void;
};

export function useCalEmbed(): UseCalEmbedResult {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const embedUrl = useMemo(() => {
    if (!calLink) {
      return '';
    }

    const separator = calLink.includes('?') ? '&' : '?';
    return `${calLink}${separator}embed=1`;
  }, [calLink]);

  const open = () => {
    if (!calLink) {
      console.error('Cal link not configured:', { calLink });
      return;
    }

    setIsLoading(true);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setIsLoading(false);
  };

  const markLoaded = () => {
    setIsLoading(false);
  };

  return {
    calLink,
    embedUrl,
    isOpen,
    isLoading,
    open,
    close,
    markLoaded,
  };
}
