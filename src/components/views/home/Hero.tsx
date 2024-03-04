import Section from "@/components/layout/Section";
import Heading from "@/components/shared/Heading";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Home.Content");
  return (
    <Section>
      <Heading className="text-center">{t("title")}</Heading>
      <p className="text-center">{t("subtitle")}</p>
    </Section>
  );
};

export default Hero;
