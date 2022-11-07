import { useEffect } from "react";
// Removed logo since we don't need it anymore
import * as THREE from "three";

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 96;

    const canvas = document.getElementById("myThreeJsCanvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);

    const animate = () => {
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  });

  return (
    <div>
      <p> Hello World</p>
    </div>
  );
}

export default App;
