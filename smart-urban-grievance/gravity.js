window.onload = function () {
    // Wait slightly to let users see the original layout
    setTimeout(initGravity, 800);
};

function initGravity() {
    // Make body a dark canvas so we can see the white text perfectly
    document.body.style.background = 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)';
    document.body.style.overflow = 'hidden';

    // Neutralize container backgrounds and borders to keep them invisible when empty
    document.querySelectorAll('.glass').forEach(el => {
        // Only strip if not a card, keep cards looking like cards
        if (!el.classList.contains('card')) {
            el.style.background = 'transparent';
            el.style.border = 'none';
            el.style.backdropFilter = 'none';
            el.style.boxShadow = 'none';
        }
    });

    // Neutralize parent positioning
    const nav = document.querySelector('.navbar');
    if (nav) nav.style.position = 'static';

    const selectors = [
        '.logo',
        '.navbar li',
        '.hero h1',
        '.hero p',
        '.hero .btn',
        '.features h2',
        '.card',
        'footer p'
    ];

    let elements = [];
    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => elements.push(el));
    });

    // 1. Snapshot layout positions
    const rects = elements.map(el => {
        const r = el.getBoundingClientRect();
        return {
            el: el,
            w: r.width,
            h: r.height,
            x: r.left + r.width / 2, // Center X
            y: r.top + r.height / 2  // Center Y
        };
    });

    // 2. Tear elements out of the normal document flow
    elements.forEach((el, index) => {
        el.style.position = 'absolute';
        el.style.margin = '0';
        el.style.top = '0px';
        el.style.left = '0px';

        // Preserve dimensions so they don't collapse when absolute
        el.style.width = rects[index].w + 'px';
        el.style.height = rects[index].h + 'px';

        // Set initial transform
        el.style.transform = `translate(${rects[index].x - rects[index].w / 2}px, ${rects[index].y - rects[index].h / 2}px)`;
        el.style.transformOrigin = 'center center';
        el.style.zIndex = '1000';
    });

    // 3. Initialize Matter.js Engine
    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;
    const engine = Engine.create();

    // Create physics bodies corresponding to the DOM elements
    const bodies = rects.map(r => {
        return Bodies.rectangle(r.x, r.y, r.w, r.h, {
            restitution: 0.6, // Bounciness
            friction: 0.1,
            density: 0.005
        });
    });

    Composite.add(engine.world, bodies);

    // 4. Create bounds (Floor & Walls)
    const wallOpts = { isStatic: true, restitution: 0.4 };
    let w = window.innerWidth;
    let h = window.innerHeight;

    // Make ground slightly lower to hide it, but thick enough to catch everything
    const ground = Bodies.rectangle(w / 2, h + 30, w * 2, 60, wallOpts);
    const leftWall = Bodies.rectangle(-30, h / 2, 60, h * 5, wallOpts);
    const rightWall = Bodies.rectangle(w + 30, h / 2, 60, h * 5, wallOpts);

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // 5. Add Drag & Drop Interactivity
    const mouse = Mouse.create(document.body);
    const mConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: { visible: false }
        }
    });
    Composite.add(engine.world, mConstraint);

    // Run the engine
    const runner = Runner.create();
    Runner.run(runner, engine);

    // 6. Sync Loop: Update DOM to match Physics
    Matter.Events.on(engine, 'afterUpdate', function () {
        for (let i = 0; i < elements.length; i++) {
            const body = bodies[i];
            const el = elements[i];
            const r = rects[i];

            // Calculate top-left based on body center
            const x = body.position.x - r.w / 2;
            const y = body.position.y - r.h / 2;
            const angle = body.angle;

            el.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
        }
    });

    // Resize handling to update ground and walls dynamically
    window.addEventListener('resize', () => {
        w = window.innerWidth;
        h = window.innerHeight;
        Matter.Body.setPosition(ground, { x: w / 2, y: h + 30 });
        Matter.Body.setPosition(rightWall, { x: w + 30, y: h / 2 });
    });

    // Prevent default touch actions or scroll when dragging
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, { passive: false });
}
