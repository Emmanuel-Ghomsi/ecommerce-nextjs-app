import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";

export const SkeletonProductDetailUI = () => {
  return (
    <div className="relative flex animate-pulse flex-col gap-16 px-4 md:px-8 lg:flex-row lg:px-16 xl:px-32 2xl:px-64">
      <Skeleton className="top-20 h-max w-full bg-white lg:sticky lg:w-1/2">
        <Skeleton className="h-[500px] rounded-md" />
        <div className="mt-8 flex justify-between gap-4">
          <Skeleton className="mt-8 h-32 w-1/4 gap-4 rounded-md " />
          <Skeleton className="mt-8 h-32 w-1/4 gap-4 rounded-md " />
          <Skeleton className="mt-8 h-32 w-1/4 gap-4 rounded-md " />
          <Skeleton className="mt-8 h-32 w-1/4 gap-4 rounded-md " />
        </div>
      </Skeleton>
      <Skeleton className="flex w-full flex-col gap-6 bg-white lg:w-1/2">
        <div className="flex items-center justify-between gap-12">
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-full rounded-full" />
        </div>
        <Skeleton className="h-4 w-full rounded-md " />
        <div className="h-[2px] bg-gray-100" />
        <Skeleton className="h-4 w-full rounded-md " />
        <div className="h-[2px] bg-gray-100" />
        <Skeleton className="h-4 w-full rounded-md " />
        <ul className="flex items-center gap-3">
          <Skeleton className="h-8 w-full rounded-md px-4 py-1 ring-1 " />
          <Skeleton className="h-8 w-full rounded-md px-4 py-1 ring-1 " />
          <Skeleton className="h-8 w-full rounded-md px-4 py-1 ring-1 " />
        </ul>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-full rounded-md " />
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="flex h-8 w-32 items-center justify-between rounded-3xl px-4 py-2" />
              <Skeleton className="h-4 w-full rounded-md" />
            </div>
            <Skeleton className="h-8 w-1/4 rounded-md px-4 py-1 " />
          </div>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <Skeleton className="h-4 w-full rounded-md " />
        <div>
          <Skeleton className="h-4 w-full rounded-md " />
          <Skeleton className="h-4 w-full rounded-md " />
        </div>
        <div className="flex items-center justify-between gap-2">
          <Skeleton className="h-4 w-full rounded-full p-2 " />
          <Skeleton className="h-4 w-full rounded-full p-2 " />
          <Skeleton className="h-4 w-full rounded-full p-2 " />
          <Skeleton className="h-4 w-full rounded-full p-2 " />
        </div>
        <div>
          <Skeleton className="h-4 w-full rounded-md " />
          <Skeleton className="h-4 w-full rounded-md " />
        </div>
        <div>
          <Skeleton className="h-4 w-full rounded-md " />
          <Skeleton className="h-4 w-full rounded-md " />
        </div>
        <div>
          <Skeleton className="h-4 w-full rounded-md " />
          <Skeleton className="h-4 w-full rounded-md " />
        </div>
        <div>
          <Skeleton className="h-4 w-full rounded-md " />
          <Skeleton className="h-4 w-full rounded-md " />
        </div>
        <div>
          <Skeleton className="h-4 w-full rounded-md " />
          <Skeleton className="h-4 w-full rounded-md " />
        </div>
        <div className="h-[2px] bg-gray-100" />
        <Skeleton className="h-4 w-full rounded-md " />
        <div className="flex flex-col gap-4">
          <div className="flex">
          <Skeleton className="h-4 w-full rounded-md " />
          </div>

          <div className="flex gap-2">
            <Star className="text-gray-400" />
            <Star className="text-gray-400" />
            <Star className="text-gray-400" />
            <Star className="text-gray-400" />
          </div>
          <Skeleton className="h-4 w-full rounded-md " />
          <Skeleton className="h-4 w-full rounded-md " />
        </div>
      </Skeleton>
    </div>
  );
};
