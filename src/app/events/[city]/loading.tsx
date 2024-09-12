import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
  return (
    <div className="justify-centerr mx-auto flex max-w-[1100px] flex-wrap gap-20 px-[20px] py-24">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
      <SkeletonCard />
    </div>
  );
}
