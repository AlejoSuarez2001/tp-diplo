import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const WhatsAppIcon = ({ position }) => {

  return (
    <Link to={`https://wa.me/1112345678`} target="_blank">
      <Box
        position={position}
        bottom="20px"
        right="20px"
        width="45px"
        height="45px"
        bg="#38a169"
        borderRadius="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={"3px"}
        _hover={{ bg: "#24a755" }}
      >
        <img
          src="/assets/whatsappIcon.png"
          alt="WhatsApp"
          style={{ width: "70%", height: "70%" }}
        />
      </Box>
    </Link>
  );
};

export default WhatsAppIcon;
