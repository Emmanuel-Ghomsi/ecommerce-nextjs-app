import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonCategoryUI = () => {
  return (
    <div className="mt-12 px-4 flex gap-x-8 gap-y-16 items-center justify-center flex-wrap animate-pulse">
      <Skeleton className="bg-white w-full flex flex-col gap-4 sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <Skeleton className="w-full h-96 rounded-md" />
        <Skeleton className="w-full h-4 rounded-md " />
      </Skeleton>
      <Skeleton className="bg-white w-full flex flex-col gap-4 sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <Skeleton className="w-full h-96 rounded-md" />
        <Skeleton className="w-full h-4 rounded-md " />
      </Skeleton>
      <Skeleton className="bg-white w-full flex flex-col gap-4 sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <Skeleton className="w-full h-96 rounded-md" />
        <Skeleton className="w-full h-4 rounded-md " />
      </Skeleton>
      <Skeleton className="bg-white w-full flex flex-col gap-4 sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <Skeleton className="w-full h-96 rounded-md" />
        <Skeleton className="w-full h-4 rounded-md " />
      </Skeleton>
      <Skeleton className="bg-white w-full flex flex-col gap-4 sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <Skeleton className="w-full h-96 rounded-md" />
        <Skeleton className="w-full h-4 rounded-md " />
      </Skeleton>
    </div>
  );
};
