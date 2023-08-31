import { defaultProps, targetElements } from "./data/scrollRevealConfig";
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
