import { cn } from "@/lib/utils";

interface Props extends React.HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const BASE_HEADING = "mb-4 font-bold";
const GRADIENT_CLASSNAMES =
  "text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-400 dark:from-primary-400 dark:to-primary-300";

const H1_VARIANT = "text-7xl md:text-8xl";
const H2_VARIANT = "text-6xl md:text-7xl";
const H3_VARIANT = "text-5xl md:text-6xl";
const H4_VARIANT = "text-4xl md:text-5xl";
const H5_VARIANT = "text-3xl md:text-4xl";
const H6_VARIANT = "text-2xl md:text-3xl";

const VARIANTS = {
  h1: H1_VARIANT,
  h2: H2_VARIANT,
  h3: H3_VARIANT,
  h4: H4_VARIANT,
  h5: H5_VARIANT,
  h6: H6_VARIANT,
};

const Heading = ({
  children,
  component = "h1",
  className,
  ...props
}: Props) => {
  const Component = component;
  return (
    <Component
      className={cn(BASE_HEADING, VARIANTS[component], className)}
      {...props}
    >
      <span className={GRADIENT_CLASSNAMES}>{children}</span>
    </Component>
  );
};

export default Heading;
