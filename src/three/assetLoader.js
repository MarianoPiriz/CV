import * as THREE from 'three';
import uxui from '../assets/coursera.jpg';
import js from '../assets/js.jpg';
import fullstack from '../assets/fundasoft.jpg';
import linux from '../assets/linux.jpg';
import webmaster from '../assets/utn.jpg';
import technician from '../assets/volta.jpg';
import heroImg1 from '../assets/heroImg1.jpg';
import heroImg2 from '../assets/heroImg2.jpg';
import distImg from '../assets/dist.jpg';
import logoImg from '../assets/logo.png';
import maic from '../assets/maic.jpg';
import michelle from '../assets/michelle.jpg';
import newyork from '../assets/newyork.jpg';
import reforma from '../assets/reforma.jpg';
import discotheque from '../assets/discotheque.jpg';
import tony from '../assets/tony.jpg';
import showcase from '../assets/showcase.mp4';

const certificatesArray = [uxui, js, fullstack, linux, webmaster, technician];
const homeImagesArray = [heroImg1, heroImg2, distImg, logoImg];
const showcaseImagesArray = [
  maic,
  michelle,
  newyork,
  reforma,
  discotheque,
  tony,
];

class Textures {
  constructor(images) {
    this.images = images;
    this.textures;
    this.uploadImages();
  }

  uploadImages() {
    this.textures = this.images.map((image) => {
      const img = new Image();
      img.src = image;

      const texture = new THREE.Texture(img);
      img.onload = () => {
        texture.needsUpdate = true;
        texture.name = image.slice(29, -4);
      };
      return texture;
    });
  }
}

export const certificates = new Textures(certificatesArray);
export const homeImages = new Textures(homeImagesArray);
export const showcaseImages = new Textures(showcaseImagesArray);

export async function videoLoader(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al cargar el video');
    }
    const blob = await response.blob();
    const video = document.querySelector('.showcase-video');

    video.src = URL.createObjectURL(blob);
    video.controls = false;

    return video;
  } catch (error) {
    throw error;
  }
}

export const videoUrl = showcase;
