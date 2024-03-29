"use client";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image, { StaticImageData } from "next/image";
import furniture_1 from "/images/col-md-4.png";
import furniture_2 from "/images/furniture-2.png";
import furniture_3 from "/images/furniture-3.png";
import furniture_4 from "/images/furniture-4.png";
import useIsMobile from "@/hooks/useIsMobile";

function srcset(
  image: string | StaticImageData,
  size: number,
  rows = 1,
  cols = 1
) {
  return {
    src: `${image}`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
    className: "object-fill w-full h-full",
  };
}

export default function HomeHero() {
  const { isMobile } = useIsMobile();
  const mobileCols = isMobile ? 1 : 2;

  return (
    <ImageList
      sx={{
        maxWidth: "80rem",
        width: "100%",
        // minHeight: 540,
        height: "auto",
      }}
      variant="quilted"
      cols={isMobile ? 1 : 6}
      rowHeight={130}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.title}
          cols={isMobile ? mobileCols : item.cols || 1}
          rows={isMobile ? 2 : item.rows || 1}
          sx={{
            margin: ".5rem",
          }}
        >
          <Image
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            width={400}
            height={200}
            title={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/images/col-md-4.png",
    title: "Furniture 1",
    rows: 5,
    cols: 2,
  },
  {
    img: "/images/furniture-2.png",
    title: "Furniture 2",
    rows: 3,
    cols: 4,
  },
  {
    img: "/images/furniture-3.png",
    title: "Furniture 3",
    rows: 1.8,
    cols: 2,
  },
  {
    img: "/images/furniture-4.png",
    title: "Furniture 4",
    rows: 1.8,
    cols: 2,
  },
];
