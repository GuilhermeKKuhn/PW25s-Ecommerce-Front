import React from 'react';
import {
    Flex,
    Box,
    chakra,
    Image,
    Button,
    Heading,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const CardProduto = () => (
    <Flex
        bg="#edf3f8"
        _dark={{
            bg: "#3e3e3e",
        }}
        p={10} 
        w="full"
        alignItems="center"
        justifyContent="center"
    >
        <Flex
            maxW="3xl" 
            mx="auto"
            bg="white"
            _dark={{
                bg: "gray.800",
            }}
            shadow="xl" 
            rounded="lg"
            overflow="hidden"
            flexDirection={{ base: "column", md: "row" }} 
        >
            <Box w={{ base: "100%", md: "50%" }} bgSize="cover">
                <Image
                    src="https://i0.wp.com/floggingenglish.com/media/contentMedia//2021/10/canon-f1-featured.jpg?fit=2500%2C1467&ssl=1" 
                    alt="imagem produto"
                    objectFit="cover"
                    boxSize="100%"
                />
            </Box>

            <Box
                w={ 2 / 3}
                p={{
                    base: 4,
                    md: 4,
                }} 
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
            >
                <chakra.h2
                    fontSize="xl"
                    fontWeight="bold"
                    color="gray.800"
                    mb={2} 
                    _dark={{
                        color: "white",
                    }}
                >
                    Câmera Analógica Canon F-11
                </chakra.h2>

                <chakra.p
                    fontSize="sm"
                    color="gray.600"
                    _dark={{
                        color: "gray.400",
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit fugiat error illum, itaque repudiandae.
                </chakra.p>

                <Heading color={"gray.900"} fontSize={"sm"}>R$ 1.499,90</Heading>

                <Flex mt={3} justifyContent="flex-end">
                    <Button
                        px={4}
                        py={2}
                        bg="yellow.400"
                        fontSize="sm"
                        color="gray.900"
                        fontWeight="bold"
                        borderRadius="lg"
                        ml={2} 
                        _hover={{
                            bg: "yellow.500",
                        }}
                        _focus={{
                            bg: "yellow.600",
                        }}
                    >
                        Adicionar no carrinho
                    </Button>
                </Flex>
            </Box>
        </Flex>
    </Flex>
);

export default CardProduto;
