"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/events/${searchText}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="ring-accenttext-accent/50 h-16 w-full rounded-lg bg-white/[7%] px-6 outline-none transition focus:bg-white/10 focus:ring-2"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        spellCheck={false}
        placeholder="Search events in any city..."
      />
    </form>
  );
}
