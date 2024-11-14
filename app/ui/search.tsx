import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { GoSearch } from "react-icons/go";
import { useDebounce } from "use-debounce";
interface SearchBarProps {
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  className,
  onSearch,
  placeholder,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 600);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(debouncedSearchTerm);
    }
  };

  // Whenever the debounced search term changes, trigger the search callback
  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  return (
    <section className={`${className} w-full relative`}>
      <GoSearch
        size={24}
        className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
      <input
        type="search"
        placeholder={placeholder ?? "Search ..."}
        className="text-black w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </section>
  );
};

export default SearchBar;
