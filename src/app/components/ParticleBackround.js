import React from "react";
import { Particles } from "react-particles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = async (main) => {
    console.log("Main object:", main);
    // Load the full version of tsParticles
    await loadFull(main);
  };

  const particlesLoaded = () => {
    console.log("Particles loaded successfully!");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Place particles behind all content
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: "#0d1117", // Background color of the particles
          },
          fpsLimit: 60, // Frames per second
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push", // Add particles on click
              },
              onHover: {
                enable: true,
                mode: "repulse", // Repel particles on hover
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4, // Number of particles to add on click
              },
              repulse: {
                distance: 100, // Distance for repulsion effect
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#00ff00", "#00ffff", "#ff00ff", "#ffffff"], // Color of the particles
            },
            links: {
              color: "#00ff00",
              distance: 150, // Distance between linked particles
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true, // Enable particle collisions
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce", // Bounce particles off edges
              },
              random: false,
              speed: 1, // Speed of particle movement
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800, // Area density of particles
              },
              value: 100, // Number of particles
            },
            opacity: {
              value: { min: 0.1, max: 0.8 }, // Opacity of particles
            },
            shape: {
              type: ["circle", "triangle", "square"], // Shape of particles (circle, square, etc.)
            },
            size: {
              value: { min: 1, max: 5 }, // Size range of particles
            },
          },
          detectRetina: true, // Optimize for high-resolution displays
        }}
      />
    </div>
  );
}
