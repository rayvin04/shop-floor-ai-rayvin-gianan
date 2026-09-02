declare module "@n8n/chat" {
  export interface ChatOptions {
    webhookUrl: string;
    mode?: "fullscreen" | "window";
    target?: string;
    showWelcomeScreen?: boolean;
    loadPreviousSession?: boolean;
    initialMessages?: string[];
    i18n?: {
      en?: {
        title?: string;
        subtitle?: string;
        footer?: string;
        getStarted?: string;
        inputPlaceholder?: string;
      };
    };
  }

  export interface ChatInstance {
    destroy?: () => void;
  }

  export function createChat(options: ChatOptions): ChatInstance;
}

declare module "@n8n/chat/style.css" {}
