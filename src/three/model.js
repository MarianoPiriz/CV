import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import model3d from '../assets/computer.glb';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let cw = target.offsetWidth;
let ch = target.offsetHeight;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(cw, ch);

const canvas = renderer.domElement;

target.appendChild(canvas);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, cw / ch, 0.1, 1000);
const light = new THREE.AmbientLight(0xffffee, 0.8);
//light.position.set(2, 2, 5);
scene.add(light);
camera.position.set(-3, 0, 0);

const orbit = new OrbitControls(camera, canvas);

orbit.update();

const loader = new GLTFLoader();

let model;

loader.load(model3d, function (gltf) {
  model = scene.add(gltf.scene);
  console.log(gltf);
  model.traverse((node) => {
    if (!node.isMesh) return;

    node.material.wireframe = true;
    node.material.color.setHex(0xdef71c);
  });
});

function animate() {
  renderer.render(scene, camera);
  if (model) model.rotation.y += 0.001;

  requestAnimationFrame(animate);
}

animate();
