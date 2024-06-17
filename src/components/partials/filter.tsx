"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterCategory() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (e: string) => {
    const data = e.split(" ");
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", data[1]);
    params.set("order", data[0]);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex justify-between">
      <div>
        <Select onValueChange={handleFilterChange}>
          <SelectTrigger className="w-[150px] py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="asc price">
                Prix (du plus bas au plus haut)
              </SelectItem>
              <SelectItem value="desc price">
                Prix (du plus haut au plus bas)
              </SelectItem>
              <SelectItem value="asc updatedAt">Nouveaux</SelectItem>
              <SelectItem value="desc updatedAt">Anciens</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
