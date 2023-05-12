import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface LoaderProps {
  size?: number;
  color?: string;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = 50,
  color = "#000",
  className,
}) => {
  const loaderContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={loaderContainerStyle} className={className}>
      <ClipLoader size={size} color={color} />
    </div>
  );
};

export default Loader;
