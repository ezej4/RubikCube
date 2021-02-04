const animate = () => {
    if (isSpining) {
        $cubic.classList.remove("cubic--spin");
    } else {
        $cubic.classList.add("cubic--spin");
    }
    isSpining = !isSpining
};

animateButton.addEventListener("click", animate, false);