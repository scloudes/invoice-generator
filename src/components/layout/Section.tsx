import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className, ...props }: Props) => {
  return (
    <section
      className={twMerge(`container mx-auto px-4 py-12`, className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
