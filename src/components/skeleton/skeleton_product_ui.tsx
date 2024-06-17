import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonProductUI = () => {
  return (
    <div className="mt-12 flex animate-pulse flex-wrap justify-between gap-x-8 gap-y-16">
      <Skeleton className="flex w-full flex-col gap-4 bg-white sm:w-[45%] lg:w-[22%]">
        <Skeleton className="h-80 w-full rounded-md" />
        <div className="flex w-full justify-between">
          <Skeleton className="h-8 w-36 rounded-md" />
          <Skeleton className="ml-auto h-8 w-16  rounded-md" />
        </div>
        <Skeleton className="h-4 w-full rounded-md " />
        <Skeleton className="h-12 w-full rounded-2xl " />
      </Skeleton>
      <Skeleton className="flex w-full flex-col gap-4 bg-white sm:w-[45%] lg:w-[22%]">
        <Skeleton className="h-80 w-full rounded-md" />
        <div className="flex w-full justify-between">
          <Skeleton className="h-8 w-36 rounded-md" />
          <Skeleton className="ml-auto h-8 w-16 rounded-md" />
        </div>
        <Skeleton className="h-4 w-full rounded-md " />
        <Skeleton className="h-12 w-full rounded-2xl " />
      </Skeleton>
      <Skeleton className="flex w-full flex-col gap-4 bg-white sm:w-[45%] lg:w-[22%]">
        <Skeleton className="h-80 w-full rounded-md" />
        <div className="flex w-full justify-between">
          <Skeleton className="h-8 w-36 rounded-md" />
          <Skeleton className="ml-auto h-8 w-16  rounded-md" />
        </div>
        <Skeleton className="h-4 w-full rounded-md " />
        <Skeleton className="h-12 w-full rounded-2xl " />
      </Skeleton>
      <Skeleton className="flex w-full flex-col gap-4 bg-white sm:w-[45%] lg:w-[22%]">
        <Skeleton className="h-80 w-full rounded-md" />
        <div className="flex w-full justify-between">
          <Skeleton className="h-8 w-36 rounded-md" />
          <Skeleton className="ml-auto h-8 w-16  rounded-md" />
        </div>
        <Skeleton className="h-4 w-full rounded-md " />
        <Skeleton className="h-12 w-full rounded-2xl " />
      </Skeleton>
    </div>
  );
};
