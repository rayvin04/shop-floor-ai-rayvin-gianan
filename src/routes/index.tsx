import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import "@n8n/chat/style.css";
import "@/n8n-chat-theme.css";

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
    <main className="min-h-screen bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF2FF_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-8">
        <header className="shrink-0 text-center">
          <span className="inline-flex items-center rounded-full bg-[#FEE2E2] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#DC2626]">
            ABC Cabinet
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#1F2937] sm:text-5xl">
            Shop Floor Agent
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6B7280] sm:text-lg">
            AI-powered assistant for verifying cabinet panels, workstation operations,
            and production procedures.
          </p>
        </header>

        <section className="mx-auto w-full rounded-[24px] border border-[#E5E7EB] bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.08)] sm:p-6">
          <div
            id="n8n-chat"
            className="w-full overflow-hidden rounded-[18px]"
            style={{ height: "min(80vh, calc(100vh - 320px))", minHeight: "440px" }}
            aria-label="Shop Floor Agent chat"
          />
        </section>
      </div>
    </main>
  );
}
