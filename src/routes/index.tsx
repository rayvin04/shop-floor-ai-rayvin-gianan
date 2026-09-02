import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import "@n8n/chat/style.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shop Floor Agent — AI Assistant for Cabinet Production" },
      {
        name: "description",
        content:
          "AI assistant for verifying cabinet panels, workstation requirements, and shop-floor procedures.",
      },
      { property: "og:title", content: "Shop Floor Agent" },
      {
        property: "og:description",
        content:
          "AI assistant for verifying cabinet panels, workstation requirements, and shop-floor procedures.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const chatRef = useRef<ReturnType<typeof import("@n8n/chat").createChat> | null>(null);

  useEffect(() => {
    let mounted = true;

    const initChat = async () => {
      const { createChat } = await import("@n8n/chat");
      if (!mounted) return;

      chatRef.current = createChat({
        webhookUrl:
          "https://n8n-rayv-742595626609.herokuapp.com/webhook/3b05a138-6b54-4879-9abf-82b47c9eac6a/chat",
        mode: "fullscreen",
        target: "#n8n-chat",
        showWelcomeScreen: false,
        loadPreviousSession: true,
        initialMessages: [
          "Hello! 👋",
          "I'm your Shop Floor Agent. Scan or enter a panel code, choose a workstation, or ask me questions about the production process.",
        ],
        i18n: {
          en: {
            title: "Shop Floor Agent",
            subtitle: "Powered by AI",
            footer: "",
            getStarted: "Start Chat",
            inputPlaceholder: "Enter panel code or ask a question...",
          },
        },
      });
    };

    initChat();

    return () => {
      mounted = false;
      if (chatRef.current && "destroy" in chatRef.current) {
        (chatRef.current as { destroy: () => void }).destroy();
      }
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--sf-background)] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div
        className="flex w-full max-w-[1100px] flex-col gap-6"
        style={{ minHeight: "calc(100vh - 64px)" }}
      >
        <header className="shrink-0 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--sf-text)] sm:text-4xl">
            Shop Floor Agent
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[var(--sf-muted)] sm:text-lg">
            AI assistant for verifying cabinet panels, workstation requirements, and
            shop-floor procedures.
          </p>
        </header>

        <div
          id="n8n-chat"
          className="flex-1 overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-12px_rgba(0,0,0,0.08)] ring-1 ring-[var(--sf-border)]"
          aria-label="Shop Floor Agent chat"
        />
      </div>
    </main>
  );
}
