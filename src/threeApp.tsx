import {SphereGeometry, MeshLambertMaterial, Texture, Mesh, Scene} from 'three';

const scene = new Scene();
const sphere = new SphereGeometry(200, 64, 64);
const material = new MeshLambertMaterial({
    map: new Texture()
});
const mesh = new Mesh(sphere, material);

scene.add(mesh);