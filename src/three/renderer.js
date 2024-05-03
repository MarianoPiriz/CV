import * as THREE from 'three';

import { box, plane } from './objects.js';

class Renderer {
  constructor(target, mesh, camera, name) {
    this.target = target;
    this.mesh = mesh;
    this.camera = camera;
    this.name = name;
    this.render = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.scene = new THREE.Scene();
    this.targetWidht = this.target.clientWidth;
    this.targetHeight = this.target.clientHeight;
    this.setScene();
  }

  setScene() {
    this.scene.add(this.mesh);
    this.render.setSize(this.targetWidht, this.targetHeight);
    const canvasElement = this.render.domElement;
    this.target.appendChild(canvasElement);
    canvasElement.classList.add(this.name);

    window.addEventListener('resize', (e) => {
      this.targetWidht = this.target.clientWidth;
      this.targetHeight = this.target.clientHeight;
      this.render.setSize(this.targetWidht, this.targetHeight);
      this.camera.updateProjectionMatrix();
    });
  }
}
const cvs = document.querySelector('#cvs_wrapper');
const camera1 = new THREE.OrthographicCamera();
camera1.position.set(0, 0, 2);
const hero = new Renderer(cvs, plane, camera1, 'heroImg');

const logoTarget = document.querySelector('.logo');
const camera2 = new THREE.PerspectiveCamera();
camera2.position.set(0, -0.5, 3);
const logo = new Renderer(logoTarget, box, camera2, 'logo');

function render() {
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  hero.render.render(hero.scene, hero.camera);

  logo.render.render(logo.scene, logo.camera);

  requestAnimationFrame(render);
}

render();
