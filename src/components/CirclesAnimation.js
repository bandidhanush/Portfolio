import React, { useEffect, useRef } from "react";

const CirclesAnimation = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);
  const colors = [
    "#b968c7",
    "#b767c2",
    "#b666bd",
    "#b565b8",
    "#b464b3",
    "#b362ae",
    "#b261a9",
    "#b160a4",
    "#b05f9f",
    "#af5e9a",
    "#ae5d95",
    "#ad5c90",
    "#ac5a8b",
    "#ab5986",
    "#aa5881",
    "#a9577c",
    "#a85677",
    "#a75572",
    "#a6546d",
    "#a55268",
    "#a45163",
    "#ffb56b"
  ];

  useEffect(() => {
    const circles = circlesRef.current;

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.6;
        y += (nextCircle.y - y) * 0.6;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [colors]);

  return (
    <>
      {Array.from({ length: 20 }, (_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
        ></div>
      ))}
    </>
  );
};

export default CirclesAnimation;
