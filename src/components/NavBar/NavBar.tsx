import React from "react";
import {
  chakra,
  Image,
  Flex,
  HStack,
  Button,
  Box,
  IconButton,
  VStack,
  CloseButton,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
} from "@chakra-ui/react";

import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import AuthService from "@/services/AuthService";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const bg = useColorModeValue("rgb(54,54,54)", "rgba(54,54,54)");
  const mobileNav = useDisclosure();
  const navigate = useNavigate();
  const isAuthenticated = AuthService.isAuthenticated();
  const OnClickLogout = () => {
    AuthService.logout();
    navigate("/");
  };

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={2}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Reliquário"
              display="flex"
              alignItems="center"
            >
              <Image
                src="teste2.png"
                boxSize="40px"
                objectFit="contain"
                alt="Logo Reliquario"
              />
              <VisuallyHidden>Reliquário</VisuallyHidden>
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={4}
              mr={1}
              color="white"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <NavLink to="/">
                <Button variant="ghost" color="white">
                  Home
                </Button>
              </NavLink>
              <NavLink to="/produtos">
                <Button variant="ghost" color="white">
                  Produtos
                </Button>
              </NavLink>
              <NavLink to="/carrinho">
                <Button variant="ghost" color="white">
                  <FaShoppingCart />
                </Button>
              </NavLink>
              {isAuthenticated ? (
                <>
                  <Button variant="ghost" color="white">
                    {"Nome do Usuário"}
                  </Button>
                  <Box boxSize="36px" borderRadius="full" bg="gray.200">
                    <Image
                      boxSize="36px"
                      borderRadius="full"
                      src={"avatar_url"}
                      alt="Perfil"
                      onClick={() => navigate("/perfil")}
                      cursor="pointer"
                    />
                  </Box>
                </>
              ) : (
                <NavLink to="/login">
                  <Button variant="ghost" color="white">
                    Entrar/Cadastrar
                  </Button>
                </NavLink>
              )}
              {isAuthenticated && (
                <Button variant="ghost" color="white" onClick={OnClickLogout}>
                  Sair
                </Button>
              )}
            </HStack>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="white"
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                  color="white"
                />
                <NavLink to="/">
                  <Button variant="ghost" color="white" w="full">
                    Home
                  </Button>
                </NavLink>
                <NavLink to="/produtos">
                  <Button variant="ghost" color="white" w="full">
                    Produtos
                  </Button>
                </NavLink>
                <NavLink to="/carrinho">
                  <Button variant="ghost" color="white" w="full">
                    <FaShoppingCart />
                  </Button>
                </NavLink>
                {isAuthenticated ? (
                  <>
                    <Button variant="ghost" color="white" w="full">
                      {"Nome do Usuário"}
                    </Button>
                    <Button
                      variant="ghost"
                      color="white"
                      w="full"
                      onClick={() => navigate("/perfil")}
                    >
                      Perfil
                    </Button>
                    <Button
                      variant="ghost"
                      color="white"
                      w="full"
                      onClick={OnClickLogout}
                    >
                      Sair
                    </Button>
                  </>
                ) : (
                  <NavLink to="/login">
                    <Button variant="ghost" color="white" w="full">
                      Entrar/Cadastrar
                    </Button>
                  </NavLink>
                )}
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default NavBar;
