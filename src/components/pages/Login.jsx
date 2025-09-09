import React, { useState } from "react";
import {
  Flex,
  Input,
  Button,
  Heading,
  FormControl,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      pb="25vh"
      bg="secondary.500"
    >
      <Flex
        display="flex"
        shadow="lg"
        p={5}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width={["80%", "60%", "50%", "40%", "30%", "20%"]}
        borderRadius="md"
        bg="#fff"
      >
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Heading
              as="h4"
              fontSize={25}
              textAlign="center"
              color="primary.500"
              mb={5}
            >
              Iniciar Sesión
            </Heading>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              mb={3}
            />

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={handleChange}
              mb={3}
            />

            <Button
              type="submit"
              fontSize="sm"
              variant="tertiary"
              width="100%"
            >
              Ingresar
            </Button>
          </FormControl>
        </form>
      </Flex>
    </Flex>
  );
}
