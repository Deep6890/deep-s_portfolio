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

startToggle("toggle", 1000);        // 1 second
startToggle("toggle_delay", 200);  // 2 seconds
startToggle("toggle_delay_3", 3000);


// Ad Animista's .bounce-in-bck in rise at the first of my name
function call_bounce_in_bck() {
    var main_grid_pointer = document.getElementById(main_grid_my_name);
    void element.offsetWidth; // Trigger reflow to reset animation
    ma.classList.add("bounce-in-bck"); // Re-add animation
    console.log(element);
}

function block_1_showHiddenBox() {
    const visibleBox = document.querySelector(".skill_block_1_ani");
    const hiddenBox = document.querySelector(".hidden_skill_block_html");
    const middle_loader_1 = document.querySelector(".loading_svg_block_1");

    // Step 1: Hide visible box immediately
    visibleBox.style.display = "none";

    // Step 2: Hide hidden box, then show after 3 seconds
    hiddenBox.style.display = "none";
    middle_loader_1.style.display = "flex";
    setTimeout(() => {
        hiddenBox.style.display = "flex";
        middle_loader_1.style.display = "none";
    }, 2000);
}

function block_1_hideHiddenBox() {
    const visibleBox = document.querySelector(".skill_block_1_ani");
    const hiddenBox = document.querySelector(".hidden_skill_block_html");

    hiddenBox.style.display = "none";
    visibleBox.style.display = "flex";
}

function block_2_showHiddenBox() {
    const visibleBox = document.querySelector(".skills_python_main_animation");
    const hiddenBox = document.querySelector("#skill_python");
    const middle_loader_2 = document.querySelector(".loading_svg_block_2");

    visibleBox.style.display = "none";

    // Step 2: Hide hidden box, then show after 2 seconds
    hiddenBox.style.display = "none";
    middle_loader_2.style.display = "flex";
    setTimeout(() => {
        hiddenBox.style.display = "flex";
        middle_loader_2.style.display = "none";
    }, 2000);
}

function block_2_hideHiddenBox() {
    const visibleBox = document.querySelector(".skills_python_main_animation");
    const hiddenBox = document.querySelector("#skill_python");

    hiddenBox.style.display = "none";
    visibleBox.style.display = "flex";
}

function block_3_showHiddenBox() {
    const visibleBox = document.querySelector(".skills_js_main_animation");
    const hiddenBox = document.querySelector("#skill_js");
    const middle_loader_3 = document.querySelector(".loading_svg_block_3");

    visibleBox.style.display = "none";

    // Step 2: Hide hidden box, then show after 2 seconds
    hiddenBox.style.display = "none";
    middle_loader_3.style.display = "flex";
    setTimeout(() => {
        hiddenBox.style.display = "flex";
        middle_loader_3.style.display = "none";
    }, 2000);
}

function block_3_hideHiddenBox() {
    const visibleBox = document.querySelector(".skills_js_main_animation");
    const hiddenBox = document.querySelector("#skill_js");

    hiddenBox.style.display = "none";
    visibleBox.style.display = "flex";
}

function block_4_showHiddenBox() {
    const visibleBox = document.querySelector(".skills_c_main_animation");
    const hiddenBox = document.querySelector("#skill_c");
    const middle_loader_4 = document.querySelector(".loading_svg_block_4");

    visibleBox.style.display = "none";
    // Step 2: Hide hidden box, then show after 2 seconds
    hiddenBox.style.display = "none";
    middle_loader_4.style.display = "flex";
    setTimeout(() => {
        hiddenBox.style.display = "flex";
        middle_loader_4.style.display = "none";
    }, 2000);
}

function block_4_hideHiddenBox() {
    const visibleBox = document.querySelector(".skills_c_main_animation");
    const hiddenBox = document.querySelector("#skill_c");

    hiddenBox.style.display = "none";
    visibleBox.style.display = "flex";
}

function block_5_showHiddenBox() {
    const visibleBox = document.querySelector(".skills_java_main_animation");
    const hiddenBox = document.querySelector("#skill_java");
    const middle_loader_5 = document.querySelector(".loading_svg_block_5");

    visibleBox.style.display = "none";
    // Step 2: Hide hidden box, then show after 2 seconds
    hiddenBox.style.display = "none";
    middle_loader_5.style.display = "flex";
    setTimeout(() => {
        hiddenBox.style.display = "flex";
        middle_loader_5.style.display = "none";
    }, 2000);
}

function block_5_hideHiddenBox() {
    const visibleBox = document.querySelector(".skills_java_main_animation");
    const hiddenBox = document.querySelector("#skill_java");

    hiddenBox.style.display = "none";
    visibleBox.style.display = "flex";
}

function block_6_showHiddenBox() {
    const visibleBox = document.querySelector(".skills_css_main_animation");
    const hiddenBox = document.querySelector("#skill_css");
    const middle_loader_6 = document.querySelector(".loading_svg_block_6");

    visibleBox.style.display = "none";
    // Step 2: Hide hidden box, then show after 2 seconds
    hiddenBox.style.display = "none";
    middle_loader_6.style.display = "flex";
    setTimeout(() => {
        hiddenBox.style.display = "flex";
        middle_loader_6.style.display = "none";
    }, 2000);
}

function block_6_hideHiddenBox() {
    const visibleBox = document.querySelector(".skills_css_main_animation");
    const hiddenBox = document.querySelector("#skill_css");

    hiddenBox.style.display = "none";
    visibleBox.style.display = "flex";
}

function block_7_showHiddenBox() {
    const visibleBox = document.querySelector(".skills_git_bash_main_animation");
    const hiddenBox = document.querySelector("#skill_git_bash");
    const middle_loader_7 = document.querySelector(".loading_svg_block_7");

    visibleBox.style.display = "none";
    // Step 2: Hide hidden box, then show after 2 seconds
    hiddenBox.style.display = "none";
    middle_loader_7.style.display = "flex";
    setTimeout(() => {
        hiddenBox.style.display = "flex";
        middle_loader_7.style.display = "none";
    }, 2000);
}

function block_7_hideHiddenBox() {
    const visibleBox = document.querySelector(".skills_git_bash_main_animation");
    const hiddenBox = document.querySelector("#skill_git_bash");

    hiddenBox.style.display = "none";
    visibleBox.style.display = "flex";
}

function block_8_showHiddenBox() {
    const visibleBox = document.querySelector(".skills_dsa_main_animation");
    const hiddenBox = document.querySelector("#skill_dsa");
    const middle_loader_8 = document.querySelector(".loading_svg_block_8");

    visibleBox.style.display = "none";
    // Step 2: Hide hidden box, then show after 2 seconds
    hiddenBox.style.display = "none";
    middle_loader_8.style.display = "flex";
    setTimeout(() => {
        hiddenBox.style.display = "flex";
        middle_loader_8.style.display = "none";
    }, 2000);
}

function block_8_hideHiddenBox() {
    const visibleBox = document.querySelector(".skills_dsa_main_animation");
    const hiddenBox = document.querySelector("#skill_dsa");

    hiddenBox.style.display = "none";
    visibleBox.style.display = "flex";
}

function block_9_showHiddenBox() {
    const visibleBox = document.querySelector(".skills_come_9_main_animation");
    const hiddenBox = document.querySelector("#skill_come_9");

    visibleBox.style.display = "none";
    hiddenBox.style.display = "flex";
}

function block_9_hideHiddenBox() {
    const visibleBox = document.querySelector(".skills_come_9_main_animation");
    const hiddenBox = document.querySelector("#skill_come_9");

    hiddenBox.style.display = "none";
    visibleBox.style.display = "flex";
}

function block_10_showHiddenBox() {
    const visibleBox = document.querySelector(".skills_come_10_main_animation");
    const hiddenBox = document.querySelector("#skill_come_10");

    visibleBox.style.display = "none";
    hiddenBox.style.display = "flex";
}

function block_10_hideHiddenBox() {
    const visibleBox = document.querySelector(".skills_come_10_main_animation");
    const hiddenBox = document.querySelector("#skill_come_10");

    hiddenBox.style.display = "none";
    visibleBox.style.display = "flex";
}

function block_11_showHiddenBox() {
    const visibleBox = document.querySelector(".skills_come_11_main_animation");
    const hiddenBox = document.querySelector("#skill_come_11");

    visibleBox.style.display = "none";
    hiddenBox.style.display = "flex";
}

function block_11_hideHiddenBox() {
    const visibleBox = document.querySelector(".skills_come_11_main_animation");
    const hiddenBox = document.querySelector("#skill_come_11");

    hiddenBox.style.display = "none";
    visibleBox.style.display = "flex";
}

function block_cplusepluse_showHiddenBox() {
    const visibleBox = document.querySelector(".skills_cplusepluse_main_animation");
    const hiddenBox = document.querySelector("#skill_cplusepluse");
    const middle_loader_12 = document.querySelector(".loading_svg_block_12");

    visibleBox.style.display = "none";
    // Step 2: Hide hidden box, then show after 2 seconds
    hiddenBox.style.display = "none";
    middle_loader_12.style.display = "flex";
    setTimeout(() => {
        hiddenBox.style.display = "flex";
        middle_loader_12.style.display = "none";
    }, 2000);
}

function block_cplusepluse_hideHiddenBox() {
    const visibleBox = document.querySelector(".skills_cplusepluse_main_animation");
    const hiddenBox = document.querySelector("#skill_cplusepluse");

    hiddenBox.style.display = "none";
    visibleBox.style.display = "flex";
}


//  Target element
const box_1_ani_class = document.querySelector(".skill_block_1_svg");
const box_2_ani_class = document.querySelector(".skill_block_2_svg");
const box_3_ani_class = document.querySelector(".skill_block_3_svg");
const box_4_ani_class = document.querySelector(".skill_block_4_svg");
const box_5_ani_class = document.querySelector(".skill_block_5_svg");
const box_6_ani_class = document.querySelector(".skill_block_6_svg");
const box_7_ani_class = document.querySelector(".skill_block_7_svg");
const box_8_ani_class = document.querySelector(".skill_block_8_svg");
const box_9_ani_class = document.querySelector(".skill_block_9_svg");
const box_10_ani_class = document.querySelector(".skill_block_10_svg");
const box_11_ani_class = document.querySelector(".skill_block_11_svg");
const box_12_ani_class = document.querySelector(".skill_block_12_svg");
// To toggle between in & out animation
let show_class_1 = true;
let show_class_2 = true;
function box_1_trigger() {

    // Remove any existing animation
    box_1_ani_class.classList.remove("animate__backInDown", "animate__bounceOutLeft");

    // Force reflow to re-trigger animation
    void box_1_ani_class.offsetWidth;

    if (show_class_1) {
        box_1_ani_class.classList.add("animate__animated", "animate__backInDown");
    } else {
        box_1_ani_class.classList.add("animate__animated", "animate__bounceOutLeft");
    }

    // Toggle for next round
    show_class_1 = !show_class_1;
}
setInterval(box_1_trigger, 3000);



function box_2_sequence() {
    // Step 1: Clean previous classes
    box_2_ani_class.classList.remove(
        "animate__animated",
        "animate__backInRight",
        "animate__backOutRight",
        "jello-diagonal-1"
    );
    void box_2_ani_class.offsetWidth;

    // Step 2: Entry
    box_2_ani_class.classList.add("animate__animated", "animate__backInRight");

    // Step 3: After 1s (entry done), do jello
    setTimeout(() => {
        box_2_ani_class.classList.remove("animate__backInRight");
        box_2_ani_class.classList.add("jello-diagonal-1");
    }, 1000);

    // Step 4: After 3s total → do exit
    setTimeout(() => {
        box_2_ani_class.classList.remove("jello-diagonal-1");
        box_2_ani_class.classList.add("animate__animated", "animate__backOutRight");
    }, 3000);

    // Step 5: After 6s total → loop again
    setTimeout(() => {
        box_2_sequence();
    }, 6000);
}

// Start the infinite loop
box_2_sequence();

function box_3_sequence() {
    // Step 1: Clean previous classes
    box_3_ani_class.classList.remove(
        "animate__animated",
        "animate__bounceInUp", "rotate-in-center", "animate__bounceOutDown"
    );
    void box_3_ani_class.offsetWidth;

    // Step 2: Entry
    box_3_ani_class.classList.add("animate__animated", "animate__bounceInUp");

    // Step 3: After 1s (entry done), do jello
    setTimeout(() => {
        box_3_ani_class.classList.remove("animate__bounceInUp");
        box_3_ani_class.classList.add("rotate-in-center");
    }, 1000);

    // Step 4: After 3s total → do exit
    setTimeout(() => {
        box_3_ani_class.classList.remove("rotate-in-center");
        box_3_ani_class.classList.add("animate__animated", "animate__bounceOutDown");
    }, 3000);

    // Step 5: After 6s total → loop again
    setTimeout(() => {
        box_3_sequence();
    }, 5000);
}

// Start the infinite loop
box_3_sequence();
function box_4_sequence() {
    // Step 1: Clean previous classes
    box_4_ani_class.classList.remove(
        "animate__animated",
        "animate__bounceIn", "animate__rubberBand", "animate__hinge"
    );
    void box_4_ani_class.offsetWidth;

    // Step 2: Entry
    box_4_ani_class.classList.add("animate__animated", "animate__bounceIn");

    // Step 3: After 1s (entry done), do jello
    setTimeout(() => {
        box_4_ani_class.classList.remove("animate__bounceIn");
        box_4_ani_class.classList.add("animate__rubberBand");
    }, 1000);

    // Step 4: After 3s total → do exit
    setTimeout(() => {
        box_4_ani_class.classList.remove("animate__rubberBand");
        box_4_ani_class.classList.add("animate__animated", "animate__hinge");
    }, 3000);

    // Step 5: After 6s total → loop again
    setTimeout(() => {
        box_4_sequence();
    }, 5000);
}

// Start the infinite loop
box_4_sequence();
function box_5_sequence() {
    // Step 1: Clean previous classes
    box_5_ani_class.classList.remove(
        "animate__animated",
        "text-pop-up-top", "vibrate-3", "slide-out-blurred-right"
    );
    void box_5_ani_class.offsetWidth;

    // Step 2: Entry
    box_5_ani_class.classList.add("animate__animated", "text-pop-up-top");

    // Step 3: After 1s (entry done), do jello
    setTimeout(() => {
        box_5_ani_class.classList.remove("text-pop-up-top");
        box_5_ani_class.classList.add("vibrate-3");
    }, 1000);

    // Step 4: After 3s total → do exit
    setTimeout(() => {
        box_5_ani_class.classList.remove("vibrate-3");
        box_5_ani_class.classList.add("animate__animated", "slide-out-blurred-right");
    }, 3000);

    // Step 5: After 6s total → loop again
    setTimeout(() => {
        box_5_sequence();
    }, 5000);
}

// Start the infinite loop
box_5_sequence();
function box_6_sequence() {
    // Step 1: Clean previous classes
    box_6_ani_class.classList.remove(
        "animate__animated",
        "animate__zoomInLeft", "animate__flip", "animate__backOutLeft"
    );
    void box_6_ani_class.offsetWidth;

    // Step 2: Entry
    box_6_ani_class.classList.add("animate__animated", "animate__zoomInLeft");

    // Step 3: After 1s (entry done), do jello
    setTimeout(() => {
        box_6_ani_class.classList.remove("animate__zoomInLeft");
        box_6_ani_class.classList.add("animate__flip");
    }, 1000);

    // Step 4: After 3s total → do exit
    setTimeout(() => {
        box_6_ani_class.classList.remove("animate__flip");
        box_6_ani_class.classList.add("animate__animated", "animate__backOutLeft");
    }, 3500);

    // Step 5: After 6s total → loop again
    setTimeout(() => {
        box_6_sequence();
    }, 7000);
}

// Start the infinite loop
box_6_sequence();
function box_7_sequence() {
    // Step 1: Clean previous classes
    box_7_ani_class.classList.remove(
        "animate__animated",
        "animate__zoomInDown", "animate__jello", "animate__bounceOutUp"
    );
    void box_7_ani_class.offsetWidth;

    // Step 2: Entry
    box_7_ani_class.classList.add("animate__animated", "animate__zoomInDown");

    // Step 3: After 1s (entry done), do jello
    setTimeout(() => {
        box_7_ani_class.classList.remove("animate__zoomInDown");
        box_7_ani_class.classList.add("animate__jello");
    }, 1000);

    // Step 4: After 3s total → do exit
    setTimeout(() => {
        box_7_ani_class.classList.remove("animate__jello");
        box_7_ani_class.classList.add("animate__animated", "animate__bounceOutUp");
    }, 4000);

    // Step 5: After 6s total → loop again
    setTimeout(() => {
        box_7_sequence();
    }, 7000);
}

// Start the infinite loop
box_7_sequence();
function box_8_sequence() {
    // Step 1: Clean previous classes
    box_8_ani_class.classList.remove(
        "animate__animated",
        "slide-in-elliptic-right-fwd", "jello-vertical", "animate__zoomOutDown"
    );
    void box_8_ani_class.offsetWidth;

    // Step 2: Entry
    box_8_ani_class.classList.add("animate__animated", "slide-in-elliptic-right-fwd");

    // Step 3: After 1s (entry done), do jello
    setTimeout(() => {
        box_8_ani_class.classList.remove("slide-in-elliptic-right-fwd");
        box_8_ani_class.classList.add("jello-vertical");
    }, 1500);

    // Step 4: After 3s total → do exit
    setTimeout(() => {
        box_8_ani_class.classList.remove("jello-vertical");
        box_8_ani_class.classList.add("animate__animated", "animate__zoomOutDown");
    }, 3500);

    // Step 5: After 6s total → loop again
    setTimeout(() => {
        box_8_sequence();
    }, 6500);
}

// Start the infinite loop
box_8_sequence();
function box_9_sequence() {
    // Step 1: Clean previous classes
    box_9_ani_class.classList.remove(
        "animate__animated",
        "animate__zoomInUp", "animate__jackInTheBox", "bounce-out-bottom"
    );
    void box_9_ani_class.offsetWidth;

    // Step 2: Entry
    box_9_ani_class.classList.add("animate__animated", "animate__zoomInUp");

    // Step 3: After 1s (entry done), do jello
    setTimeout(() => {
        box_9_ani_class.classList.remove("animate__zoomInUp");
    }, 3500);

    // Step 4: After 3s total → do exit
    setTimeout(() => {
        box_9_ani_class.classList.add("animate__animated", "bounce-out-bottom");
    }, 4500);

    // Step 5: After 6s total → loop again
    setTimeout(() => {
        box_9_sequence();
    }, 8500);
}

// Start the infinite loop
box_9_sequence();
function box_10_sequence() {
    // Step 1: Clean previous classes
    box_10_ani_class.classList.remove(
        "animate__animated",
        "slide-in-blurred-right", "shake-left", "rotate-out-tr"
    );
    void box_10_ani_class.offsetWidth;

    // Step 2: Entry
    box_10_ani_class.classList.add("animate__animated", "slide-in-blurred-right");

    // Step 3: After 1s (entry done), do jello
    setTimeout(() => {
        box_10_ani_class.classList.remove("slide-in-blurred-right");
        box_10_ani_class.classList.add("shake-left");
    }, 2000);

    // Step 4: After 3s total → do exit
    setTimeout(() => {
        box_10_ani_class.classList.remove("shake-left");
        box_10_ani_class.classList.add("animate__animated", "rotate-out-tr");
    }, 5000);

    // Step 5: After 6s total → loop again
    setTimeout(() => {
        box_10_sequence();
    }, 7000);
}

// Start the infinite loop
box_10_sequence();
function box_11_sequence() {
    // Step 1: Clean previous classes
    box_11_ani_class.classList.remove(
        "animate__animated",
        "animate__zoomInDown", "bounce-top", "animate__zoomOutRight"
    );
    void box_11_ani_class.offsetWidth;

    // Step 2: Entry
    box_11_ani_class.classList.add("animate__animated", "animate__zoomInDown");

    // Step 3: After 1s (entry done), do jello
    setTimeout(() => {
        box_11_ani_class.classList.remove("animate__zoomInDown");
        box_11_ani_class.classList.add("bounce-top");
    }, 2000);

    // Step 4: After 3s total → do exit
    setTimeout(() => {
        box_11_ani_class.classList.remove("bounce-top");
        box_11_ani_class.classList.add("animate__animated", "animate__zoomOutRight");
    }, 6000);

    // Step 5: After 6s total → loop again
    setTimeout(() => {
        box_11_sequence();
    }, 8000);
}

// Start the infinite loop
box_11_sequence();
function box_12_sequence() {
    // Step 1: Clean previous classes
    box_12_ani_class.classList.remove(
        "animate__animated",
        "roll-in-left", "animate__flip", "roll-out-blurred-right"
    );
    void box_12_ani_class.offsetWidth;

    // Step 2: Entry
    box_12_ani_class.classList.add("animate__animated", "roll-in-left");

    // Step 3: After 1s (entry done), do jello
    setTimeout(() => {
        box_12_ani_class.classList.remove("roll-in-left");
        box_12_ani_class.classList.add("animate__flip");
    }, 1000);

    // Step 4: After 3s total → do exit
    setTimeout(() => {
        box_12_ani_class.classList.remove("animate__flip");
        box_12_ani_class.classList.add("animate__animated", "roll-out-blurred-right");
    }, 3000);

    // Step 5: After 6s total → loop again
    setTimeout(() => {
        box_12_sequence();
    }, 5000);
}
let starButton1 = document.getElementById("starButton1");
let starButton2 = document.getElementById("starButton2");
let starButton3 = document.getElementById("starButton3");
let starButton4 = document.getElementById("starButton4");
let starButton5 = document.getElementById("starButton5");

function starColorChange1() {
    starButton1.querySelector(".star-icon").style.fill = "gold";
}
function starColorChange2() {
    starButton1.querySelector(".star-icon").style.fill = "gold";
    starButton2.querySelector(".star-icon").style.fill = "gold";
}
function starColorChange3() {
    starButton1.querySelector(".star-icon").style.fill = "gold";
    starButton2.querySelector(".star-icon").style.fill = "gold";
    starButton3.querySelector(".star-icon").style.fill = "gold";
}
function starColorChange4() {
    starButton1.querySelector(".star-icon").style.fill = "gold";
    starButton2.querySelector(".star-icon").style.fill = "gold";
    starButton3.querySelector(".star-icon").style.fill = "gold";
    starButton4.querySelector(".star-icon").style.fill = "gold";
}
function starColorChange5() {
    starButton1.querySelector(".star-icon").style.fill = "gold";
    starButton2.querySelector(".star-icon").style.fill = "gold";
    starButton3.querySelector(".star-icon").style.fill = "gold";
    starButton4.querySelector(".star-icon").style.fill = "gold";
    starButton5.querySelector(".star-icon").style.fill = "gold";
}
// Start the infinite loop
box_12_sequence();