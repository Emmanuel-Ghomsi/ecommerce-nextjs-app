import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonCategoryUI = () => {
  return (
    <div className="mt-12 flex animate-pulse flex-wrap items-center justify-center gap-x-8 gap-y-16 px-4">
      <Skeleton className="flex w-full flex-col gap-4 bg-white sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <Skeleton className="h-96 w-full rounded-md" />
        <Skeleton className="h-4 w-full rounded-md " />
      </Skeleton>
      <Skeleton className="flex w-full flex-col gap-4 bg-white sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <Skeleton className="h-96 w-full rounded-md" />
        <Skeleton className="h-4 w-full rounded-md " />
      </Skeleton>
      <Skeleton className="flex w-full flex-col gap-4 bg-white sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <Skeleton className="h-96 w-full rounded-md" />
        <Skeleton className="h-4 w-full rounded-md " />
      </Skeleton>
      <Skeleton className="flex w-full flex-col gap-4 bg-white sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <Skeleton className="h-96 w-full rounded-md" />
        <Skeleton className="h-4 w-full rounded-md " />
      </Skeleton>
      <Skeleton className="flex w-full flex-col gap-4 bg-white sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <Skeleton className="h-96 w-full rounded-md" />
        <Skeleton className="h-4 w-full rounded-md " />
      </Skeleton>
    </div>
  );
};
