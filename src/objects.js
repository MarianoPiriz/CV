import * as THREE from 'three';
import heroImg1 from './images/heroImg1.png';
import heroImg2 from './images/heroImg2.png';
import distImg from './images/dist.png';
import logoImg from './images/logo.png';

console.log(heroImg1, heroImg2, distImg, logoImg);

import { gsap } from 'gsap/gsap-core';

import { smallDevices } from './pages.js';

import vertexShader from './glsl/vertex.glsl';
import fragmentShader from './glsl/fragment.glsl';

////////////////////////////////////////////////////////////////////////////////////

const planeGeometry = new THREE.PlaneGeometry(2, 2, 50, 50);

const planeMaterial = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  //wireframe: true,
});

let progress = (planeMaterial.uniforms.iProgress = { value: 0.0 });

let curve = (planeMaterial.uniforms.uCurve = {
  value: 0.0,
});

//////////////////////////////////////////////////////////////

function imageToTexture(imgUrl) {
  const img = new Image();
  img.src = imgUrl;
  const texture = new THREE.Texture(img);
  img.onload = () => {
    texture.needsUpdate = true;
  };
  return texture;
}

const imgTexture1 = imageToTexture(heroImg1);
const imgTexture2 = imageToTexture(heroImg2);
const imgTexture3 = imageToTexture(distImg);
const logoTexture = imageToTexture(logoImg);

console.log(imgTexture1);
console.log(imgTexture2);

/////////////////////////////////////////////////////////

// const textureLoader = new THREE.TextureLoader();

// const texture1 = textureLoader.load(heroImg1);
// const texture2 = textureLoader.load(heroImg2);
// const texture3 = textureLoader.load(distImg);

// console.log(texture1.source.data);

planeMaterial.uniforms.uTexture1 = {
  value: imgTexture1,
};

console.log(planeMaterial.uniforms.uTexture1);

planeMaterial.uniforms.uTexture2 = {
  value: imgTexture2,
};
planeMaterial.uniforms.uTexture3 = {
  value: imgTexture3,
};

export const plane = new THREE.Mesh(planeGeometry, planeMaterial);

function eventTypeEnter(e) {
  //console.log(e.target);
  if (e.target.matches('.heroImg')) {
    gsap.fromTo(
      progress,
      { value: 0.0 },
      { value: 1.0, duration: 1.5, ease: 'expo.out' }
    );
    gsap.fromTo(
      curve,
      { value: 1.0 },
      {
        value: 0.0,
        duration: 1,
        ease: 'bounce.out',
      }
    );
  }
}
function eventTypeLeave(e) {
  //console.log(e.target);
  if (e.target.matches('.heroImg')) {
    gsap.fromTo(
      progress,
      { value: 1.0 },
      { value: 0.0, duration: 1.5, ease: 'expo.out' }
    );
    gsap.fromTo(
      curve,
      { value: -1.0 },
      { value: 0.0, duration: 1, ease: 'bounce.out' }
    );
  }
}

if (smallDevices.matches) {
  console.log('small devices');

  window.addEventListener('pointerdown', eventTypeEnter);
  window.addEventListener('pointerup', eventTypeLeave);
} else {
  console.log('Desktop');
  window.addEventListener('mouseover', eventTypeEnter);
  window.addEventListener('mouseout', eventTypeLeave);
}

////////////////////////////////////////////////////////////////////////////////

//const logoTexture = new THREE.TextureLoader().load(logoImg);
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({ map: logoTexture });

export const box = new THREE.Mesh(boxGeometry, boxMaterial);
