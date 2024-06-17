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
      className="flex flex-1 items-center justify-between gap-4 rounded-md bg-gray-100 p-2"
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
        className="border-0 bg-transparent shadow-none"
      >
        <MagnifyingGlassIcon className="size-5" />
      </Button>
    </form>
  );
};
