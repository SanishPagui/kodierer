"use client";

import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

const PunchTheCupGame = () => {
  const mountRef = useRef(null);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const countdownTimer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(countdownTimer);
    } else {
      setGameStarted(true);
    }
  }, [countdown]);

  useEffect(() => {
    if (!mountRef.current || !gameStarted) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Improved cup design with inverted shape
    const cupGeometry = new THREE.CylinderGeometry(1.5, 1, 2.5, 64, 1, true);
    const cupMaterial = new THREE.MeshStandardMaterial({
      color: "#FF5733",
      metalness: 0.6,
      roughness: 0.3,
      side: THREE.DoubleSide,
    });
    const cup = new THREE.Mesh(cupGeometry, cupMaterial);
    cup.rotation.x = Math.PI; // Invert the cup
    scene.add(cup);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const randomizeCupPosition = () => {
      cup.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 5
      );
      gsap.to(cup.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 1, yoyo: true, repeat: -1 });
    };

    randomizeCupPosition();

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseClick = (event) => {
      if (gameOver) return;

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(cup);

      if (intersects.length > 0) {
        setScore((prev) => prev + 10);
        setProgress((prev) => Math.min(prev + 10, 100));
        gsap.to(cup.scale, { x: 1.8, y: 1.8, z: 1.8, duration: 0.2, yoyo: true, repeat: 1 });
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

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("click", handleMouseClick);
      renderer.dispose();
    };
  }, [gameStarted]);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameStarted]);

  return (
    <div className="relative">
      {!gameStarted ? (
        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-80 text-white text-6xl font-bold">
          {countdown > 0 ? countdown : "Go!"}
        </div>
      ) : gameOver ? (
        <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-black bg-opacity-80 text-white">
          <h1 className="text-4xl font-bold mb-4">Game Over!</h1>
          <p className="text-2xl mb-2">Your Score: {score}</p>
          <button
            onClick={() => {
              setScore(0);
              setProgress(0);
              setTimeLeft(10);
              setCountdown(3);
              setGameStarted(false);
              setGameOver(false);
            }}
            className="bg-green-500 px-6 py-2 rounded-lg text-lg font-bold"
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold">Punch the Cup!</h1>
            <p className="text-lg">Score: {score}</p>
            <p className="text-lg">Time Left: {timeLeft}s</p>
            <div className="w-64 bg-gray-200 h-6 mt-2 rounded-full overflow-hidden">
              <div
                className="bg-green-500 h-full rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />
        </>
      )}
    </div>
  );
};

export default PunchTheCupGame;
