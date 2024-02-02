"use client";

import "@mantine/carousel/styles.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

type Item = {
  imageSrc: string;
};

type DataType = {
  data: Item[];
};

export default function CarouselCustom({ data }: DataType) {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <Carousel
      withIndicators
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      loop
    >
      {data.map((item: Item) => {
        return (
          <Carousel.Slide key={item.imageSrc}>
            {" "}
            <Image alt="cc" src={item.imageSrc} />
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
}
