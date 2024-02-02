varying vec2 vUv;
uniform vec2 uOffset;

uniform sampler2D uTexture1;
uniform sampler2D uTexture2;
uniform sampler2D uTexture3;
uniform float iProgress;

void main() {

    vec4 dispImg = texture2D(uTexture3, vUv);
    vec4 img1 = texture2D(uTexture1, vUv);
    vec4 img2 = texture2D(uTexture2, vUv);

    vec2 displacedUv1 = vec2(vUv.x, vUv.y - (dispImg.r * -2.5) * (iProgress));
    vec2 displacedUv2 = vec2(vUv.x, vUv.y + (dispImg.r * 0.5) * (1. - iProgress));

    vec4 dispimg1 = texture2D(uTexture1, displacedUv1);

    dispimg1.r = texture2D(uTexture1, displacedUv1 + vec2(0., 0.3) * iProgress).r;
    dispimg1.g = texture2D(uTexture1, displacedUv1 + vec2(0., 0.0) * iProgress).g;
    dispimg1.b = texture2D(uTexture1, displacedUv1 + vec2(0., 0.1) * iProgress).b;

    vec4 dispimg2 = texture2D(uTexture2, displacedUv2);

    vec4 mixedTextures = mix(dispimg1, dispimg2, iProgress);

    gl_FragColor = mixedTextures;
    //gl_FragColor = vec4(pos, 1);

}
