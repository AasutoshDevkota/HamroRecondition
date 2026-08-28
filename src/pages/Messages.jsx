// src/pages/Messages.jsx
import { useState } from "react";
import {
  Search, ChevronRight, SlidersHorizontal, Phone, Video, Info,
  Paperclip, Smile, Image as ImageIcon, Send, Archive, ThumbsUp,
} from "lucide-react";
import { useMessages } from "../context/MessagesContext";

const MESSAGES = [
  { id: 1, from: "them", text: "Ahh mami le bhannu bhako thiyo", time: "14h ago" },
  { id: 2, from: "them", text: "La thekai xa, kei bhayo bhane bhan hai", time: "14h ago" },
  { id: 3, from: "me", text: "I want to buy the bike.", time: "Sent 14h ago" },
  { id: 4, from: "me", text: "Lala", time: "Sent just now" },
  { id: 5, from: "me", type: "sticker", text: "👍", time: "Sent just now" },
];

export default function UserMessages() {
  const { conversations, unreadCount, markAsRead } = useMessages();
  const [activeId, setActiveId] = useState(conversations[0]?.id);
  const [filter, setFilter] = useState("all");
  const active = conversations.find((c) => c.id === activeId);

  function handleSelect(id) {
    setActiveId(id);
    markAsRead(id);
  }

  const visibleConversations =
    filter === "unread"
      ? conversations.filter((c) => c.unread)
      : conversations; // "archived" tab has no data source yet

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* Breadcrumb */}
        {/* Panel */}
        <div className="mt-1 grid grid-cols-1 gap-4 lg:grid-cols-[380px_1fr]">
          {/* Conversation list */}
          <div className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center gap-2 p-4">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-slate-700 placeholder:text-gray-400 focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400"
                />
              </div>
              <button
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-red-300 hover:text-red-500"
                aria-label="Filter"
              >
                <SlidersHorizontal className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-6 border-b border-gray-100 px-4">
              {["all", "unread", "archived"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`relative pb-3 text-sm font-semibold capitalize transition-colors ${
                    filter === tab ? "text-red-500" : "text-gray-500 hover:text-slate-700"
                  }`}
                >
                  {tab}
                  {filter === tab && (
                    <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-red-500" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto">
              {visibleConversations.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleSelect(c.id)}
                  className={`flex w-full items-start gap-3 border-b border-gray-50 px-4 py-4 text-left transition-colors ${
                    activeId === c.id ? "bg-red-50" : "hover:bg-gray-50"
                  }`}
                >
                  <Avatar c={c} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-bold text-slate-900">{c.name}</p>
                      <span className="shrink-0 text-xs text-gray-400">{c.time}</span>
                    </div>
                    <p className="mt-0.5 truncate text-sm text-gray-500">{c.lastMessage}</p>
                  </div>
                  {c.unread && (
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  )}
                </button>
              ))}
            </div>

            <div className="border-t border-gray-100 p-4">
              <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-red-300 hover:text-red-500">
                <span className="flex items-center gap-2">
                  <Archive className="h-4 w-4" />
                  Archived Messages
                </span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Chat panel */}
          {active && (
            <div className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-100 p-4">
                <div className="flex items-center gap-3">
                  <Avatar c={active} size="h-11 w-11" />
                  <div>
                    <p className="font-bold text-slate-900">{active.name}</p>
                    {active.online && (
                      <p className="flex items-center gap-1.5 text-xs text-green-600">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        Online
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-red-500">
                  <button aria-label="Call"><Phone className="h-5 w-5" /></button>
                  <button aria-label="Video call"><Video className="h-5 w-5" /></button>
                  <button className="text-gray-400" aria-label="Info"><Info className="h-5 w-5" /></button>
                </div>
              </div>

              <div className="flex-1 space-y-1 overflow-y-auto p-6">
                <Divider label="Yesterday" />
                {MESSAGES.slice(0, 3).map((m) => (
                  <Bubble key={m.id} m={m} />
                ))}
                <Bubble m={MESSAGES[3]} />
                <StickerBubble m={MESSAGES[4]} />
                <Divider label="Today" />
              </div>

              <div className="flex items-center gap-3 border-t border-gray-100 p-4">
                <button className="text-gray-400 hover:text-red-500" aria-label="Attach">
                  <Paperclip className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-slate-700 placeholder:text-gray-400 focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400"
                />
                <button className="text-gray-400 hover:text-red-500" aria-label="Emoji">
                  <Smile className="h-5 w-5" />
                </button>
                <button className="text-xs font-bold text-gray-400 hover:text-red-500" aria-label="GIF">
                  GIF
                </button>
                <button className="text-gray-400 hover:text-red-500" aria-label="Image">
                  <ImageIcon className="h-5 w-5" />
                </button>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Avatar({ c, size = "h-10 w-10" }) {
  if (c.avatar) {
    return <img src={c.avatar} alt={c.name} className={`${size} shrink-0 rounded-full object-cover`} />;
  }
  return (
    <div className={`${size} flex shrink-0 items-center justify-center rounded-full ${c.color} text-sm font-bold text-white`}>
      {c.initial}
    </div>
  );
}

function Divider({ label }) {
  return (
    <div className="my-4 flex items-center gap-4">
      <div className="h-px flex-1 bg-gray-100" />
      <span className="text-xs text-gray-400">{label}</span>
      <div className="h-px flex-1 bg-gray-100" />
    </div>
  );
}

function Bubble({ m }) {
  const isMe = m.from === "me";
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} py-1.5`}>
      <div className={`flex max-w-[70%] items-end gap-2 ${isMe ? "flex-row-reverse" : ""}`}>
        {!isMe && (
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=60&h=60&fit=crop"
            alt=""
            className="h-7 w-7 shrink-0 rounded-full object-cover"
          />
        )}
        <div className={isMe ? "text-right" : ""}>
          <div
            className={`rounded-2xl px-4 py-2.5 text-sm ${
              isMe ? "rounded-br-sm bg-red-500 text-white" : "rounded-bl-sm bg-gray-100 text-slate-700"
            }`}
          >
            {m.text}
          </div>
          <p className="mt-1 text-[11px] text-gray-400">{m.time}</p>
        </div>
      </div>
    </div>
  );
}

function StickerBubble({ m }) {
  return (
    <div className="flex justify-end py-1.5">
      <div className="text-right">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500 text-2xl">
          <ThumbsUp className="h-7 w-7 fill-white text-white" />
        </div>
        <p className="mt-1 text-[11px] text-gray-400">{m.time}</p>
      </div>
    </div>
  );
}