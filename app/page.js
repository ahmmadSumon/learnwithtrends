import Image from "next/image";
import {NextUIProvider} from "@nextui-org/react";
import Navbar from "./components/Nav";
import HeroSection from "./components/HeroSection";
import {CarouselDemo} from "./components/CarouselDemo";
import {AppleCardsCarouselDemo } from "./components/AppleCardsCarouselDemo";
import { HeroParallaxDemo } from "./components/HeroParallaxDemo";
import Blog from "./blog/page";
import Courses from "./courses/page";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <NextUIProvider>
      {/* //max-w-[90] mx-auto */}
    <div className="max-w-[90] mx-auto ">
   
    <HeroSection/>
    <HeroParallaxDemo/>
   
    <Blog/>
    {/* <CarouselDemo/> */}
    <Courses/>


<BackgroundBeamsWithCollisionDemo/>

    </div>
    </NextUIProvider>
  );
}
