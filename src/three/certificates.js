import * as THREE from 'three';
import { certificates } from './assetLoader.js';
import vertex2 from '../glsl/vertex2.glsl';
import fragment2 from '../glsl/fragment2.glsl';

import { gsap } from 'gsap/gsap-core';

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

let targetX = 0;
let targetY = 0;

const textures = {
  coursera: certificates.textures[0],
  js: certificates.textures[1],
  fundasoft: certificates.textures[2],
  linux: certificates.textures[3],
  utn: certificates.textures[4],
  volta: certificates.textures[5],
};

console.log(textures);

const coursera = certificates.textures[0];
const js = certificates.textures[1];
const fundasoft = certificates.textures[2];
const linux = certificates.textures[3];
const webmaster = certificates.textures[4];
const volta = certificates.textures[5];

class WebGL {
  constructor() {
    this.container = document.querySelector('.certificates-wrap');
    this.links = [...document.querySelectorAll('[data-animation="education"]')];

    this.scene = new THREE.Scene();
    this.perspective = 1000;
    this.sizes = new THREE.Vector2(0, 0);
    this.offset = new THREE.Vector2(0, 0);
    this.uniforms = {
      uTexture: {
        value: new THREE.TextureLoader().load(coursera),
      },
      uAlpha: { value: 0.0 },
      uOffset: { value: new THREE.Vector2(0.0, 0.0) },
    };
    this.links.pop();
    this.links.forEach((link) => {
      link.lastElementChild.addEventListener('click', (e) => {
        e.preventDefault();
      });
      window.matchMedia('all and (min-width: 375px) and (max-width: 800px)')
        .matches
        ? (() => {
            //////////////////////////////////////////////////////////////

            link.lastElementChild.addEventListener('pointerdown', (e) => {
              link.lastElementChild.setPointerCapture(e.pointerId);

              const el = document.createElement('div');
              const geo = new THREE.PlaneGeometry(2, 2, 50, 50);

              const mat = new THREE.MeshBasicMaterial();

              const mesh = new THREE.Mesh(geo, mat);

              const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
              });

              const canvas = renderer.domElement;
              const scene = new THREE.Scene();
              scene.add(mesh);
              const camera = new THREE.OrthographicCamera();
              camera.position.set(0, 0, 2);

              const target = e.target.parentElement.parentElement;
              const targetID = e.target.parentElement.id;

              mat.map = textures[`${targetID}`];

              el.classList.add('frame');

              target.insertAdjacentElement('beforebegin', el);

              el.appendChild(canvas);

              renderer.setSize(el.clientWidth, el.clientHeight);
              setTimeout(() => {
                //el.removeChild(canvas);
                el.remove();
              }, 3000);

              function render() {
                renderer.render(scene, camera);
                requestAnimationFrame(render);
              }
              render();
            });
          })()
        : link.addEventListener('pointerenter', (e) => {
            this.uniforms.uTexture.value = textures[`${e.target.id}`];
            this.linkHovered = true;
          });

      link.addEventListener('pointerleave', () => {
        this.uniforms.uAlpha.value = lerp(this.uniforms.uAlpha.value, 0.0, 0.1);
        this.linkHovered = false;
      });
    });

    this.setUpCamera();
    this.onMouseMove();
    this.createMesh();
    this.render();
  }

  get viewport() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let aspectRatio = width / height;

    return {
      width,
      height,
      aspectRatio,
    };
  }

  setUpCamera() {
    window.addEventListener('resize', this.onWindowResize.bind(this));

    let fov =
      (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) /
      Math.PI;
    this.camera = new THREE.PerspectiveCamera(
      fov,
      this.viewport.aspectRatio,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, this.perspective);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.viewport.width, this.viewport.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.domElement.classList.add('canvas-edu');
    this.container.appendChild(this.renderer.domElement);
  }

  createMesh() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 20, 20);
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vertex2,
      fragmentShader: fragment2,
      transparent: true,
      // wireframe: true,
      // side: THREE.DoubleSide
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.sizes.set(500, 350, 1);
    this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);
    this.mesh.position.set(this.offset.x, this.offset.y, 0);

    this.scene.add(this.mesh);
  }
  onWindowResize() {
    this.camera.aspect = this.viewport.aspectRatio;
    this.camera.fov =
      (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) /
      Math.PI;
    this.renderer.setSize(this.viewport.width, this.viewport.height);
    this.camera.updateProjectionMatrix();
  }

  onMouseMove() {
    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });
  }

  render() {
    this.offset.x = lerp(this.offset.x, targetX, 0.1);
    this.offset.y = lerp(this.offset.y, targetY, 0.1);
    this.uniforms.uOffset.value.set(
      (targetX - this.offset.x) * 0.0005,
      -(targetY - this.offset.y) * 0.0005
    );
    this.mesh.scale.set(this.sizes.x, this.sizes.y);
    this.mesh.position.set(
      this.offset.x - this.container.offsetWidth / 2,
      -this.offset.y + this.container.offsetHeight / 2,
      0
    );

    this.linkHovered
      ? (this.uniforms.uAlpha.value = lerp(
          this.uniforms.uAlpha.value,
          1.0,
          0.1
        ))
      : (this.uniforms.uAlpha.value = lerp(
          this.uniforms.uAlpha.value,
          0.0,
          0.1
        ));

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}

new WebGL();
