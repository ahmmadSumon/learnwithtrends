"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";

// Import only the necessary images


// Use a more efficient way to import images
// import * as images from '../assets';

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail: "/add1.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "/add1.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail: "/345.gif",
    },
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail: "/123.gif",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail: "/add2.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail: "/345.gif",
    },
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail: "/add3.jpg",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail: "/add2.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: "/add4.webp",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail: "/add4.webp",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail: "/345.gif",
    },
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail: "/add1.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail: "/add3.jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail: "/345.gif",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail: "/add2.png",
    },
  ];
  
