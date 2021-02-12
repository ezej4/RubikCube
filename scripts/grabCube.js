const grabButton = document.getElementById("grab-button");

// rotate cubic on grab button click

let xStartPosition;
let yStartPosition;
let xEndPosition;
let yEndPosition;
let startRoting = false;
let xAngleRotate = 0;
let yAngleRotate = 0;

const setInitalValues = (e) => {
    xStartPosition = e.pageX;
    yStartPosition = e.pageY;
    startRoting = true;
}

const resetValues = (e) => {
    startRoting = false;
}

const rotateCubic = (e) => {
    if (startRoting) {
        xEndPosition = e.pageX;
        yEndPosition = e.pageY;
        xAngleRotate = ((xEndPosition - xStartPosition) * 2) * Math.PI / 360 + xAngleRotate;
        yAngleRotate = ((yEndPosition - yStartPosition) * 2) * Math.PI / 360 + yAngleRotate;

        $cubic.style.transform = `rotateX(${-yAngleRotate}deg) rotateY(${xAngleRotate}deg)`;
    }
}


const switchGrabbing = () => {
    isGrabbing = !isGrabbing;

    if (isGrabbing) {
        // remove transition class
        if ($cubic.classList.contains('cubic--auto-roting')) {
            $cubic.classList.remove('cubic--auto-roting')
        }

        selectedArea.classList.add('cubic__main--grabing');
        selectedArea.addEventListener('mousedown', setInitalValues, false);
        selectedArea.addEventListener('mousemove', rotateCubic, false);
        window.addEventListener('mouseup', resetValues, false);
    } else {
        selectedArea.classList.remove('cubic__main--grabing');
        selectedArea.removeEventListener('mousedown', setInitalValues);
        selectedArea.removeEventListener('mousemove', rotateCubic);
        window.removeEventListener('mouseup', resetValues);
    }
};

grabButton.addEventListener("click", switchGrabbing)