'use client'

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export default function Canvas () {
    const mountRef = useRef(null);

    useEffect(() => {
        const loadModules = async () => {
            const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
            const { RGBELoader } = await import('three/examples/jsm/loaders/RGBELoader.js');

            const scene = new THREE.Scene();

            // Mousemove animation with GSAP
            window.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * (Math.PI * 0.1);
                const y = (e.clientY / window.innerHeight - 0.5) * (Math.PI * 0.1);  

                gsap.to(scene.rotation, {
                    x: THREE.MathUtils.clamp(y, -Math.PI / 6, Math.PI / 6), // Limit rotation on X-axis
                    y: THREE.MathUtils.clamp(x, -Math.PI / 6, Math.PI / 6), // Limit rotation on Y-axis
                    duration: 0.5,
                    ease: "power2.out"
                });
                // const x = (e.clientX / window.innerWidth - 0.5) * (Math.PI * 0.3);
                // const y = (e.clientY / window.innerHeight - 0.5) * (Math.PI * 0.3);
            
                // gsap.to(scene.rotation, {
                //     x: y,
                //     y: x,
                //     duration: 0.5,
                //     ease: "power2.out"
                // });
            });
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(50, 0, 80);

            if (mountRef.current) {
                const renderer = new THREE.WebGLRenderer({
                    canvas: mountRef.current,
                    antialias: true,
                    alpha: true
                });
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                renderer.setSize(window.innerWidth, window.innerHeight);

                // Load the GLB model
                const loader = new GLTFLoader();
                loader.load('/scene.gltf', (gltf) => {
                    const model = gltf.scene;

                    // Center the model
                    const bbox = new THREE.Box3().setFromObject(model);
                    const center = bbox.getCenter(new THREE.Vector3());
                    model.position.set(-center.x, -center.y, -center.z);

                    // Scale the model to fit within view
                    const size = bbox.getSize(new THREE.Vector3()).length();
                    const scaleFactor = 100 / size;
                    model.scale.set(scaleFactor, scaleFactor, scaleFactor);

                    // Make the model transparent
                    // model.traverse((object) => {
                    //     if (object.isMesh) {
                    //         object.material.transparent = true; // Enable transparency
                    //         object.material.opacity = 0.5;     // Set transparency level (0 = fully transparent, 1 = fully opaque)
                    //     }
                    // });

                    scene.add(model);

                    const animate = () => {
                        requestAnimationFrame(animate);
                        renderer.render(scene, camera);
                    };
                    animate();
                });

                // Load HDRI
                const hdriLoader = new RGBELoader();
                const pmremGenerator = new THREE.PMREMGenerator(renderer);
                pmremGenerator.compileEquirectangularShader();

                hdriLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr', (texture) => {
                    const envMap = pmremGenerator.fromEquirectangular(texture).texture;
                    scene.environment = envMap;

                    texture.dispose();
                    pmremGenerator.dispose();
                });
                

                // Handle window resize
                const handleResize = () => {
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                };

                window.addEventListener('resize', handleResize);
            }
        };

        loadModules();
    }, []);

    return <canvas ref={mountRef} style={{ position: 'fixed', zIndex: -1, width: '100%', height: '100%' }} />;
};
