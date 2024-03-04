"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Link, localeLabels, usePathname } from "@/navigation";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useLocale } from "next-intl";

const LangSwitch = () => {
  const locale = useLocale() as keyof typeof localeLabels;
  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          {localeLabels[locale]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={pathname} locale="en" className="cursor-pointer">
            English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={pathname} locale="de" className="cursor-pointer">
            Deutsch
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={pathname} locale="es" className="cursor-pointer">
            Español
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangSwitch;
