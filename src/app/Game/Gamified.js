"use client";

import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

const PunchTheCupGame = () => {
  const mountRef = useRef(null);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Cup Geometry
    const cupGeometry = new THREE.CylinderGeometry(1, 1.2, 2, 32);
    const cupMaterial = new THREE.MeshStandardMaterial({ color: "#FF5733" });
    const cup = new THREE.Mesh(cupGeometry, cupMaterial);
    scene.add(cup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Function to randomly position the cup
    const randomizeCupPosition = () => {
      cup.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 5
      );
    };

    randomizeCupPosition();

    // Event Listener for clicking the cup
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(cup);

      if (intersects.length > 0) {
        setScore((prev) => prev + 10);
        setProgress((prev) => Math.min(prev + 10, 100));
        gsap.to(cup.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 0.2, yoyo: true, repeat: 1 });
        randomizeCupPosition();
      }
    };

    window.addEventListener("click", handleMouseClick);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("click", handleMouseClick);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Punch the Cup!</h1>
        <p className="text-lg">Score: {score}</p>
        <div className="w-64 bg-gray-200 h-6 mt-2 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-full rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />
    </div>
  );
};

export default PunchTheCupGame;
