import "../styles/globals.css";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      backgroundColor: "223b40",
      primary: "#223b40",
      green: "#223b40",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider theme={theme}>
        <Navbar />
        <MobileNav />
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
