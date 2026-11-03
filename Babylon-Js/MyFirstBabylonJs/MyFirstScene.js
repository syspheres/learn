const canvas = document.getElementById("renderCanvas");                                             // Get the canvas element
const engine = new BABYLON.Engine(canvas, true);                                                    // Generate the BABYLON 3D engine
const createScene = function () {
    //Scene Section
    const scene = new BABYLON.Scene(engine);                                                        // Creates a basic Babylon Scene object

    // Camera Section
    const camera = new BABYLON.FreeCamera("camera1",                                                // Creates and positions a free camera
        new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());                                                       // Targets the camera to scene origin
    camera.attachControl(canvas, true);                                                             // This attaches the camera to the canvas
    
    // Light Section
    const light = new BABYLON.HemisphericLight("light",                                             // Creates a light, aiming 0,1,0 - to the sky
        new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;                                                                          // Dim the light a small amount - 0 to 1
    
    // Mesh Section
    /// Sphere Section
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere",                                       // Built-in 'sphere' shape.
        {diameter: 2, segments: 32}, scene);
    sphere.position.y = 1;                                                                          // Move the sphere upward 1/2 its height
    
    /// Ground Section
    const ground = BABYLON.MeshBuilder.CreateGround("ground",                                       // Built-in 'ground' shape.
        {width: 6, height: 6}, scene);

    return scene;                                                                                   // End of Scene
};                                                                                                  // End of createScene variable

// Scene Section
const scene = createScene();                                                                        // Call the createScene function

// Engine Section
engine.runRenderLoop(function () {                                                                  // Register a render loop to repeatedly render the scene
        scene.render();
});
window.addEventListener("resize", function () {                                                     // Watch for browser/canvas resize events
    engine.resize();
});