let colorType = {
  type: "multi"
};

let colors = {
  color1: "rgba(255,255,255,1)",
  color2: "rgba(233,239,250,1)",
  color3: "rgba(222,241,250,1)",
  color4: "rgba(178,209,219,1)",
  color5: "rgba(135,143,145,1)"
};

let options = {
  alphaSpeed: 2,
  alphaVariance: 1,
  color: [colors.color1, colors.color2, colors.color3, colors.color4],
  composition: "source-over",
  count: 150,
  direction: 160,
  drift: 2,
  glow: 50,
  imageUrl: [
    "https://assets.codepen.io/13471/snowflake.png",
    "https://assets.codepen.io/13471/snowflake(1).png",
    "https://assets.codepen.io/13471/snowflake(2).png",
    "https://assets.codepen.io/13471/snowflake(3).png",
    "https://assets.codepen.io/13471/snowflake(4).png",
    "https://assets.codepen.io/13471/snowflake(5).png",
    "https://assets.codepen.io/13471/snowflake(6).png",
    "https://assets.codepen.io/13471/snowflake(7).png",
    "https://assets.codepen.io/13471/snowflake(8).png",
  ],
  maxAlpha: 15,
  maxSize: 60,
  minAlpha: 10,
  minSize: 10,
  parallax: 2.5,
  rotation: 1.5,
  shape: ["image"],
  speed: .5,
  style: "fill",
  twinkle: false,
  xVariance: 20,
  yVariance: 20,
};

window.onload = function() {
  initSparticles();
}

window.initSparticles = function() {
  var $main = document.querySelector("main");
  window.mySparticles = new Sparticles($main,options);
};



