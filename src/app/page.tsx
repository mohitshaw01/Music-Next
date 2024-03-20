import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import { Stick } from "next/font/google";
import StickyScroll from "@/components/StickyScroll";

export default function Home() {
  return (
    <div>
      <h1>Next.js + TypeScript</h1>
      <HeroSection />
      <FeaturedCourses /> 
      <StickyScroll />
    </div>
  );
}
