import LangSwitch from "@/components/layout/LangSwitch";
import ThemeSwitch from "@/components/layout/ThemeSwitch";
import React from "react";

const Header = () => {
  return (
    <header className="container flex w-full justify-end pt-6">
      <ThemeSwitch />
      <LangSwitch />
    </header>
  );
};

export default Header;
