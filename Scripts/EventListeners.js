// CREATE LISTENERS WHEN WONDOW IS LOADED
window.onload = () => {
    // LISTEN TO CLICK
    document.body.addEventListener('click', function(event) {
        let targetElement = event.target;

        if (targetElement != null) {

            // SPOILER TOGGLE ON CLICK
            if (targetElement.classList.contains('spoiler')) {
                targetElement.classList.toggle('no-spoiler');
            }
        }
    })
}
