"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function GamingCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnLastSnap: true }),
  );

  return (
    <div className="flex justify-center self-center">
      <Carousel setApi={setApi} plugins={[plugin.current]} className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img src={`/images/games/image_${index}.png`} />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-8">
          <CarouselPrevious />
          <div className="py-2 text-center text-sm text-muted-foreground">
            Slide {current} of {count}
          </div>
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
