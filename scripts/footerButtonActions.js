const $LinkedingButton = document.getElementById('linkedin_button')

const handleLinkedingButtonClick = () => {
    const linkedingUrl = 'https://www.linkedin.com/in/ezequiel-fabbroni-b59536120'
    window.open(linkedingUrl, '_blank');
}

$LinkedingButton.addEventListener("click", handleLinkedingButtonClick, false);