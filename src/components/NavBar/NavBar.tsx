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
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";
import { NavLink, useNavigate } from "react-router-dom";
import { IUser } from "@/commons/interfaces";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const bg = useColorModeValue("white", "gray.800");
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

  const getUser = async () => {
    const response = await UserService.getUser();
    if (response.status === 200) {
      setData(response.data);
    }
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
        py={4}
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
                src="aquario.png"
                boxSize="60px"
                objectFit="contain"
                color="gray.500"
                alt="Logo Reliquario"
              />
              <VisuallyHidden>Reliquário</VisuallyHidden>
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <NavLink to="/">
                <Button variant="ghost">Home</Button>
              </NavLink>
              <NavLink to="/produtos">
                <Button variant="ghost">Produtos</Button>
              </NavLink>
              <NavLink to="/sobre">
                <Button variant="ghost">Carrinho</Button>
              </NavLink>
              {data && isAuthenticated ? (
                <>
                  {/*falta verifica para puxar o nome do fdp*/}
                  <Button variant="ghost">{data.username}</Button>
                  <Box boxSize="36px" borderRadius="full" bg="gray.200">
                    <Image
                      boxSize="24px"
                      borderRadius="full"
                      src={"teste"}
                      alt="Perfil"
                    />
                  </Box>
                </>
              ) : (
                <NavLink to="/login">
                  <Button variant="ghost">Entrar/Cadastrar</Button>
                </NavLink>
              )}
              {isAuthenticated && (
                <Button variant="ghost" onClick={OnClickLogout}>
                  Sair
                </Button>
              )}
            </HStack>
            <Button colorScheme="brand" size="sm">
              Get Started
            </Button>
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
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
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
                />
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default NavBar;
