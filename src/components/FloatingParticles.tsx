
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface FloatingParticlesProps {
  particleCount?: number;
  isDark?: boolean;
  className?: string;
}

const FloatingParticles = ({ 
  particleCount = 150, 
  isDark = true, 
  className = '' 
}: FloatingParticlesProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    mouse: THREE.Vector2;
    animationId: number;
  } | null>(null);
  
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Particle system
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Velocity
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;

      // Colors based on theme
      const color = new THREE.Color();
      if (isDark) {
        if (Math.random() > 0.7) {
          color.setHSL(0.6, 0.8, 0.8); // Blue
        } else if (Math.random() > 0.5) {
          color.setHSL(0.8, 0.7, 0.9); // Purple
        } else {
          color.setHSL(0, 0, 0.9); // White
        }
      } else {
        if (Math.random() > 0.7) {
          color.setHSL(0.6, 0.6, 0.4); // Dark blue
        } else if (Math.random() > 0.5) {
          color.setHSL(0.8, 0.5, 0.5); // Dark purple
        } else {
          color.setHSL(0, 0, 0.3); // Dark gray
        }
      }
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Size
      sizes[i] = Math.random() * 3 + 1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Shader material for particles
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mousePosition: { value: new THREE.Vector2(0, 0) },
        scrollOffset: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;
        uniform float time;
        uniform vec2 mousePosition;
        uniform float scrollOffset;
        
        void main() {
          vColor = color;
          
          vec3 pos = position;
          
          // Floating motion
          pos.x += sin(time * 0.5 + position.y * 0.1) * 0.5;
          pos.y += cos(time * 0.3 + position.x * 0.1) * 0.3;
          pos.z += sin(time * 0.4 + position.x * 0.05) * 0.2;
          
          // Mouse interaction
          vec2 mouseEffect = (mousePosition - position.xy) * 0.1;
          pos.xy += mouseEffect * 2.0;
          
          // Scroll-based movement
          pos.y += scrollOffset * 0.5;
          pos.x += scrollOffset * 0.2;
          
          // Distance-based opacity
          float dist = length(pos);
          vOpacity = 1.0 - smoothstep(5.0, 15.0, dist);
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vOpacity;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          
          if (dist > 0.5) discard;
          
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          alpha *= vOpacity;
          
          // Add glow effect
          float glow = 1.0 - smoothstep(0.0, 0.3, dist);
          
          gl_FragColor = vec4(vColor, alpha * glow);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 5;

    const mouse = new THREE.Vector2();

    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      mouse,
      animationId: 0
    };

    // Animation loop
    const animate = () => {
      if (!sceneRef.current) return;
      
      const time = Date.now() * 0.001;
      
      // Update uniforms
      material.uniforms.time.value = time;
      material.uniforms.mousePosition.value.set(mousePos.x, mousePos.y);
      material.uniforms.scrollOffset.value = scrollY * 0.01;

      // Rotate particles slowly
      particles.rotation.y = time * 0.1;
      particles.rotation.x = Math.sin(time * 0.2) * 0.1;

      // Update particle positions
      const positions = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];

        // Boundary wrapping
        if (Math.abs(positions[i * 3]) > 10) velocities[i * 3] *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 10) velocities[i * 3 + 1] *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 10) velocities[i * 3 + 2] *= -1;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      sceneRef.current.animationId = requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    // Scroll handler
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Resize handler
    const handleResize = () => {
      if (!sceneRef.current) return;
      
      const { camera, renderer } = sceneRef.current;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        sceneRef.current.renderer.dispose();
        geometry.dispose();
        material.dispose();
        if (mountRef.current && sceneRef.current.renderer.domElement) {
          mountRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, [particleCount, isDark, mousePos.x, mousePos.y, scrollY]);

  return (
    <div 
      ref={mountRef} 
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ mixBlendMode: isDark ? 'screen' : 'multiply' }}
    />
  );
};

export default FloatingParticles;
