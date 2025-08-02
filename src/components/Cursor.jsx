import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const [isHoveringH1, setIsHoveringH1] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to("#cursor", {
        x: clientX - 10,
        y: clientY - 10,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleCursorHover = (e) => {
      const isHovering = e.detail;
      setIsHoveringH1(isHovering);
      gsap.to("#cursor", {
        scale: isHovering ? 3 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("cursor-hover", handleCursorHover);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("cursor-hover", handleCursorHover);
    };
  }, []);

  return (
    <div
      id="cursor"
      className={`fixed top-0 left-0 h-[20px] w-[20px]  bg-white  rounded-full z-50 pointer-events-none  ${
        isHoveringH1 ? "mix-blend-difference" : ""
      }`}
    />
  );
};

export default Cursor;
