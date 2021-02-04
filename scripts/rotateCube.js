const getActualRotation = () => {
    const baseStyle = $cubic.style.transform;

    if (!baseStyle) return {
        x: 0,
        y: 0,
    }

    // grab all positive and negative numbers.
    const regex = /[-?\d|,|.\+]+/g;
    // grab all matches
    const values = baseStyle.match(regex);

    return {
        x: parseFloat(values[0]),
        y: parseFloat(values[1]),
    }
};

const rotate = (direction) => {
    //if grabbing is enabled, disable it 
    if (isGrabbing) {
        switchGrabbing();
    }

    if (!$cubic.classList.contains('cubic--auto-roting')) {
        $cubic.classList.add('cubic--auto-roting')
    }

    // get the actual rotation 
    const {
        x: xRotation,
        y: yRotation
    } = getActualRotation();

    let rotationStyle;
    switch (direction) {
        case 'left': {
            rotationStyle = `rotateX(${xRotation}deg) rotateY(${yRotation+90}deg)`
            break;
        }
        case 'right': {
            rotationStyle = `rotateX(${xRotation}deg) rotateY(${yRotation-90}deg)`
            break;
        }
        case 'top': {
            rotationStyle = `rotateX(${xRotation+180}deg) rotateY(${yRotation}deg)`
            break;
        }
        default: {
            rotationStyle = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
            break;
        }
    }

    if (direction) {
        $cubic.style.transform = rotationStyle;
    }
}