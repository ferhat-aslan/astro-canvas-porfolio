//import zrender from "zrender";
var lastMouseDownPosition = [];
var isMouseDown = false;
window.addEventListener(
  "DOMContentLoaded",
  function () {
    const wh = window.innerWidth / 2;
    const hh = window.innerHeight / 2;
 const zrender = window.zrender;
    const zGroup = new zrender.Group();
    console.log(zGroup);
    const app = document.getElementById("app");

    app.style.width = `${window.innerWidth}px`;
    app.style.height = `${window.innerHeight}px`;
    app.style.cursor = `move`;
    const zr = zrender.init(app, {
      renderer: "svg",
    });

    const gif = new zrender.Image({
      style: {
        x: wh + 450,
        y: 400,
        image: "/gif-4.gif",
        width: 50,
      },
    });
    zGroup.add(gif);

    const astro = new zrender.Image({
      style: {
        x: wh +100,
        y: hh -300,
        image: "/gif-7.gif",
        width: 150,
      },
    });
    zGroup.add(astro);

    const berlin = new zrender.Image({
      style: {
        x: wh - 250,
        y: hh + 150,
        image: "/berlin-clipart-xl.png",
        width: 100,
      },
    });
    zGroup.add(berlin);

    const dunya = new zrender.Image({
      style: {
        x: wh + 200,
        y: 300,
        image: "/dunya.jpg",
        width: 200,
      },
    });
    zGroup.add(dunya);

    const kepler = new zrender.Image({
      style: {
        x: wh - 900,
        y: 300,
        image: "/kepler.png",
        width: 500,
      },
    });
    zGroup.add(kepler);

    const about = new zrender.Image({
      style: {
        x: wh - 100,
        y: hh + 50,
        image: "/about.png",
        width: 300,
      },
    });
    zGroup.add(about);

    const arrows = new zrender.Image({
      cursor: "pointer",
      style: {
        x: wh - 100,
        y: hh + 320,
        image: "/arrows.png",
        width: 200,
      },
    });
    zGroup.add(arrows);

    var ferhatAslan = new zrender.Text({
      style: {
        x: wh,
        y: hh,
        textOffset: [100, 100],
        blend: "lighten",
        text: "Ferhat Aslan",
        textOrigin: "right",
        strokeNoScale: true,
        fill: "white",
        fontFamily: "cursive",
        fontSize: "3em",
        textWidth: 100,
        align: "center",
        textPosition: "left",
        z: 100,
        textRect: {
          x: 100,
          y: 100,
          width: 500,
          height: 500,
        },
      },
    });

    zGroup.add(ferhatAslan);

    var briefDescription = new zrender.Text({
      style: {
        x: wh,
        y: hh + 50,
        textOffset: [100, 100],
        blend: "lighten",
        text: "• I am a Software Developer.",
        textOrigin: "right",
        fill: "#e0e0e0",
        strokeNoScale: true,
        fontFamily: "cursive",
        fontSize: "0.9em",
        textWidth: 100,
        align: "center",
        textPosition: "center",
        z: 100,
        textRect: {
          x: 100,
          y: 100,
          width: 500,
          height: 500,
        },
      },
    });
    // zGroup.add(briefDescription);
    var focused = new zrender.Text({
      style: {
        x: wh,
        y: hh + 70,
        textOffset: [100, 100],
        blend: "lighten",
        text: "• I focused on Web and IoT Development.",
        textOrigin: "right",
        fill: "#e0e0e0",
        strokeNoScale: true,
        fontFamily: "cursive",
        fontSize: "0.9em",
        textWidth: 100,
        align: "center",
        textPosition: "center",
        z: 100,
        textRect: {
          x: 100,
          y: 100,
          width: 500,
          height: 500,
        },
      },
    });
    //zGroup.add(focused);
    var focused = new zrender.Text({
      style: {
        x: wh,
        y: hh + 70,
        textOffset: [100, 100],
        blend: "lighten",
        text: "• I focused on Web and IoT Development.",
        textOrigin: "right",
        fill: "#71797E",
        strokeNoScale: true,
        fontFamily: "cursive",
        fontSize: "0.9em",
        textWidth: 100,
        align: "center",
        textPosition: "center",
        z: 100,
        textRect: {
          x: 100,
          y: 100,
          width: 500,
          height: 500,
        },
      },
    });
    // zGroup.add(focused);
    var studied = new zrender.Text({
      style: {
        x: wh,
        y: hh + 90,
        textOffset: [100, 100],
        blend: "lighten",
        text: "• I studied Electric/Electronic Engineering and Civil Engineering.",
        textOrigin: "right",
        fill: "#e0e0e0",
        strokeNoScale: true,
        fontFamily: "cursive",
        fontSize: "0.9em",
        textWidth: 100,
        align: "center",
        textPosition: "center",
        z: 100,
        textRect: {
          x: 100,
          y: 100,
          width: 500,
          height: 500,
        },
      },
    });
    // zGroup.add(studied);

    /*   setInterval(() => {
      gradient
        .animate("style", false)
        .when(1000, { x: 200 })

        .when(2000, { x: 400 })

        .start();
    }, 2000);
 */
    zr.add(zGroup);
    app.children[0].style.cursor = "move";

    window.addEventListener("mousedown", function (ev) {
      lastMouseDownPosition = [ev.zrX, ev.zrY];
      isMouseDown = true;
      console.log();
    });
    window.addEventListener("mousemove", function (e) {
      if (
        isMouseDown &&
        !isNaN(e.zrX) &&
        !isNaN(e.zrY) &&
        !isNaN(lastMouseDownPosition[0]) &&
        !isNaN(lastMouseDownPosition[1])
      ) {
        let xdiff = e.zrX - lastMouseDownPosition[0];
        let ydiff = e.zrY - lastMouseDownPosition[1];

        const w = zr.getWidth() - 300;
        const h = zr.getHeight() - 200;

        const x = zGroup.position[0] + xdiff;
        const y = zGroup.position[1] + ydiff;
        zGroup.position[0] = x;

        /* if (x <= 0) {
          this.zrGroup.position[0] = x;
        }  else if (x >= w) {
          this.zrGroup.position[0] = w;
        } else {
          this.zrGroup.position[0] = x;
        } */
        zGroup.position[1] = y;

        /* if (y <= 0) {
          this.zrGroup.position[1] = y;
        }  else if (y >= h) {
          this.zrGroup.position[1] = h;
        } else {
          this.zrGroup.position[1] = y;
        } */
        zGroup.dirty();

        lastMouseDownPosition = [e.zrX, e.zrY];
      }
    });
    window.addEventListener("mouseup", (ev) => {
      isMouseDown = false;
    });
    document.addEventListener("touchstart", function (ev) {
      lastMouseDownPosition = [ev.zrX, ev.zrY];
      isMouseDown = true;
    });
    window.addEventListener("touchmove", function (e) {
      if (isMouseDown) {
        let xdiff = e.zrX - lastMouseDownPosition[0];
        let ydiff = e.zrY - lastMouseDownPosition[1];

        const w = zr.getWidth() - 300;
        const h = zr.getHeight() - 200;

        const x = zGroup.position[0] + xdiff;
        const y = zGroup.position[1] + ydiff;
        zGroup.position[0] = x;

        /* if (x <= 0) {
          this.zrGroup.position[0] = x;
        }  else if (x >= w) {
          this.zrGroup.position[0] = w;
        } else {
          this.zrGroup.position[0] = x;
        } */
        zGroup.position[1] = y;

        /* if (y <= 0) {
          this.zrGroup.position[1] = y;
        }  else if (y >= h) {
          this.zrGroup.position[1] = h;
        } else {
          this.zrGroup.position[1] = y;
        } */
        zGroup.dirty();

        lastMouseDownPosition = [e.zrX, e.zrY];
      }
    });
    window.addEventListener("touchend", (ev) => {
      isMouseDown = false;
    });
    //////style
    setTimeout(() => {
      const a = document.getElementsByTagName("image");
      for (let index = 0; index < a.length; index++) {
        const element = a[index];

        //  element.style.cursor="pointer";
      }
    }, 100);

    ///////////// end of add event listeenr
  },
  false
);
