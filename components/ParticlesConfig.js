const ParticlesConfig = {
  particles: {
    number: {
      value: 28,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#A98BFF", "#4B4BF9", "#8F00FF"], 
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000",
      },
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.5,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: { enable: true, minimumValue: 1.2 },
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.8,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#A98BFF",
      opacity: 0.15,
      width: 1.1,
    },
    move: {
      enable: true,
      speed: 3.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 120,
        duration: 0.3,
      },
      bubble: {
        distance: 120,
        size: 6,
        duration: 2,
        opacity: 0.5,
        speed: 3,
      },
      push: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  fullScreen: {
    enable: false,
    zIndex: 1,
  },
};
/* #171717 */
export default ParticlesConfig;



/* const ParticlesConfig = 
  {
    "particles": {
      "number": {
        "value": 14,
        "density": {
          "enable": true,
          "value_area": 801.7060304327614
        }
      },
      "color": {
        "value": ["#A98BFF", "#4B4BF9", "#8F00FF"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 2,
          "color": ""
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5687847739990702,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#000000",
        "opacity": 0.152750653390415,
        "width": 1.763753266952075
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "fullScreen": {
      "enable": false,
      "zIndex": 1,
      }
}
export default ParticlesConfig;  */



/* const ParticleMidConfig = {
  "particles": {
    "number": {
      "value": 34,
      "density": {
        "enable": true,
        "value_area": 801.7060304327614
      }
    },
    "color": {
      "value": "#009999"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 3,
        "color": "#171717"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.3687847739990702,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 19.728691040806815,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 78.91476416322726,
      "color": "#ff0000",
      "opacity": 0.352750653390415,
      "width": 1.763753266952075
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}  */




