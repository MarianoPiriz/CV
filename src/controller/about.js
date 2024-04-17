import about from '../views/about.html';
import gsap from 'gsap';

import SplitType from 'split-type';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import model3d from '../assets/computer.glb';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const aboutPage = function () {
  console.log('Estas en about');
  const root = document.getElementById('about');

  if (!root.classList.contains('rendered')) {
    root.classList.add('rendered');
  } else return;
  root.style.height = 'fit-content';
  root.innerHTML = about;

  const target = root.querySelector('.gltf_wrapper');

  let cw = target.offsetWidth;
  let ch = target.offsetHeight;

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(cw, ch);

  const canvas = renderer.domElement;

  canvas.classList.add('model');

  target.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, cw / ch, 0.1, 1000);
  const light = new THREE.AmbientLight(0xffffee, 0.8);
  //light.position.set(2, 2, 5);
  scene.add(light);
  camera.position.set(0, 0, 2);

  const orbit = new OrbitControls(camera, canvas);

  orbit.update();

  const loader = new GLTFLoader();

  let model;

  loader.load(model3d, function (gltf) {
    model = scene.add(gltf.scene);

    model.traverse((node) => {
      if (!node.isMesh) return;

      node.material.wireframe = true;
      node.frustumCulled = false;
      node.material.color.setHex(0xdef71c);
    });
  });

  function animate() {
    renderer.render(scene, camera);
    if (model) model.rotation.y += 0.001;

    requestAnimationFrame(animate);
  }

  animate();

  gsap.from('.gltf_wrapper', {
    opacity: 0,
    scale: 0,
    duration: 5,
    ease: 'expoScale',
  });

  gsap.from('.about_content', {
    opacity: 0,
    y: 500,
    duration: 2,
    ease: 'expoScale',
  });

  const heading = root.querySelector('.secondary_heading');

  const text = new SplitType(heading, { types: 'chars' });

  gsap.to(text.chars, {
    y: -50,
    opacity: 0.2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '#education',
      scrub: 1,
      start: 'top 100%',
      end: 'top 20%',
    },
  });

  gsap.to('.gltf_wrapper', {
    y: -1000,
    duration: 1,
    ease: 'expoScale',
    scrollTrigger: {
      trigger: '#education',
      scrub: 1,
    },
  });
  // gsap.to('.about_content', {
  //   y: -500,
  //   ease: 'expoScale',
  //   scrollTrigger: {
  //     trigger: '#education',
  //     scrub: 1,
  //     start: 'top 90%',
  //     end: 'top 20%',
  //   },
  // });

  gsap.to('.secondary_heading', {
    y: -300,
    opacity: 0,
    duration: 4,
    ease: 'expoScale',
    scrollTrigger: {
      trigger: '#education',
      scrub: 1,
      delay: 5,
      start: 'top 90%',
      end: 'top 20%',
    },
  });
  gsap.to('.about_p', {
    y: -200,
    duration: 2,
    ease: 'expoScale',
    scrollTrigger: {
      trigger: '#education',
      scrub: 1,
    },
  });
};
