import * as THREE from 'three';
import heroImg1 from '../assets/heroImg1.png';
import heroImg2 from '../assets/heroImg2.png';
import distImg from '../assets/dist.png';
import logoImg from '../assets/logo.png';

import { gsap } from 'gsap/gsap-core';

import vertexShader from '../glsl/vertex.glsl';
import fragmentShader from '../glsl/fragment.glsl';

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

/////////////////////////////////////////////////////////

planeMaterial.uniforms.uTexture1 = {
  value: imgTexture1,
};

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

if (
  window.matchMedia('all and (min-width: 375px) and (max-width:1200px)').matches
) {
  window.addEventListener('pointerdown', eventTypeEnter);
  window.addEventListener('pointerup', eventTypeLeave);
} else {
  window.addEventListener('mouseover', eventTypeEnter);
  window.addEventListener('mouseout', eventTypeLeave);
}

////////////////////////////////////////////////////////////////////////////////

//const logoTexture = new THREE.TextureLoader().load(logoImg);
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({ map: logoTexture });

export const box = new THREE.Mesh(boxGeometry, boxMaterial);

////////////////////////////////////////////////////////////////////////////////
