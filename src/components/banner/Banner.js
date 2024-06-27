import React, { useState } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import "./Banner.css";

export default function Banner() {
  const items = [
    {
      src: "https://bizweb.dktcdn.net/100/438/408/files/1920x600-87a0df76-55e0-475b-86e7-7db866781485.jpg?v=1704264662869",
      altText: "",
      caption: "",
      key: 1,
    },
    {
      src: "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/January2024/UT_BANNERitchu.png",
      altText: "",
      caption: "",
      key: 2,
    },
    {
      src: "https://bizweb.dktcdn.net/100/237/914/themes/679598/assets/g131.jpg?1691596779215",
      altText: "",
      caption: "",
      key: 3,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  return (
   
      <div className="banner-home">
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>

  );
}
