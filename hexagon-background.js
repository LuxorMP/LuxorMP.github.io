document.addEventListener('DOMContentLoaded', function () {
    const numHexagons = 100; // Number of hexagons to create
    const container = document.createElement('div');
    container.className = 'hexagon-container';
    document.body.appendChild(container);

    function createHexagon() {
        const hexagon = document.createElement('div');
        hexagon.className = 'hexagon';
        container.appendChild(hexagon);

        // Random position
        hexagon.style.left = `${Math.random() * 100}vw`;

        // Random size
        const size = Math.random() * 60 + 40; // Random size between 40px and 100px
        hexagon.style.width = `${size}px`;
        hexagon.style.height = `${size}px`;

        // Random animation duration
        const duration = Math.random() * 2 + 3; // Duration between 3s and 5s
        hexagon.style.animationDuration = `${duration}s`;

        // Ensure hexagon is removed from DOM after animation ends to avoid overflow
        hexagon.addEventListener('animationend', () => {
            hexagon.remove();
        });
    }

    // Create initial hexagons
    for (let i = 0; i < numHexagons; i++) {
        createHexagon();
    }

    // Continuously create new hexagons to maintain background effect
    setInterval(createHexagon, 100); // Adjust the interval for more or fewer hexagons
});
