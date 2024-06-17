"use client";

import { Button } from "../../ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) router.push(`/list?name=${name}`);
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="search"
        name="name"
        placeholder="Rechercher..."
        className="flex-1 bg-transparent outline-none"
      />
      <Button
        type="submit"
        variant="outline"
        size="icon"
        className="bg-transparent border-0 shadow-none"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </Button>
    </form>
  );
};
