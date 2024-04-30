import * as THREE from 'three';

import { homeImages } from '../three/assetLoader.js';

import { gsap } from 'gsap/gsap-core';

import vertexShader from '../glsl/vertex.glsl';

import fragmentShader from '../glsl/fragment.glsl';

//////////////////////////////////////////////////////////////

const imgTexture1 = homeImages.textures[0];
const imgTexture2 = homeImages.textures[1];
const imgTexture3 = homeImages.textures[2];
const logoTexture = homeImages.textures[3];

// const coursera = certificates.textures[0];
// const js = certificates.textures[1];
// const fundasoft = certificates.textures[2];
// const linux = certificates.textures[3];
// const webmaster = certificates.textures[4];
// const volta = certificates.textures[5];

/////////////////////////////////////////////////////////

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
  window.addEventListener('mouseenter', eventTypeEnter);
  window.addEventListener('mouseleave', eventTypeLeave);
}

////////////////////////////////////////////////////////////////////////////////

const logoGeometry = new THREE.BoxGeometry(1, 1, 1);
const logoMaterial = new THREE.MeshBasicMaterial({ map: logoTexture });

export const box = new THREE.Mesh(logoGeometry, logoMaterial);

////////////////////////////////////////////////////////////////////////////////
