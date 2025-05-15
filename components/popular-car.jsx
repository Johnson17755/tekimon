"use client";

import CarCard from "./car-card";
import Image from "next/image";
import pop from "@/assets/p1.svg";
import pop1 from "@/assets/p2.svg";
import pop2 from "@/assets/p3.svg";
import pop3 from "@/assets/p4.svg";
import Link from "next/link";

const popularCars = [
  {
    name: "Koenigsegg",
    category: "Sport",
    image: pop,
    fuelCapacity: "90L",
    transmission: "Manual",
    passengers: 2,
    price: 99.0,
    isFavorite: true,
  },
  {
    name: "Nissan GT-R",
    category: "Sport",
    image: pop1,
    fuelCapacity: "80L",
    transmission: "Manual",
    passengers: 2,
    price: 80.0,
    originalPrice: 100.0,
  },
  {
    name: "Rolls-Royce",
    category: "Sedan",
    image: pop2,
    fuelCapacity: "70L",
    transmission: "Manual",
    passengers: 4,
    price: 96.0,
    isFavorite: true,
  },
  {
    name: "Nissan GT-R",
    category: "Sport",
    image: pop3,
    fuelCapacity: "80L",
    transmission: "Manual",
    passengers: 2,
    price: 80.0,
    originalPrice: 100.0,
  },
];

const PopularCars = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-22 py-8 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[16px] font-semibold text-[rgba(144,163,191,1)]">
          Popular Car
        </h2>
        <Link href="#" className="text-blue-600 hover:underline">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularCars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </section>
  );
};

export default PopularCars;
