import React, { useState } from "react";
import {
    Box,
    Input,
    IconButton,
    Image,
    Text,
    Button,
    Flex,
    VStack,
    Badge,
    Divider,
    Icon,
} from "@chakra-ui/react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";
import { FiExternalLink } from "react-icons/fi";

export default function ProductDetails() {
    const { productId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const product = location.state;
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <Box textAlign="center" mt={20}>
                <Text>No se encontró el producto con ID {productId}</Text>
                <Button mt={5} onClick={() => navigate("/")}>
                    Volver a productos
                </Button>
            </Box>
        );
    }

    const handleQuantityChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value) || 1);
        setQuantity(value);
    };

    const incrementQuantity = () => setQuantity((q) => q + 1);
    const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

    const sendMessage = () => {
        let message = `Hola, me gustaría consultar sobre el siguiente producto:\n\n`;
        message += `1. *${product.name}*\nCantidad: *${quantity}*\nPrecio Unitario: $${product.price}\nSubtotal: *$${product.price * quantity}*\n`;
        message += `\n---------------------------------------\n\n*Total: $${product.price * quantity}*\n\n`;
        message += `Aguardo su respuesta. ¡Gracias!`;

        const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <Flex minH="80vh" justify="center" align="center" px={5}>
            <Box
                boxShadow="md"
                borderTop={"1px solid #f1f1f1"}
                mt={10}
                mx={5}
                p={8}
                maxWidth={{ base: "500px", md: "1100px" }}
            >
                <Flex direction={{ base: "column", md: "row" }} alignItems={"start"}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        borderRadius="md"
                        boxSize={{ base: "300px", md: "400px" }}
                        objectFit="cover"
                    />

                    <Flex
                        display={{ base: "none", md: "inherit" }}
                        mx={3}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        height="600px"
                    >
                        <Divider orientation="vertical" height="100%" />
                    </Flex>

                    <VStack
                        w={{ base: "300px", md: "350px", lg: "500px" }}
                        align="start"
                        spacing={4}
                        ml={{ md: 8 }}
                        mt={{ base: 5, md: 0 }}
                    >
                        <Text m={0} fontSize="2xl" fontWeight="bold">
                            {product.name}
                        </Text>
                        <Badge colorScheme="green">Disponible</Badge>
                        <Text m={0} fontSize="2xl" color="gray.600">
                            Precio: ${product.price}
                        </Text>

                        <Text m={0}>{product.description || "Descripción no disponible."}</Text>

                        <Divider my={1} />

                        <Flex>
                            <IconButton
                                aria-label="Disminuir cantidad"
                                icon={<FaMinus />}
                                onClick={decrementQuantity}
                                variant="outline"
                                size="sm"
                            />
                            <Input
                                type="number"
                                min={1}
                                value={quantity}
                                onChange={handleQuantityChange}
                                width="60px"
                                textAlign="center"
                                size="sm"
                                mx={2}
                            />
                            <IconButton
                                aria-label="Aumentar cantidad"
                                icon={<FaPlus />}
                                onClick={incrementQuantity}
                                variant="outline"
                                size="sm"
                            />
                        </Flex>

                        <Button
                            color={"white"}
                            rightIcon={<Icon as={FiExternalLink} />}
                            bg="#38a169"
                            _hover={{ bg: "#24a755" }}
                            onClick={sendMessage}
                        >
                            Consultar por WhatsApp
                        </Button>

                        <Button variant="outline" onClick={() => navigate(-1)}>
                            Volver
                        </Button>

                        <VStack mt={5} align="start" spacing={2}>
                            <Flex alignItems="center">
                                <Icon as={RxDimensions} mr={2} />
                                <Text m={0} fontWeight="bold">
                                    Características:
                                </Text>
                            </Flex>
                            <Text m={0}>
                                Peso: {product.weight ? `${product.weight} kg` : "Sin definir"}
                            </Text>
                            <Text m={0}>
                                Altura: {product.height ? `${product.height} cm` : "Sin definir"}
                            </Text>
                            <Text m={0}>
                                Ancho: {product.width ? `${product.width} cm` : "Sin definir"}
                            </Text>
                            <Text m={0}>
                                Profundidad:{" "}
                                {product.depth ? `${product.depth} cm` : "Sin definir"}
                            </Text>
                        </VStack>
                    </VStack>
                </Flex>
            </Box>
        </Flex>
    );
}
