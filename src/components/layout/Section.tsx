import { cn } from "@/lib/utils";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className, ...props }: Props) => {
  return (
    <section
      className={cn(`container mx-auto px-4 py-8`, className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
