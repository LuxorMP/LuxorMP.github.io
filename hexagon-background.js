document.addEventListener('DOMContentLoaded', function () {
    const numHexagons = 30; // Number of hexagons to create
    const hexagons = [];
    const colors = ['#8E2DE2', '#4A00E0'];

    function createHexagon() {
        const hexagon = document.createElement('div');
        hexagon.className = 'hexagon';
        document.body.appendChild(hexagon);
        hexagons.push(hexagon);

        // Random position
        hexagon.style.top = `${Math.random() * 100}vh`;
        hexagon.style.left = `${Math.random() * 100}vw`;

        // Random color
        const gradient = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
        hexagon.style.background = gradient;
    }

    for (let i = 0; i < numHexagons; i++) {
        createHexagon();
    }

    document.addEventListener('mousemove', function (e) {
        hexagons.forEach(hex => {
            const rect = hex.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            hex.style.transform = `translate(${x / 10}px, ${y / 10}px)`;
        });
    });
});
