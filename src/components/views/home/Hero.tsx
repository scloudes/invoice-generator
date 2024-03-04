import { ReceiptIcon, RightArrowIcon } from "@/components/icons";
import LangSwitch from "@/components/layout/LangSwitch";
import Section from "@/components/layout/Section";
import Heading from "@/components/shared/Heading";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Home.Content");
  return (
    <Section>
      <div className="flex items-center justify-center mb-8">
        <p className="px-4 py-2 text-sm md:text-base flex items-center text-center justify-center bg-muted rounded-lg">
          <ReceiptIcon className="h-6 w-6 mr-3 text-primary" />
          {t("subtitle")}
          <RightArrowIcon className="h-6 w-6 ml-3 text-primary" />
        </p>
      </div>
      <Heading className="text-center">{t("title")}</Heading>
    </Section>
  );
};

export default Hero;
