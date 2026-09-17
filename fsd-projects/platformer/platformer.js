$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(400, 400, 20, 20);
createPlatform(1350, 400, 50, 50, "red");

createPlatform(0, 500, 200, 20);
createPlatform(1350, 400, 50, 50, "red");

createPlatform(200, 620, 200, 20);
createPlatform(1350, 400, 50, 50, "red");

createPlatform(500, 400, 20, 20);
createPlatform(1350, 400, 50, 50, "red");

createPlatform(700, 400, 20, 20);
createPlatform(1350, 400, 50, 50, "red");

createPlatform(1000, 400, 20, 20);
createPlatform(1350, 400, 50, 50, "red");

createPlatform(200, 500, 20, 240);
createPlatform(1350, 400, 50, 50, "red");

createPlatform(400, 620, 20, 120);
createPlatform(1350, 400, 50, 50, "red");

createPlatform(1340, 400, 20, 130);
createPlatform(1350, 400, 50, 50, "red");

    // TODO 3 - Create Collectables
createCollectable("diamond", 1350, 170, 0.5, 0.7);


    
    // TODO 4 - Create Cannons

createCannon("right", 300, 1500);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
