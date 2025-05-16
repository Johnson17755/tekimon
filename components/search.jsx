"use client";

import { Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/input";
import { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="relative w-full max-w-md">
      <SearchIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2" />
      <Input
        placeholder="Search something here"
        className="w-full pl-8"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <SlidersHorizontal className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
};

export default Search;
