import React from "react";
import { Star } from "lucide-react";

function ReviewCard() {
  return (
    <div className="w-full bg-[#EBEBEC] flex flex-col justify-center items-start gap-4 rounded-[16px] p-6">
      <div className="w-full flex justify-start items-center gap-1.5">
        <Star size={18} color="#323232" />
        <Star size={18} color="#323232" />
        <Star size={18} color="#323232" />
        <Star size={18} color="#323232" />
        <Star size={18} color="#323232" />
      </div>
      <p className="inter_reg text-black text-[15px]">
        I'm obsessed with this restaurant. To have such an extensive menu makes
        my vegetarian heart happy. Everything being vegan, no cross
        contamination, no worries, just amazing food.
      </p>

      <div className="w-full flex justify-start items-center gap-2">
        <div className="w-[32px] aspect-square bg-zinc-400 rounded-full shadow-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/Images/Demo/hero.jpeg"
            alt="img"
          />
        </div>
        <h4 className="inter_med text-[#050505] text-[20px]">Brittney L.</h4>
      </div>
    </div>
  );
}

export default ReviewCard;
