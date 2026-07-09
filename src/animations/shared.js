export const durations = {
    instant: 0.1,
    fast: 0.2,
    normal: 0.35,
    slow: 0.5,
    slower: 0.7,
};

export const easings = {
    linear: "linear",
    accelerate: "easeIn",
    standard: "easeOut",
    smooth: "easeInOut",
}

export const transitions = {
    instant: {
        duration: durations.instant,
        ease: easings.standard,
    },
    fast: {
        duration: durations.fast,
        ease: easings.standard,
    },
    normal: {
        duration: durations.normal,
        ease: easings.standard,
    },
    slow: {
        duration: durations.slow,
        ease: easings.standard,
    },
    slower: {
        duration: durations.slower,
        ease: easings.standard,
    }
}