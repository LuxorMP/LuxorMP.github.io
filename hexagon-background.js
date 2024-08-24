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
        const riseDuration = Math.random() * 2 + 2; // Duration between 2s and 4s for rising
        const spinDuration = Math.random() * 2 + 4; // Duration between 4s and 6s for spinning
        hexagon.style.animation = `hexagon-rise ${riseDuration}s linear infinite, hexagon-spin ${spinDuration}s linear infinite`;

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
    setInterval(createHexagon, 50); // Adjust the interval for more or fewer hexagons
});
