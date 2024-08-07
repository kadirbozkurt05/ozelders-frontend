type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`max-w-[1400px] mx-auto px-2 md:px-3 lg:px-10 ` + className}
    >
      {children}
    </div>
  );
}
