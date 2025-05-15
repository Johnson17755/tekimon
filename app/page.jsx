import PopularCars from "@/components/popular-car";
import RecommendationCars from "@/components/recommendation";
import ShowMore from "@/components/show-more";

export default function Home() {
  return (
    <>
      <PopularCars />
      <RecommendationCars />
      <ShowMore />
    </>
  );
}
