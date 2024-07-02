/*Quando for estilizar a nav, precisa adicionar o logo e o nome, no lugar da palavra carrinho coloca um carrinho ou sla, algo que tu ache legal
ai tem duas questoes, quando ta logado ele aparece o nome e um circulo que teria que adicionar aqueles avatarzinho de perfil, 
pensei que quando ele clicasse ali devia mandar pra tela de perfil de usuario tambem mostra o sair so quando ta logado, se nao esta logado aparece entrar/cadastrar
ve ai a maneira que fique mais bonita essa parte e estiliza*/

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
  Link,
} from "@chakra-ui/react";

import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";
import { NavLink, useNavigate } from "react-router-dom";
import { IUser } from "@/commons/interfaces";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const bg = useColorModeValue("rgb(54,54,54)", "rgba(54,54,54)");
  const mobileNav = useDisclosure();
  const navigate = useNavigate();
  const isAuthenticated = AuthService.isAuthenticated();
  const [data, setData] = useState<IUser>({} as IUser);

  const OnClickLogout = () => {
    AuthService.logout();
    navigate("/");
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (isAuthenticated) {
        try {
          const response = await UserService.getUser();
          setData(response);
        } catch (error) {
          console.error("Erro ao buscar usuário:", error);
        }
      }
    };
    fetchUser();
  }, [isAuthenticated]);

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
                objectFit="cover"
                width={40}
                mt={2}
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
                <Button variant="ghost" color="white" _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}>
                  Home
                </Button>
              </NavLink>
              <NavLink to="/produto">
                <Button variant="ghost" color="white" _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}>
                  Produtos
                </Button>
              </NavLink>
              <NavLink to="/carrinho">
                <Button variant="ghost" color="white" _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}>
                  <FaShoppingCart />
                </Button>
              </NavLink>
              {data && isAuthenticated ? (
                <>
                  <Button variant="ghost" color="white" 
                  _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}>{data.username}</Button>
                  <Box boxSize="36px" borderRadius="full" bg="gray.200">
                    <Image
                      boxSize="36px"
                      borderRadius="full"
                      src={"do-utilizador.png"}
                      alt="Perfil"
                      onClick={() => navigate("/perfil")}
                      cursor="pointer"
                    />
                  </Box>
                </>
              ) : (

                <Flex as="nav" align="center" gap="4">
                  <NavLink to="/login">
                      <Link
                        display="inline-block"
                        variant="ghost"
                        color="white"
                        w="full"
                        _hover={{
                          textDecoration: "none",
                          borderBottom: "2px solid white",
                        }}
                      >
                        Entrar
                      </Link>
                  </NavLink>
                    /
                  <NavLink to="/signup">
                      <Link
                        display="inline-block"
                        variant="ghost"
                        color="white"
                        w="full"
                        _hover={{
                          textDecoration: "none",
                          borderBottom: "2px solid white",
                        }}
                      >
                        Cadastrar
                      </Link>
                  </NavLink>
                </Flex>
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
                    <Button variant="ghost" color="white" w="full" _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}>
                      {"Nome do Usuário"}
                    </Button>
                    <Button
                      variant="ghost"
                      color="white"
                      w="full"
                      _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                      onClick={() => navigate("/perfil")}
                    >
                      Perfil
                    </Button>
                    <Button
                      variant="ghost"
                      color="white"
                      w="full"
                      _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                      onClick={OnClickLogout}
                    >
                      Sair
                    </Button>
                  </>
                ) : (
                  <NavLink to="/login">
                    <Link
                      variant="ghost"
                      color="white"
                      w="full"
                      _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                      href="/login"
                    >
                      Entrar
                    </Link>

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
