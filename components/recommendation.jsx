"use client";

import CarCard from "./car-card";
import rec from "@/assets/po.svg";
import rec1 from "@/assets/po1.svg";
import rec2 from "@/assets/po2.svg";
import rec3 from "@/assets/po3.svg";
import rec4 from "@/assets/po4.svg";
import rec5 from "@/assets/po5.svg";
import rec6 from "@/assets/po6.svg";
import Link from "next/link";

const recommendedCars = [
  {
    name: "All New Rush",
    category: "SUV",
    image: rec,
    fuelCapacity: "70L",
    transmission: "Manual",
    passengers: 6,
    price: 72.0,
    originalPrice: 80.0,
  },
  {
    name: "CR - V",
    category: "SUV",
    image: rec1,
    fuelCapacity: "80L",
    transmission: "Manual",
    passengers: 6,
    price: 80.0,
    isFavorite: true,
  },
  {
    name: "All New Terios",
    category: "SUV",
    image: rec2,
    fuelCapacity: "90L",
    transmission: "Manual",
    passengers: 6,
    price: 74.0,
  },
  {
    name: "CR - V",
    category: "SUV",
    image: rec3,
    fuelCapacity: "80L",
    transmission: "Manual",
    passengers: 6,
    price: 80.0,
    isFavorite: true,
  },
  {
    name: "MG ZX Exclusice",
    category: "Hatchback",
    image: rec4,
    fuelCapacity: "70L",
    transmission: "Manual",
    passengers: 4,
    price: 76.0,
    originalPrice: 80.0,
    isFavorite: true,
  },
  {
    name: "New MG ZS",
    category: "SUV",
    image: rec5,
    fuelCapacity: "80L",
    transmission: "Manual",
    passengers: 6,
    price: 80.0,
  },
  {
    name: "MG ZX Excite",
    category: "Hatchback",
    image: rec6,
    fuelCapacity: "90L",
    transmission: "Manual",
    passengers: 4,
    price: 74.0,
    isFavorite: true,
  },
  {
    name: "New MG ZS",
    category: "SUV",
    image: rec5,
    fuelCapacity: "80L",
    transmission: "Manual",
    passengers: 6,
    price: 80.0,
  },
];

const RecommendationCars = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-22 py-8 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[16px] font-semibold text-[rgba(144,163,191,1)]">
          Recomendation Car
        </h2>
        <Link href="#" className="text-blue-600 hover:underline">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedCars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </section>
  );
};

export default RecommendationCars;
