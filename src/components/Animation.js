import React, { useEffect } from "react";
import lottie from "lottie-web";

export const loadAnimation = (container, data) => {
  lottie.loadAnimation({
    container,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: data
  });
};

export const Animation = ({ name, data }) => {
  useEffect(() => {
    loadAnimation(document.getElementById(name), data);
  }, [name, data]);
  return <div id={name}></div>;
};


export default Animation;
