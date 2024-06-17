import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonProductUI = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap animate-pulse">
      <Skeleton className="bg-white w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <Skeleton className="w-full h-80 rounded-md" />
        <div className="w-full flex justify-between">
          <Skeleton className="w-36 h-8 rounded-md" />
          <Skeleton className="w-16 h-8 rounded-md  ml-auto" />
        </div>
        <Skeleton className="w-full h-4 rounded-md " />
        <Skeleton className="w-full h-12 rounded-2xl " />
      </Skeleton>
      <Skeleton className="bg-white w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <Skeleton className="w-full h-80 rounded-md" />
        <div className="w-full flex justify-between">
          <Skeleton className="w-36 h-8 rounded-md" />
          <Skeleton className="w-16 h-8 rounded-md  ml-auto" />
        </div>
        <Skeleton className="w-full h-4 rounded-md " />
        <Skeleton className="w-full h-12 rounded-2xl " />
      </Skeleton>
      <Skeleton className="bg-white w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <Skeleton className="w-full h-80 rounded-md" />
        <div className="w-full flex justify-between">
          <Skeleton className="w-36 h-8 rounded-md" />
          <Skeleton className="w-16 h-8 rounded-md  ml-auto" />
        </div>
        <Skeleton className="w-full h-4 rounded-md " />
        <Skeleton className="w-full h-12 rounded-2xl " />
      </Skeleton>
      <Skeleton className="bg-white w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <Skeleton className="w-full h-80 rounded-md" />
        <div className="w-full flex justify-between">
          <Skeleton className="w-36 h-8 rounded-md" />
          <Skeleton className="w-16 h-8 rounded-md  ml-auto" />
        </div>
        <Skeleton className="w-full h-4 rounded-md " />
        <Skeleton className="w-full h-12 rounded-2xl " />
      </Skeleton>
    </div>
  );
};
