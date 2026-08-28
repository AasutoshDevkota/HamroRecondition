// src/context/MessagesContext.jsx
import { createContext, useContext, useMemo, useState } from "react";

const INITIAL_CONVERSATIONS = [
  {
    id: 1,
    name: "Sita Gurung",
    avatar:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=100&h=100&fit=crop",
    online: true,
    lastMessage: "Bluebook renew gareko xa ki renew aafaile garna parxa ?",
    time: "2m",
    unread: true,
  },
  {
    id: 2,
    name: "Bibek Karki",
    initial: "B",
    color: "bg-red-500",
    lastMessage: "Is this bike still available?",
    time: "1h",
    unread: true,
  },
  {
    id: 3,
    name: "Ram Chhetri",
    initial: "R",
    color: "bg-purple-500",
    lastMessage: "Price ma ali kam garna milcha?",
    time: "3h",
    unread: false,
  },
  {
    id: 4,
    name: "Anish Thapa",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    lastMessage: "Can you share more photos?",
    time: "5h",
    unread: false,
  },
  {
    id: 5,
    name: "Prabin Shrestha",
    initial: "P",
    color: "bg-green-500",
    lastMessage: "Location kaha ho?",
    time: "1d",
    unread: false,
  },
  {
    id: 6,
    name: "Manoj Thapa",
    initial: "M",
    color: "bg-orange-500",
    lastMessage: "Payment garna milancha?",
    time: "2d",
    unread: false,
  },
];

const MessagesContext = createContext(null);

export function MessagesProvider({ children }) {
  const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);

  const unreadCount = useMemo(
    () => conversations.filter((c) => c.unread).length,
    [conversations]
  );

  function markAsRead(id) {
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, unread: false } : c))
    );
  }

  const value = { conversations, setConversations, unreadCount, markAsRead };

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
}

export function useMessages() {
  const ctx = useContext(MessagesContext);
  if (!ctx) {
    throw new Error("useMessages must be used within a MessagesProvider");
  }
  return ctx;
}