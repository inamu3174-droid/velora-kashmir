import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChatBox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! How can I help you with Velora products today?" },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [...m, { role: "user", content: userMsg }]);
    setInput("");
    // Placeholder response
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Thanks for your message! For orders and product details, please reach us on WhatsApp for the fastest response.",
        },
      ]);
    }, 600);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#d5a928] text-[#241f16] shadow-lg hover:bg-[#c4961a]"
        aria-label="Open chat"
      >
        <MessageCircle size={22} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex h-[420px] w-[340px] flex-col overflow-hidden rounded-2xl border bg-background shadow-xl">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <span className="font-medium">Velora Assistant</span>
        <button onClick={() => setOpen(false)} aria-label="Close">
          <X size={18} />
        </button>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`rounded-lg px-3 py-2 text-sm ${
              m.role === "user"
                ? "ml-8 bg-[#d5a928]/20 text-right"
                : "mr-8 bg-muted"
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>
      <div className="flex gap-2 border-t p-3">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask about our products..."
          className="flex-1"
        />
        <Button size="icon" onClick={send}>
          <Send size={16} />
        </Button>
      </div>
    </div>
  );
}
