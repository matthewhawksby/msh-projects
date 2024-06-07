"use client";
//Can Delete this, not in use.
import { useTheme } from "next-themes";
import Image from "next/image";

const MyImageComponent = () => {
  const { theme } = useTheme();
  const imageSrc = theme === "dark" ? "/next.svg" : "/ac-mshblack-512.png";

  return (
    <Image
      src={imageSrc}
      alt="Matthew Scott Hawksby Logo"
      width={100}
      height={100}
    />
  );
};

export default MyImageComponent;
