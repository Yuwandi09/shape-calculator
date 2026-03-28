function show2D() {
  document.getElementById("twoD").style.display = "block";
  document.getElementById("threeD").style.display = "none";
}

function show3D() {
    document.getElementById("threeD").style.display = "block";
    document.getElementById("twoD").style.display = "none";
}

function showShape(shape) {

    document.getElementById("display").style.display = "block";

    let html = "";

    switch (shape) {

        case "circle":
            html = `
                <h2>Circle</h2>
                <img src="images/circle.png" width="200">
                <p>Area = πr²</p>
                Radius: <input id="r" type="number">
                <button onclick="calculate('${shape}','2D')">Calculate</button>
                <p id="result"></p>
            `;
            break;

        case "square":
            html = `
                <h2>Square</h2>
                <img src="images/square.png" width="200">
                <p>Area = a²</p>
                Side: <input id="a" type="number">
                <button onclick="calculate('${shape}','2D')">Calculate</button>
                <p id="result"></p>
            `;
            break;

        case "rectangle":
            html = `
                <h2>Rectangle</h2>
                <img src="images/rectangle.png" width="200">
                <p>Area = l × w</p>
                Length: <input id="l" type="number">
                Width: <input id="w" type="number">
                <button onclick="calculate('${shape}','2D')">Calculate</button>
                <p id="result"></p>
            `;
            break;

        case "triangle":
            html = `
                <h2>Triangle</h2>
                <img src="images/triangle.png" width="200">
                <p>Area = 1/2 × base × height</p>
                Base: <input id="b" type="number">
                Height: <input id="h" type="number">
                <button onclick="calculate('${shape}','2D')">Calculate</button>
                <p id="result"></p>
            `;
            break;

    case "eclipse":
    html = `
        <h2>Eclipse</h2>
        <img src="images/eclipse.png" width="200">
        <p>Area = π × a × b</p>
        Semi-major axis (a): <input id="a" type="number">
        Semi-minor axis (b): <input id="b" type="number">
        <button onclick="calculate('${shape}','2D')">Calculate</button>
        <p id="result"></p>
    `;
    break;    

        case "trapezoid":
            html = `
                <h2>Trapezoid</h2>
                <img src="images/trapezoid.png" width="200">
                <p>Area = 1/2 (a + b) × h</p>
                A: <input id="a" type="number">
                B: <input id="b" type="number">
                Height: <input id="h" type="number">
                <button onclick="calculate('${shape}','2D')">Calculate</button>
                <p id="result"></p>
            `;
            break;

        case "cube":
            html = `
                <h2>Cube</h2>
                <img src="images/cube.png" width="200">
                <p>Volume = a³</p>
                Side: <input id="a" type="number">
                <button onclick="calculate('${shape}','3D')">Calculate</button>
                <p id="result"></p>
            `;
            break;

        case "cuboid":
            html = `
                <h2>Cuboid</h2>
                <img src="images/cuboid.png" width="200">
                <p>Volume = l × w × h</p>
                Length: <input id="l" type="number">
                Width: <input id="w" type="number">
                Height: <input id="h" type="number">
                <button onclick="calculate('${shape}','3D')">Calculate</button>
                <p id="result"></p>
            `;
            break;

    case "cone":
    html = `
        <h2>Cone</h2>
        <img src="images/cone.png" width="200">
        <p>Volume = 1/3 × π × r² × h</p>
        Radius: <input id="r" type="number">
        Height: <input id="h" type="number">
        <button onclick="calculate('${shape}','3D')">Calculate</button>
        <p id="result"></p>
    `;
    break;    

        case "cylinder":
            html = `
                <h2>Cylinder</h2>
                <img src="images/cylinder.png" width="200">
                <p>Volume = πr²h</p>
                Radius: <input id="r" type="number">
                Height: <input id="h" type="number">
                <button onclick="calculate('${shape}','3D')">Calculate</button>
                <p id="result"></p>
            `;
            break;

        case "sphere":
            html = `
                <h2>Sphere</h2>
                <img src="images/sphere.png" width="200">
                <p>Volume = 4/3 πr³</p>
                Radius: <input id="r" type="number">
                <button onclick="calculate('${shape}','3D')">Calculate</button>
                <p id="result"></p>
            `;
            break;

        case "pyramid":
            html = `
                <h2>Pyramid</h2>
                <img src="images/pyramid.png" width="200">
                <p>Volume = 1/3 × base area × height</p>
                Base Area: <input id="b" type="number">
                Height: <input id="h" type="number">
                <button onclick="calculate('${shape}','3D')">Calculate</button>
                <p id="result"></p>
            `;
            break;
    }

    display.innerHTML = html;
}

function calculate(shape,type) {
    let result = 0;

    switch (shape) {

        case "circle":
            let r = document.getElementById("r").value;
            result = Math.PI * r * r;
            break;

        case "square":
            let a = document.getElementById("a").value;
            result = a * a;
            break;

        case "rectangle":
            let l = document.getElementById("l").value;
            let w = document.getElementById("w").value;
            result = l * w;
            break;

        case "triangle":
            let b = document.getElementById("b").value;
            let h = document.getElementById("h").value;
            result = 0.5 * b * h;
            break;

        case "eclipse":
            let aE = document.getElementById("a").value;
            let bE = document.getElementById("b").value;
            result = Math.PI * aE * bE;
            break;    

        case "trapezoid":
            let a1 = document.getElementById("a").value;
            let b1 = document.getElementById("b").value;
            let h1 = document.getElementById("h").value;
            result = 0.5 * (Number(a1) + Number(b1)) * h1;
            break;

        case "cube":
            let c = document.getElementById("a").value;
            result = c ** 3;
            break;

        case "cuboid":
            let l2 = document.getElementById("l").value;
            let w2 = document.getElementById("w").value;
            let h2 = document.getElementById("h").value;
            result = l2 * w2 * h2;
            break;

        case "cone":
            let rC = document.getElementById("r").value;
            let hC = document.getElementById("h").value;
            result = (1 / 3) * Math.PI * rC * rC * hC;
            break;    

        case "cylinder":
            let r2 = document.getElementById("r").value;
            let h3 = document.getElementById("h").value;
            result = Math.PI * r2 * r2 * h3;
            break;

        case "sphere":
            let r3 = document.getElementById("r").value;
            result = (4 / 3) * Math.PI * r3 ** 3;
            break;

        case "pyramid":
            let b2 = document.getElementById("b").value;
            let h4 = document.getElementById("h").value;
            result = (1 / 3) * b2 * h4;
            break;
    }

    let unit = (type === "2D") ? "m²" : "m³";

    document.getElementById("result").innerText = "Result = " + result+unit;
   
}