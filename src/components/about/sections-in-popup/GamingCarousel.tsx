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

import Image, { StaticImageData } from "next/image";
import image_0 from "../../../../public/images/games/image_0.png";
import image_1 from "../../../../public/images/games/image_1.png";
import image_2 from "../../../../public/images/games/image_2.png";
import image_3 from "../../../../public/images/games/image_3.png";
import image_4 from "../../../../public/images/games/image_4.png";

interface Games {
  img: StaticImageData;
  game: string;
}

const games: Games[] = [
  { img: image_0, game: "League Of Legends" },
  { img: image_1, game: "Valorant" },
  { img: image_2, game: "Overwatch" },
  { img: image_3, game: "Apex Legends" },
  { img: image_4, game: "Path Of Exile" },
];

export default function GamingCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnLastSnap: true }),
  );

  return (
    <div className="flex justify-center self-center">
      <Carousel setApi={setApi} plugins={[plugin.current]}>
        <CarouselContent>
          {games.map(({ img, game }, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Card>
                <CardContent className="flex items-center justify-center">
                  <Image
                    src={img}
                    alt={`Picture of ${game}`}
                    data-position="center center"
                    style={{
                      width: "670px",
                      height: "auto",
                    }}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-8 pt-4">
          <CarouselPrevious />
          <div className="py-2 text-center text-sm text-muted-foreground">
            {games[current].game}
          </div>
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
