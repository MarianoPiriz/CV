import * as THREE from 'three';
import heroImg1 from './images/heroImg1.png';
import heroImg2 from './images/heroImg2.png';
import distImg from './images/dist.png';

function imageToTexture(imgUrl) {
  const img = new Image();
  img.src = imgUrl;
  const texture = new THREE.Texture(img);
  img.onload = () => {
    texture.needsUpdate = true;
  };
  return texture;
}

imageToTexture(heroImg2);

const img1 = new Image();
console.log(img1);

const imgSrc1 = heroImg1;

img1.src = imgSrc1;

export const imgTexture1 = new THREE.Texture(img1);
//console.log(imgTexture1);

img1.onload = () => {
  imgTexture1.needsUpdate = true;
};

// const img2 = new Image();
// console.log(img2);

// const img3 = new Image();
// console.log(img3);

// const imgSrc2 = heroImg2;
// const imgSrc3 = distImg;

// export const imgTexture2 = new THREE.Texture(img2);
// //console.log(imgTexture2);

// export const imgTexture3 = new THREE.Texture(img3);
// //console.log(imgTexture3);

// img2.onload = () => {
//   imgTexture2.needsUpdate = true;
// };

// img2.src = imgSrc2;

// img3.onload = () => {
//   imgTexture3.needsUpdate = true;
// };

// img3.src = imgSrc3;
