import * as React from "react"
import Image1 from "../../public/s2.png";
import Image2 from "../../public/s2.png";
import Image3 from "../../public/s2.png";

import { Card, CardContent } from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/Carousel"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-[90rem] mx-auto mb-[10rem]">
      <CarouselContent>
        {Array.from({ length: 3}).map((_, index) => (
          <CarouselItem key={index}>
            <div className=" h-[60vh]">
              <Card>
                <CardContent className="flex  justify-center p-6">
                  <img src={index === 0 ? Image1.src : index === 1 ? Image2.src : Image3.src} alt={`Image ${index + 1}`} style={{width: '100%', objectFit:"contain"}} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
