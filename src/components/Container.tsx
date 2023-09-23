interface Props {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Container: React.FC<Props> = ({
  children,
  className = "",
  fullWidth,
}) => {
  return (
    <div
      className={`${
        fullWidth ? "max-w-7xl" : "container"
      } mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
