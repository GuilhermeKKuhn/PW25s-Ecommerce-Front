import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Link,
  Stack,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <Box
    bg = "rgba(54,54,54)"
    color="white"
    w="100%"
    mt="auto"
    
  >
    <Stack
      direction={{
        base: "column",
        lg: "row",
      }}
      w="full"
      justify="space-between"
      p={6}
      
    >
      <Flex justify="center">
        <Image
          src="teste22.png"
          alt="Logo Reliquario"
          rounded="lg"
          width={150}
          height={90}
          my={{
            base: 2,
            lg: 0,
          }}
        />
      </Flex>
      <HStack
        alignItems="start"
        flex={1}
        justify="space-around"
        fontSize={{
          base: "12px",
          md: "16px",
        }}
        color="gray.800"
        _dark={{
        }}
        textAlign={{
          base: "center",
          md: "left",
        }}
      >
        <Flex justify="start" direction="column">
          <Link color="white" mt={5}>Pre-Sale FAQS</Link>
          <Link color="white">Submit a ticket</Link>
        </Flex>
        <Flex justify="start" direction="column">
          <Link color="white" mt={5}>Services</Link>
          <Link color="white">Theme Tweak</Link>
        </Flex>
      </HStack>
      <HStack
        alignItems="start"
        flex={1}
        justify="space-around"
        fontSize={{
          base: "12px",
          md: "16px",
        }}
        _dark={{
          color: "white",
        }}
        textAlign={{
          base: "center",
          md: "left",
        }}
      >
        <Flex justify="start" direction="column">
          <Link color="white" mt={5}>Show Case</Link>
          <Link color="white">Widget Kit</Link>
          <Link color="white">Support</Link>
        </Flex>
        <Flex justify="start" direction="column">
          <Link color="white" mt={5}>About Us</Link>
          <Link color="white">Contact Us</Link>
          <Link color="white">Resources</Link>
        </Flex>
      </HStack>
    </Stack>
    <Divider
      w="95%"
      mx="auto"
      color="white"
      _dark={{
      }}
      h="3.5px"
    />
    <VStack >
      <HStack justify="center">
        <Link>
          <Icon
            as={FaFacebookF}
            color="white" 
            _dark={{
            }}
            h="20px"
            w="20px"
          />
        </Link>
        <Link>
          <Icon
            as={FaTwitter}
            color="white"
            _dark={{
            }}
            h="20px"
            w="20px"
          />
        </Link>
        <Link>
          <Icon
            as={FaInstagram}
            color="white"
            _dark={{
            }}
            h="20px"
            w="20px"
          />
        </Link>
        <Link>
          <Icon
            as={FaLinkedinIn}
            color="white"
            _dark={{
            }}
            h="20px"
            w="20px"
          />
        </Link>
      </HStack>

      <Text
        textAlign="center"
        fontSize="sm"
        color="white"
        _dark={{
        }}
      >
        &copy; Copyright. All rights reserved.
      </Text>
    </VStack>
  </Box>
);

export default Footer;