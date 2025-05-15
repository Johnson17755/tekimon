"use client";

import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CarCard = ({
  name,
  category,
  image,
  fuelCapacity,
  transmission,
  passengers,
  price,
  originalPrice,
  isFavorite = false,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
        <button
          className={cn(
            "p-2 rounded-full hover:bg-accent transition-colors",
            isFavorite && "text-red-500"
          )}
        >
          <Heart
            className="h-5 w-5"
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="relative h-40">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>{fuelCapacity}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{transmission}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{passengers} People</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div>
          <p className="font-semibold">${price}/day</p>
          {originalPrice && (
            <p className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </p>
          )}
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
