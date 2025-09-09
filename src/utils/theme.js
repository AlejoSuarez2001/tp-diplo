import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "::-webkit-scrollbar": {
        width: "12px",
        height: "12px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f0f0f0",
        borderRadius: "10px",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#888",
        borderRadius: "10px",
        border: "2px solid #f0f0f0",
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#555",
      },
      html: {
        scrollbarWidth: "thin",
        scrollbarColor: "#272847 #f0f0f0",
      },
    },
  },
  colors: {
    primary: {
      500: "#044978",
    },
    secondary: {
      500: "#f2f3ff",
    },
  },
  components: {
    Button: {
      variants: {
        primary: (props) => ({
          borderColor: "#044978",
          borderRadius: "md",
          bg: "#fff",
          color: "#044978",
          _hover: {
            bg: "#044978",
            color: "#fff",
          },
          _active: {
            bg: "#00365c",
          },
        }),
        secondary: (props) => ({
          borderRadius: "md",
          bg: "#fff",
          color: "#044978",
          _hover: {
            shadow: "md",
          },
          _active: {
            bg: "#f5f5f5",
          },
        }),
        tertiary: (props) => ({
          borderRadius: "md",
          bg: "#044978",
          color: "#fff",
          _hover: {
            bg: "#13577d",
          },
        }),
      },
    },
  },
});

export default theme;
