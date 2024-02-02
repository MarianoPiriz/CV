varying vec2 vUv;

uniform float uCurve;

float PI = 3.141529;

void main() {
    vUv = uv;
    vec3 pos = position;

    pos.x = pos.x + sin(uv.y * PI) * (uCurve) * 0.1;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

}