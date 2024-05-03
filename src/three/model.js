import * as THREE from 'three';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import model3d from '../assets/untitled.glb';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const target = document.querySelector('.gltf_wrapper');
let cw = target.offsetWidth;
let ch = target.offsetHeight;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(cw, ch);

const canvas = renderer.domElement;
canvas.classList.add('model');

target.appendChild(canvas);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, cw / ch, 0.1, 1000);
const light = new THREE.AmbientLight(0xffffee, 0.8);
//light.position.set(2, 2, 5);
scene.add(light);
camera.position.set(0, 0, 2.5);

const orbit = new OrbitControls(camera, canvas);

orbit.update();

const loader = new GLTFLoader();

let model;

async function loadModel(glbModel) {
  return new Promise((resolve, reject) => {
    loader.load(
      glbModel,
      function (gltf) {
        model = scene.add(gltf.scene);

        model.position.y = -1;
        model.traverse((node) => {
          if (!node.isMesh) return;

          node.material.wireframe = true;
          node.material.color.set(0xdef71c);
        });
        resolve(model);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}

const targetSection = document.querySelector('.about_section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.isIntersecting);

        loadModel(model3d).then((model) => {
          gsap.from('.model', {
            opacity: 0,
            duration: 3,
            ease: 'expoScale',
          });

          observer.unobserve(entry.target);
        });
        // .catch(error => {

        // });
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(targetSection);

// loader.load(model3d, function (gltf) {
//   model = scene.add(gltf.scene);

//   model.position.y = -1;
//   model.traverse((node) => {
//     if (!node.isMesh) return;

//     node.material.wireframe = true;
//     node.material.color.set(0xdef71c);
//   });
// });

function animate() {
  renderer.render(scene, camera);
  if (model) model.rotation.y += 0.001;

  requestAnimationFrame(animate);
}

animate();
