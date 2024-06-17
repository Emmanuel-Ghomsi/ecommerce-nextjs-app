import { Star } from "lucide-react";
import { Date } from "./date";

export const Reviews = async ({ reviews }: { reviews: any }) => {
  return reviews.map((review: any, index: number) => (
    <div className="flex flex-col gap-4" key={index}>
      {/* UTILISATEUR */}
      <div className="flex text-sm font-semibold">
        <p>{review.reviewerName}</p>(
        <span className="italic">{review.reviewerEmail}</span>)
      </div>

      {/* STARS */}
      <div className="flex gap-2">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="text-yellow-400" />
        ))}
      </div>
      {/* DESCRIPTION */}
      {review.comment && <p>{review.comment}</p>}
      {review.date && (
        <p className="italic text-xs">
          <Date dateString={review.date} />
        </p>
      )}
    </div>
  ));
};
