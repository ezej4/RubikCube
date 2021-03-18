const handleKeyDown = (event) => {
    const keyPressed = event.key;
    const keyCases = {
        'ArrowUp': () => rotate('top'),
        //'ArrowDown': rotate('top'),
        'ArrowLeft': () => rotate('left'),
        'ArrowRight': () => rotate('right'),
    }

    const caseToExect = keyCases[keyPressed];
    if (caseToExect) {
        caseToExect();
    }
}

document.addEventListener('keydown', handleKeyDown);