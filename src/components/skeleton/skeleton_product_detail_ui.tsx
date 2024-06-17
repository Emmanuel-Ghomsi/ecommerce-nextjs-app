import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";

export const SkeletonProductDetailUI = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 animate-pulse">
      <Skeleton className="bg-white w-full lg:w-1/2 lg:sticky top-20 h-max">
        <Skeleton className="h-[500px] rounded-md" />
        <div className="flex justify-between gap-4 mt-8">
          <Skeleton className="w-1/4 h-32 gap-4 mt-8 rounded-md " />
          <Skeleton className="w-1/4 h-32 gap-4 mt-8 rounded-md " />
          <Skeleton className="w-1/4 h-32 gap-4 mt-8 rounded-md " />
          <Skeleton className="w-1/4 h-32 gap-4 mt-8 rounded-md " />
        </div>
      </Skeleton>
      <Skeleton className="bg-white w-full lg:w-1/2 flex flex-col gap-6">
        <div className="flex justify-between items-center gap-12">
          <Skeleton className="w-full h-4 rounded-md" />
          <Skeleton className="w-full h-4 rounded-full" />
        </div>
        <Skeleton className="w-full h-4 rounded-md " />
        <div className="h-[2px] bg-gray-100" />
        <Skeleton className="w-full h-4 rounded-md " />
        <div className="h-[2px] bg-gray-100" />
        <Skeleton className="w-full h-4 rounded-md " />
        <ul className="flex items-center gap-3">
          <Skeleton className="w-full h-8 ring-1 rounded-md py-1 px-4 " />
          <Skeleton className="w-full h-8 ring-1 rounded-md py-1 px-4 " />
          <Skeleton className="w-full h-8 ring-1 rounded-md py-1 px-4 " />
        </ul>
        <div className="flex flex-col gap-4">
          <Skeleton className="w-full h-4 rounded-md " />
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="py-2 px-4 rounded-3xl flex items-center justify-between w-32 h-8" />
              <Skeleton className="w-full h-4 rounded-md" />
            </div>
            <Skeleton className="w-1/4 h-8 rounded-md py-1 px-4 " />
          </div>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <Skeleton className="w-full h-4 rounded-md " />
        <div>
          <Skeleton className="w-full h-4 rounded-md " />
          <Skeleton className="w-full h-4 rounded-md " />
        </div>
        <div className="flex justify-between items-center gap-2">
          <Skeleton className="w-full h-4 rounded-full p-2 " />
          <Skeleton className="w-full h-4 rounded-full p-2 " />
          <Skeleton className="w-full h-4 rounded-full p-2 " />
          <Skeleton className="w-full h-4 rounded-full p-2 " />
        </div>
        <div>
          <Skeleton className="w-full h-4 rounded-md " />
          <Skeleton className="w-full h-4 rounded-md " />
        </div>
        <div>
          <Skeleton className="w-full h-4 rounded-md " />
          <Skeleton className="w-full h-4 rounded-md " />
        </div>
        <div>
          <Skeleton className="w-full h-4 rounded-md " />
          <Skeleton className="w-full h-4 rounded-md " />
        </div>
        <div>
          <Skeleton className="w-full h-4 rounded-md " />
          <Skeleton className="w-full h-4 rounded-md " />
        </div>
        <div>
          <Skeleton className="w-full h-4 rounded-md " />
          <Skeleton className="w-full h-4 rounded-md " />
        </div>
        <div className="h-[2px] bg-gray-100" />
        <Skeleton className="w-full h-4 rounded-md " />
        <div className="flex flex-col gap-4">
          <div className="flex">
            <Skeleton className="w-full h-4 rounded-md " />
          </div>

          <div className="flex gap-2">
            <Star className="text-gray-400" />
            <Star className="text-gray-400" />
            <Star className="text-gray-400" />
            <Star className="text-gray-400" />
          </div>
          <Skeleton className="w-full h-4 rounded-md " />
          <Skeleton className="w-full h-4 rounded-md " />
        </div>
      </Skeleton>
    </div>
  );
};
