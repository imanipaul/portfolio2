import sr from "./sr";

export const revealChildren = (ref, delayOffset = 1, distance = "100px") => {
  let allChildren = Array.from(ref.current.children);

  allChildren.forEach((ref, i) => {
    sr.reveal(ref, setConfig("bottom", (i + delayOffset) * 100, distance));
  });
};

export const revealContent = (ref, origin, delay, distance) => {
  sr.reveal(ref, setConfig(origin, delay, distance));
};

function setHidden(el) {
  el.classList.add("is-animating");
}

export const setConfig = (
  origin = "bottom",
  delay = 100,
  distance = "100px"
) => {
  let config = {
    origin,
    duration: 1000,
    delay,
    distance,
    scale: 1,
    easing: "ease",
    mobile: true,
    viewFactor: 0.25,
    reset: false,
    useDelay: "always",
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    beforeReveal: setHidden,
  };

  return config;
};
