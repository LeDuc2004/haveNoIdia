"use client";

import BaseButton from "@/components/elements/Button";
import CarouselCustom from "@/components/widgets/Carousel";
import React from "react";

const page = () => {
  return (
    <>
      <BaseButton size="compact-md">Button</BaseButton>
      <CarouselCustom />
    </>
  );
};

export default page;
