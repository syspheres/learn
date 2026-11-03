const canvas = document.getElementById("renderCanvas");                                                 // Get the canvas element
const engine = new BABYLON.Engine(canvas, true);                                                        // Generate the BABYLON 3D engine

var createScene = function () {                                                                         // createScene function in var
    // Scene Section
    var scene = new BABYLON.Scene(engine);                                                              // This creates a basic Babylon Scene object (non-mesh)

    // Camera Section
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);              // This creates and positions a free camera (non-mesh)
    camera.setTarget(BABYLON.Vector3.Zero());                                                           // This targets the camera to scene origin
    camera.attachControl(canvas, true);                                                                 // This attaches the camera to the canvas

    // Light Section
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);             // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    light.intensity = 0.7;                                                                              // Default intensity is 1. Let's dim the light a small amount

    // Mesh Section
    /// Ground Section
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);              // Our built-in 'ground' shape.

    return scene;                                                                                       // End of scene
};                                                                                                      // End of createScene variable

// Scene Section
const scene = createScene();                                                                            // Call the createScene function

// Engine Section
engine.runRenderLoop(function () {                                                                      // Register a render loop to repeatedly render the scene
        scene.render();
});
window.addEventListener("resize", function () {                                                         // Watch for browser/canvas resize events
    engine.resize();
});