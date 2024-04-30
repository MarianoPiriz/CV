import * as THREE from 'three';

import { box, plane, newplane } from './objects.js';
import { gsap } from 'gsap/gsap-core';
import { certificatesTarget } from './objects.js';

//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const cvs = document.querySelector('#cvs_wrapper');
const logoTarget = document.querySelector('.logo');

const render1 = new THREE.WebGLRenderer();
const scene1 = new THREE.Scene();
scene1.add(plane);
const camera1 = new THREE.OrthographicCamera();
camera1.position.set(0, 0, 2);

const render2 = new THREE.WebGLRenderer();
const scene2 = new THREE.Scene();
scene2.add(box);
const camera2 = new THREE.PerspectiveCamera();
camera2.position.set(0, -0.5, 3);

// const render3 = new THREE.WebGLRenderer();
// const scene3 = new THREE.Scene();
// scene3.add(newplane);
// const camera3 = new THREE.OrthographicCamera();
// camera3.position.set(0, 0, 2);

///////////HOME RENDER///////////////////////////////////////

const heroImg = render1.domElement;
heroImg.classList.add('heroImg');
let cw = cvs.offsetWidth;
let ch = cvs.offsetHeight;
render1.setSize(cw, ch);
cvs.appendChild(heroImg);
window.addEventListener('resize', (e) => {
  cw = cvs.offsetWidth;
  ch = cvs.offsetHeight;
  //console.log(cw, ch);
  render1.setSize(cw, ch);
  camera1.updateProjectionMatrix();
});

///////////////LOGO RENDER/////////////////////////////////////////////

const logo = render2.domElement;
let logoW = logoTarget.offsetWidth;
let logoH = logoTarget.offsetHeight;
render2.setSize(logoW, logoH);
logoTarget.appendChild(logo);

//const axisHelp = new THREE.AxesHelper(5);

// const oC = new OrbitControls(camera1, render1.domElement);
// oC.update();

//scene1.add(axisHelp);
//console.log(plane.geometry.attributes.position.array);

function render() {
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;
  render1.render(scene1, camera1);
  render1.setClearColor(0xffffff, 0);
  render2.render(scene2, camera2);
  render2.setClearColor(0xffffff, 0);

  requestAnimationFrame(render);
}

render();

gsap.from(plane.scale, { x: 0, y: 0, z: 0, ease: 'expo.out', duration: 3 });

//gsap.from(plane.position, { y: 3, z: 3, ease: 'expo.out', duration: 3 });
