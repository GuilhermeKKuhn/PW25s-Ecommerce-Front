import {Swiper, SwiperProps} from "swiper/react";

import "swiper/css";
import "Swiper/css/navigation";
import "Swiper/css/pagination";
import './Slider.css'

import { ReactNode } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";

interface SliderProps{
    settings: SwiperProps;
    children: ReactNode;
}

export default function Slider({settings, children}: SliderProps) {
    return (
        <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
            {children}
        </Swiper>
    );

}

// import React, { useState } from "react";
// import { Flex, Box, Text, Image, HStack } from "@chakra-ui/react";

// const Slider = () => {
//   const arrowStyles = {
//     cursor: "pointer",
//     position: "absolute", // Changed from 'pos' to 'position'
//     top: "50%",
//     w: "auto",
//     mt: "-22px",
//     p: "16px",
//     color: "white",
//     fontWeight: "bold",
//     fontSize: "18px",
//     transition: "0.6s ease",
//     borderRadius: "0 3px 3px 0",
//     userSelect: "none",
//     _hover: {
//       opacity: 0.8,
//       bg: "black",
//     },
//   };

//   const slides = [
//     {
//       img: "/promocional.png",
//     },
//     {
//       img: "/promocional.png",
//     },
//     {
//       img: "/promocional.png",
//     },
//     {
//       img: "/promocional.png",
//     },
//     {
//       img: "/promocional.png",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slidesCount = slides.length;

//   const carouselStyle = {
//     transition: "all .5s",
//     ml: `-${currentSlide * 100}%`,
//   };

//   return (
//     <Flex
//       w="full"
//       bg="#edf3f8"
//       _dark={{
//         bg: "#3e3e3e",
//       }}
//       p={10}
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Flex w="full" overflow="hidden" pos="relative">
//         <Flex h="400px" w="full" {...carouselStyle}>
//           {slides.map((slide, sid) => (
//             <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
//               <Text
//                 color="white"
//                 fontSize="xs"
//                 p="8px 12px"
//                 pos="absolute"
//                 top="0"
//               >
//                 {sid + 1} / {slidesCount}
//               </Text>
//               <Image
//                 src={slide.img}
//                 alt="carousel image"
//                 boxSize="full"
//                 backgroundSize="cover"
//               />
//             </Box>
//           ))}
//         </Flex>

//         <HStack justify="center" pos="absolute" bottom="8px" w="full">
//           {Array.from({
//             length: slidesCount,
//           }).map((_, slide) => (
//             <Box
//               key={`dots-${slide}`}
//               cursor="pointer"
//               boxSize={["7px", null, "15px"]}
//               m="0 2px"
//               bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
//               rounded="50%"
//               display="inline-block"
//               transition="background-color 0.6s ease"
//               _hover={{
//                 bg: "blackAlpha.800",
//               }}
//               onClick={() => (slide)}
//             ></Box>
//           ))}
//         </HStack>
//       </Flex>
//     </Flex>
//   );
// };

// export default Slider;
