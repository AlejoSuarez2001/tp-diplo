import { Box,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "../molecules/WhatsAppIcon";

export default function BannerSection() {

  return (
    <Box position="relative">
      <Box
        height={400}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        backgroundImage="url('/assets/homeBanner.jpg')"
        backgroundSize="cover"
        backgroundPosition="bottom"
        backgroundRepeat="no-repeat"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgColor="#17194dcc"
        />
        <Link to={"/products"}>
          <Button
            bg="gray.600"
            color="white"
            fontSize={{ base: "sm", md: "md" }}
            padding="20px 20px"
            _hover={{ bg: "gray.700" }}
          >
            Ver todos los Productos
          </Button>
        </Link>
      </Box>

      <WhatsAppIcon position={"absolute"} />
    </Box>
  );
}
