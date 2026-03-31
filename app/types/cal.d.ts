export interface CalConfig {
  calLink: string;
  [key: string]: any;
}

export interface Cal {
  (method: 'modal', config: CalConfig): void;
  (method: 'preload', config: Omit<CalConfig, 'calLink'> & { calLink: string; type?: 'modal' | 'floatingButton' }): void;
  (method: string, config?: any): void;
  loaded?: boolean;
  q?: any[];
}

declare global {
  interface Window {
    Cal?: Cal;
  }
}

export {};
