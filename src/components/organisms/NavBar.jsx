import React from "react";
import {
  Box,
  Flex,
  Button,
  IconButton,
  HStack,
  Text,
  useBreakpointValue,
  Divider,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const displayMenu = useBreakpointValue({
    base: "none",
    sm: "none",
    md: "none",
    lg: "flex",
  });

  const fixNav = useBreakpointValue({
    base: "sticky",
    lg: "auto",
  });

  return (
    <>
      <Flex bg={"#1a365d"} justifyContent={"center"} alignItems={"center"}>
        <Box py={1} px={2} fontSize="sm" color={"white"} textAlign={"center"}>
          Precios especiales al consultar por mayor en productos seleccionados
        </Box>
      </Flex>
      <Box
        bg="#fff"
        boxShadow="md"
        position={fixNav}
        top={0}
        width="100%"
        zIndex={10}
      >
        <Flex
          boxShadow="md"
          justifyContent="space-between"
          alignItems="center"
          py="15px"
          px={[7.5, 8, 8, 16, 16, 24]}
          position="relative"
          zIndex={10}
        >
          <Link to="">
            <img
              onClick={onClose}
              src="/assets/Logo.svg"
              style={{ cursor: "pointer", height: "45px" }}
            />
          </Link>
          <HStack
            display={displayMenu}
            flexDirection="row"
            alignItems="center"
            spacing={4}
          >
            <Link to="">
              <Button fontSize="sm" color="primary.500" variant="ghost">
                Inicio
              </Button>
            </Link>
            <Link to="/contacto">
              <Button fontSize="sm" color="primary.500" variant="ghost">
                Contacto
              </Button>
            </Link>
            <Link to="/nosotros">
              <Button fontSize="sm" color="primary.500" variant="ghost">
                Sobre Nosotros
              </Button>
            </Link>
            <Button
              fontSize="sm"
              colorScheme="gray"
              color="primary.500"
              bg="none"
              border="1px solid"
              borderColor="primary.500"
              onClick={() => navigate("/login")}
            >
              Iniciar Sesión
            </Button>
          </HStack>
          <Flex alignItems="center" flexDirection="row">
            <IconButton
              display={{ base: "flex", lg: "none" }}
              fontSize={30}
              icon={<HamburgerIcon color="primary.500" />}
              variant="ghost"
              ms={5}
              onClick={onOpen}
            />
          </Flex>
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Text fontSize="lg" textAlign="center" m={0}>Menú</Text>
          </DrawerHeader>
          <Divider m={0} />
          <DrawerBody py={0}>
            <Link to="">
              <Button
                onClick={onClose}
                fontSize='sm'
                h={"45px"}
                w={"100%"}
                my={1}
                color="primary.500"
                variant="ghost"
              >
                Inicio
              </Button>
            </Link>
            <Divider m={0} />
            <Link to="/contacto">
              <Button
                onClick={onClose}
                fontSize='sm'
                h={"45px"}
                w={"100%"}
                my={1}
                color="primary.500"
                variant="ghost"
              >
                Contacto
              </Button>
            </Link>
            <Divider m={0} />
            <Link to="/nosotros">
              <Button
                onClick={onClose}
                fontSize='sm'
                h={"45px"}
                w={"100%"}
                my={1}
                color="primary.500"
                variant="ghost"
              >
                Nosotros
              </Button>
            </Link>
            <Divider m={0} />
            <Button
              onClick={() => navigate("/login")}
              fontSize='sm'
              mt={1}
              mb={3}
              w={"100%"}
              colorScheme="gray"
              color="primary.500"
              bg="none"
              border="1px solid"
              borderColor="primary.500"
            >
              Iniciar Sesión
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
