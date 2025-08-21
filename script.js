// the entire DOM will be loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // ========================================================
    // Part 1: Variable Declarations and Conditionals
    // ========================================================
    console.log("Part 1: Variables and Conditionals");

    const logoContainer = document.getElementById('logo-container');
    const pageTitle = "JS Project";
    let isAnimationActive = false;

    // Conditional: Check if the logo container element exists on the page
    if (logoContainer) {
        console.log("Logo container found. Ready to generate logo.");
        // If it exists, call the function to create the logo
        createLogo(logoContainer);
    } else {
        console.error("Error: Logo container not found on the page.");
    }

    // ========================================================
    // Part 2: Custom Functions
    // ========================================================
    console.log("Part 2: Custom Functions");

    /**
     * Creates and injects the SVG logo into a specified parent element.
     * @param {HTMLElement} parentElement - The DOM element to append the logo to.
     */
    function createLogo(parentElement) {
        // The SVG content is stored in a template literal for readability
        const svgContent = `
            <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" class="logo-svg">
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#FF2D20;" />
                        <stop offset="100%" style="stop-color:#F9A825;" />
                    </linearGradient>
                    <linearGradient id="logoGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#F9A825;" />
                        <stop offset="100%" style="stop-color:#FF2D20;" />
                    </linearGradient>
                </defs>
                <g class="logo-group">
                    <path class="logo-part-1" d="M 50,50 L 125,125 L 50,200 Z" fill="url(#logoGradient)" />
                    <path class="logo-part-2" d="M 125,125 L 200,50 L 200,200 Z" fill="url(#logoGradient)" />
                </g>
            </svg>
        `;
        // DOM Interaction 1: Setting the inner HTML of an element
        parentElement.innerHTML = svgContent;
        console.log("Logo SVG has been injected into the page.");
    }

    /**
     * Toggles a CSS class on the logo to start or stop a spin animation.
     */
    function toggleAnimation() {
        const logo = document.querySelector('.logo-svg');
        if (logo) {
            // DOM Interaction 2: Toggling a class on an element
            logo.classList.toggle('spin');
            isAnimationActive = !isAnimationActive; // Update state variable
            console.log(`Spin animation is now ${isAnimationActive ? 'ON' : 'OFF'}.`);
        }
    }

    // ========================================================
    // Part 3: Loop Examples
    // ========================================================
    console.log("Part 3: Loops");

    // Loop 1: A 'for' loop to create decorative elements
    const dotsContainer = document.getElementById('dots-container');
    const numberOfDots = 10;
    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
    }
    console.log(`${numberOfDots} decorative dots created with a 'for' loop.`);

    // Loop 2: A 'forEach' loop to add event listeners to multiple buttons
    const colorChangeButtons = document.querySelectorAll('.color-change-btn');
    colorChangeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const header = document.querySelector('header h1');
            // Generate a random color
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
            header.style.color = randomColor;
            console.log(`Header color changed to ${randomColor}.`);
        });
    });
    console.log(`Event listeners added to ${colorChangeButtons.length} buttons with a 'forEach' loop.`);


    // ========================================================
    // Part 4: DOM Interactions (3 examples are spread throughout the code)
    // ========================================================
    console.log("Part 4: DOM Interactions");

    // Interaction 1 is in createLogo(): `parentElement.innerHTML = svgContent;`
    // Interaction 2 is in toggleAnimation(): `logo.classList.toggle('spin');`

    // DOM Interaction 3: Adding an event listener to a single button
    const toggleButton = document.getElementById('animation-toggle-btn');
    toggleButton.addEventListener('click', toggleAnimation);
    console.log("Event listener for animation toggle has been attached.");

});
