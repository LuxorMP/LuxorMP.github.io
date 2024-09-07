document.addEventListener('DOMContentLoaded', function () {
    const numHexagons = 50; 
    const container = document.createElement('div');
    container.className = 'hexagon-container';
    document.body.appendChild(container);

    function createHexagon() {
        const hexagon = document.createElement('div');
        hexagon.className = 'hexagon';
        container.appendChild(hexagon);

        const size = Math.random() * 60 + 40; 
        hexagon.style.width = `${size}px`;
        hexagon.style.height = `${size}px`;
        hexagon.style.top = `${Math.random() * 100}vh`;
        hexagon.style.left = `${Math.random() * 100}vw`;

        const duration = Math.random() * 20 + 10; 
        hexagon.style.animationDuration = `${duration}s`;
    }

    for (let i = 0; i < numHexagons; i++) {
        createHexagon();
    }

    document.addEventListener('mousemove', function (e) {
        const hexagons = document.querySelectorAll('.hexagon');
        hexagons.forEach(hex => {
            const rect = hex.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            hex.style.transform = `translate(${x / 10}px, ${y / 10}px)`;
        });
    });
});
