import { useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  SlidersHorizontal,
  SquarePen,
  Search,
  Phone,
  MoreVertical,
  Paperclip,
  Image as ImageIcon,
  Send,
  Check,
  CheckCheck,
  Mail,
  MapPin,
  CalendarCheck,
  ChevronDown,
} from "lucide-react";

const AVATAR_COLORS = {
  RB: "bg-red-100 text-brand-red",
  SP: "bg-blue-100 text-blue-600",
  AS: "bg-violet-100 text-violet-600",
  DK: "bg-amber-100 text-amber-600",
  NG: "bg-emerald-100 text-emerald-600",
  SL: "bg-slate-200 text-slate-600",
};

const CONVERSATIONS = [
  {
    id: 1,
    name: "Rohan Bikram",
    phone: "9801234567",
    email: "rohan.bikram@example.com",
    location: "Kathmandu, Nepal",
    joined: "May 10, 2024",
    initials: "RB",
    preview: "Is this bike still available?",
    time: "10:45 AM",
    unread: 2,
    status: "New",
    inquiryType: "Availability",
    received: "May 20, 2024 10:30 AM",
    listing: { name: "KTM Duke 200 BS6", price: "NPR 2,45,000", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=100&h=100&fit=crop" },
    messages: [
      { day: "May 20, 2024" },
      { from: "them", text: "Hi, is the KTM Duke 200 BS6 still available?", time: "10:30 AM" },
      { from: "me", text: "Yes, it is still available.", time: "10:32 AM", read: true },
      { from: "them", text: "Great! Can you share more photos and details about the condition?", time: "10:33 AM" },
      { from: "me", text: "Sure! I will share the photos and details shortly.", time: "10:35 AM", read: true },
      { day: "Today" },
      { from: "them", text: "Thank you! Can we schedule a test ride this weekend?", time: "10:45 AM" },
    ],
  },
  {
    id: 2,
    name: "Sujan Pathak",
    phone: "9852345678",
    email: "sujan@example.com",
    location: "Lalitpur, Nepal",
    joined: "Apr 22, 2024",
    initials: "SP",
    preview: "Can you share the final price?",
    time: "Yesterday",
    unread: 1,
    status: "Open",
    inquiryType: "Pricing",
    received: "Yesterday 4:10 PM",
    listing: { name: "Yamaha R15 V3", price: "NPR 4,70,000", img: "https://images.unsplash.com/photo-1558980664-10e7170b5df9?w=100&h=100&fit=crop" },
    messages: [
      { day: "Yesterday" },
      { from: "them", text: "Can you share the final price?", time: "4:10 PM" },
    ],
  },
  {
    id: 3,
    name: "Anisha Maharjan",
    phone: "9845678901",
    email: "anisha@example.com",
    location: "Bhaktapur, Nepal",
    joined: "Mar 2, 2024",
    initials: "AS",
    preview: "Thank you! I will check and get back to you.",
    time: "May 18",
    unread: 0,
    status: "Closed",
    inquiryType: "General",
    received: "May 18, 2024 9:00 AM",
    listing: { name: "Vespa SXL 125", price: "NPR 5,04,000", img: "https://images.unsplash.com/photo-1519376681982-9de3d3c9d2a5?w=100&h=100&fit=crop" },
    messages: [
      { day: "May 18, 2024" },
      { from: "them", text: "Thank you! I will check and get back to you.", time: "9:00 AM" },
    ],
  },
  {
    id: 4,
    name: "Dipesh Karki",
    phone: "9811122334",
    email: "dipesh@example.com",
    location: "Kathmandu, Nepal",
    joined: "Jan 14, 2024",
    initials: "DK",
    preview: "Please share more photos of the bike.",
    time: "May 17",
    unread: 0,
    status: "Open",
    inquiryType: "Photos",
    received: "May 17, 2024 11:20 AM",
    listing: { name: "Bajaj Pulsar 220F", price: "NPR 3,33,000", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=100&h=100&fit=crop" },
    messages: [
      { day: "May 17, 2024" },
      { from: "them", text: "Please share more photos of the bike.", time: "11:20 AM" },
    ],
  },
  {
    id: 5,
    name: "Niraj Gurung",
    phone: "9867890123",
    email: "niraj@example.com",
    location: "Pokhara, Nepal",
    joined: "Feb 8, 2024",
    initials: "NG",
    preview: "Can we schedule a test ride?",
    time: "May 16",
    unread: 0,
    status: "Open",
    inquiryType: "Test Ride",
    received: "May 16, 2024 3:45 PM",
    listing: { name: "Honda CB Hornet", price: "NPR 2,48,000", img: "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?w=100&h=100&fit=crop" },
    messages: [
      { day: "May 16, 2024" },
      { from: "them", text: "Can we schedule a test ride?", time: "3:45 PM" },
    ],
  },
  {
    id: 6,
    name: "Santosh Lama",
    phone: "9856781234",
    email: "santosh@example.com",
    location: "Kathmandu, Nepal",
    joined: "Dec 20, 2023",
    initials: "SL",
    preview: "Thank you for the details.",
    time: "May 15",
    unread: 0,
    status: "Closed",
    inquiryType: "General",
    received: "May 15, 2024 1:10 PM",
    listing: { name: "KTM Duke 200 BS6", price: "NPR 2,45,000", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=100&h=100&fit=crop" },
    messages: [
      { day: "May 15, 2024" },
      { from: "them", text: "Thank you for the details.", time: "1:10 PM" },
    ],
  },
];

const STATUS_STYLES = {
  New: "bg-red-50 text-brand-red",
  Open: "bg-blue-50 text-blue-600",
  Closed: "bg-slate-100 text-slate-500",
};

export default function Messages() {
  const [conversations, setConversations] = useState(CONVERSATIONS);
  const [activeId, setActiveId] = useState(CONVERSATIONS[0].id);
  const [search, setSearch] = useState("");
  const [draft, setDraft] = useState("");
  const scrollRef = useRef(null);

  const active = conversations.find((c) => c.id === activeId);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [activeId, active?.messages.length]);

  const filteredConversations = conversations.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const openConversation = (id) => {
    setActiveId(id);
    setConversations((prev) => prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c)));
  };

  const sendMessage = () => {
    if (!draft.trim()) return;
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? { ...c, messages: [...c.messages, { from: "me", text: draft.trim(), time, read: false }], preview: draft.trim(), time: "Just now" }
          : c
      )
    );
    setDraft("");
  };

  const updateStatus = (status) => {
    setConversations((prev) => prev.map((c) => (c.id === activeId ? { ...c, status } : c)));
  };

  return (
    <div>
      {/* Page header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Messages</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
            <span>Dashboard</span>
            <ChevronRight size={14} />
            <span className="font-medium text-brand-red">Messages</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
            <SlidersHorizontal size={15} />
            Filters
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-brand-red px-4 py-2.5 text-sm font-bold text-white hover:bg-red-600">
            <SquarePen size={15} />
            New Message
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[300px_1fr_300px]" style={{ height: "calc(100vh - 190px)" }}>
        {/* Conversations list */}
        <div className="card flex flex-col overflow-hidden">
          <div className="border-b border-slate-100 p-4">
            <h3 className="mb-3 text-base font-bold text-slate-900">Conversations</h3>
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search conversations..."
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand-red"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((c) => (
              <button
                key={c.id}
                onClick={() => openConversation(c.id)}
                className={`flex w-full items-start gap-3 border-l-2 px-4 py-3.5 text-left transition-colors ${
                  activeId === c.id ? "border-brand-red bg-red-50/50" : "border-transparent hover:bg-slate-50"
                }`}
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${AVATAR_COLORS[c.initials] || "bg-slate-200 text-slate-600"}`}>
                  {c.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-bold text-slate-900">{c.name}</p>
                    <span className="shrink-0 text-xs text-slate-400">{c.time}</span>
                  </div>
                  <div className="mt-0.5 flex items-center justify-between gap-2">
                    <p className="truncate text-xs text-slate-500">{c.preview}</p>
                    {c.unread > 0 && (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-[10px] font-bold text-white">
                        {c.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat thread */}
        <div className="card flex flex-col overflow-hidden">
          {active ? (
            <>
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${AVATAR_COLORS[active.initials] || "bg-slate-200 text-slate-600"}`}>
                    {active.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{active.name}</p>
                    <p className="text-xs text-slate-400">{active.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50">
                    <Phone size={17} />
                  </button>
                  <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50">
                    <MoreVertical size={17} />
                  </button>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
                {active.messages.map((m, i) =>
                  m.day ? (
                    <div key={i} className="flex justify-center">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-400">{m.day}</span>
                    </div>
                  ) : (
                    <div key={i} className={`flex items-end gap-2 ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                      {m.from === "them" && (
                        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${AVATAR_COLORS[active.initials] || "bg-slate-200 text-slate-600"}`}>
                          {active.initials}
                        </span>
                      )}
                      <div
                        className={`max-w-[70%] rounded-2xl px-4 py-2.5 text-sm ${
                          m.from === "me" ? "rounded-br-sm bg-red-50 text-slate-800" : "rounded-bl-sm bg-slate-100 text-slate-800"
                        }`}
                      >
                        <p>{m.text}</p>
                        <div className={`mt-1 flex items-center gap-1 text-[10px] text-slate-400 ${m.from === "me" ? "justify-end" : ""}`}>
                          {m.time}
                          {m.from === "me" && (m.read ? <CheckCheck size={12} className="text-brand-red" /> : <Check size={12} />)}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="border-t border-slate-100 p-4">
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2">
                  <button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-50">
                    <Paperclip size={17} />
                  </button>
                  <button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-50">
                    <ImageIcon size={17} />
                  </button>
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                  <button
                    onClick={sendMessage}
                    className="flex items-center gap-1.5 rounded-lg bg-brand-red px-4 py-2 text-sm font-bold text-white hover:bg-red-600"
                  >
                    <Send size={14} />
                    Send
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-slate-400">
              Select a conversation to start chatting
            </div>
          )}
        </div>

        {/* Conversation details */}
        <div className="card overflow-y-auto p-5">
          {active && (
            <>
              <h3 className="mb-4 text-sm font-bold text-slate-900">Conversation Details</h3>

              <div className="flex items-center gap-3">
                <span className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${AVATAR_COLORS[active.initials] || "bg-slate-200 text-slate-600"}`}>
                  {active.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">{active.name}</p>
                  <p className="text-xs text-slate-400">{active.phone}</p>
                </div>
                {active.status === "New" && (
                  <span className="ml-auto rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-brand-red">New</span>
                )}
              </div>

              <div className="mt-5 space-y-2.5 text-sm text-slate-600">
                <p className="flex items-center gap-2">
                  <Mail size={14} className="text-slate-400" />
                  {active.email}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={14} className="text-slate-400" />
                  {active.location}
                </p>
                <p className="flex items-center gap-2">
                  <CalendarCheck size={14} className="text-slate-400" />
                  Joined on {active.joined}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <h4 className="mb-3 text-sm font-bold text-slate-900">About Inquiry</h4>

                <div className="mb-4 flex items-center gap-3">
                  <img src={active.listing.img} alt={active.listing.name} className="h-11 w-11 rounded-lg object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{active.listing.name}</p>
                    <p className="text-xs font-bold text-brand-red">{active.listing.price}</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Inquiry Type</span>
                    <span className="font-semibold text-slate-700">{active.inquiryType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Received</span>
                    <span className="font-semibold text-slate-700">{active.received}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Status</span>
                    <div className="relative">
                      <select
                        value={active.status}
                        onChange={(e) => updateStatus(e.target.value)}
                        className={`appearance-none rounded-lg border border-slate-200 py-1.5 pl-3 pr-7 text-xs font-bold outline-none ${STATUS_STYLES[active.status]}`}
                      >
                        <option value="Open">Open</option>
                        <option value="New">New</option>
                        <option value="Closed">Closed</option>
                      </select>
                      <ChevronDown size={12} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>
                </div>

                <button className="mt-5 w-full rounded-lg border border-brand-red py-2.5 text-sm font-bold text-brand-red hover:bg-red-50">
                  View Listing
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}