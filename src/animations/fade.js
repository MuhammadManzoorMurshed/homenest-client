import { transitions } from "./shared";

export const fadeUp = (transition = transitions.normal) => ({
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition,
    }
})