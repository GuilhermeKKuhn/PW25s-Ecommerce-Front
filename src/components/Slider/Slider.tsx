import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Slider = () => {
  const slides = [
    {
      img: "bannerPromocao.png",
    },
    {
      img: "bannerPromocao.png",
    },
    {
      img: "bannerPromocao.png",
    },
    {
      img: "bannerPromocao.png",
    },
    {
      img: "bannerPromocao.png",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: "all .3s",
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 5000;
  const ANIMATION_DIRECTION = "right";
  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);

  return (
    <Flex
      w="100%"
      h="100%"
      bg="transparent"
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="100% " overflow="hidden" h="100%">
        <Flex pos="relative" h="100%" w="100%" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
                whiteSpace="nowrap"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                h="350px"
                objectFit="cover"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Slider;
