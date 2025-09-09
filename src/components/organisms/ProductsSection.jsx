import React, { useState } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PRODUCTS = [
    { id: 1, name: "Remera Azul", price: 1500, image: "/assets/producto.jpg", description: "Remera de algodón, color azul.", weight: 0.3, height: 2, width: 30, depth: 1 },
    { id: 2, name: "Pantalón Negro", price: 2500, image: "/assets/producto.jpg", description: "Pantalón de gabardina negro.", weight: 0.5, height: 5, width: 40, depth: 3 },
    { id: 3, name: "Zapatillas Blancas", price: 5000, image: "/assets/producto.jpg", description: "Zapatillas deportivas blancas.", weight: 1, height: 12, width: 28, depth: 10 },
    { id: 4, name: "Campera Cuero", price: 8000, image: "/assets/producto.jpg", description: "Campera de cuero marrón.", weight: 1.5, height: 70, width: 50, depth: 10 },
    { id: 5, name: "Mochila Negra", price: 3500, image: "/assets/producto.jpg", description: "Mochila resistente con varios compartimentos.", weight: 0.8, height: 45, width: 30, depth: 15 },
    { id: 6, name: "Gorra Roja", price: 800, image: "/assets/producto.jpg", description: "Gorra deportiva color rojo.", weight: 0.1, height: 12, width: 20, depth: 8 },
];

export default function ProductsSection() {
    const navigate = useNavigate();
    const [products] = useState(PRODUCTS);

    return (
        <Flex align="center" justify="center" px={5}>
            <Box width="100%" maxWidth="1500px">
                <Text
                    fontSize={{ base: "2xl", lg: "3xl" }}
                    color={"#1a365d"}
                    borderBottom={"1px solid #1a365d"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                    mt={12}
                    pb={5}
                >
                    Productos
                </Text>

                <Flex justify="center" gap={10} wrap="wrap" mt={10}>
                    {products.map((product) => (
                        <Box
                            key={product.id}
                            border="1px solid #ccc"
                            borderRadius="md"
                            p={4}
                            textAlign="center"
                            width="300px"
                            cursor="pointer"
                            _hover={{ boxShadow: "lg" }}
                            onClick={() =>
                                navigate(`/product/${product.id}`, { state: product })
                            }
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: "100%", height: "150px", objectFit: "cover" }}
                            />
                            <Text fontWeight="bold" mt={2}>
                                {product.name}
                            </Text>
                            <Text color="gray.600">${product.price}</Text>
                            <Button mt={3} colorScheme="teal" size="sm">
                                Ver Detalle
                            </Button>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Flex>
    );
}
