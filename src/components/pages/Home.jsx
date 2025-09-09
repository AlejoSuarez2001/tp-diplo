import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Divider from "../atoms/Divider";
import BannerSection from "../organisms/BannerSection";
import WhatsAppIcon from "../molecules/WhatsAppIcon";
import ServiceSection from "../organisms/ServiceSection";
import InformationSection from "../organisms/InformationSection";
import GuideSection from "../organisms/GuideSection";
import ContactSection from "../organisms/ContactSection";
import BrandSection from "../organisms/BrandSection";
import Footer from "../organisms/Footer";

export default function Home() {
  const [isWhatsAppVisible, setIsWhatsAppVisible] = useState(false);

  const handleScroll = () => {
    const homeBanner = document.getElementById("homeBanner");
    if (homeBanner) {
      const { bottom } = homeBanner.getBoundingClientRect();
      setIsWhatsAppVisible(bottom < 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <Box id="homeBanner">
        <BannerSection />
      </Box>
      <Divider />
      <GuideSection />
      <Divider />
      <InformationSection />
      <Divider />
      <ServiceSection />
      <Divider />
      <BrandSection />
      <Divider />
      <ContactSection />
      <Divider />
      <Footer />
      {isWhatsAppVisible && <WhatsAppIcon position={"fixed"} />}
    </Box>
  );
}
