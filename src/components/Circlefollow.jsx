import React, { useState, useEffect } from "react";

const CircleFollowCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed z-50 w-6 h-6 border-white border-[2px] rounded-full"
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    ></div>
  );
};

export default CircleFollowCursor;
