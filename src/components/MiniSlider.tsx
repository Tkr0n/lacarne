import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import "../styles/globals.css"

import {Skeleton} from "@/components/ui/skeleton"

export function MiniSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        active: true,
        duration: 5
      }}
      className="max-w-sm md:max-w-4xl"
    >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
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
