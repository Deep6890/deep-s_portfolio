function on_scroll_call_library_animista() {
    var header_element = document.querySelector('header');
    header_element.style.display = 'flex';
    console.log('Header is displayed');
}
function startToggle(className, intervalTime) {
    let value = 0;

    setInterval(() => {
        value = value === 0 ? 1 : 0;

        const elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++) {
            elements[i].textContent = value;
        }
    }, intervalTime);
}

// ✅ Call function for each group
startToggle("toggle", 1000);        // 1 second
startToggle("toggle_delay", 200);  // 2 seconds
startToggle("toggle_delay_3", 3000);