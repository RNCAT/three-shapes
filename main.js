import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x78d478 })
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.set(0, 2, 0)

const capsuleGeometry = new THREE.CapsuleGeometry(0.5, 1, 4, 8)
const capsuleMaterial = new THREE.MeshBasicMaterial({ color: 0xa5addf })
const capsule = new THREE.Mesh(capsuleGeometry, capsuleMaterial)
capsule.position.set(0, 0, 0)

const coneGeometry = new THREE.ConeGeometry(1, 1.5, 6)
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xf0dea8 })
const cone = new THREE.Mesh(coneGeometry, coneMaterial)
cone.position.set(0, -2, 0)

scene.add(box)
scene.add(capsule)
scene.add(cone)

camera.position.z = 5

function animate() {
  requestAnimationFrame(animate)

  box.rotation.x += 0.01
  box.rotation.y += 0.01
  capsule.rotation.x += 0.01
  capsule.rotation.y += 0.01
  cone.rotation.y += 0.01
  cone.rotation.y += 0.01

  renderer.render(scene, camera)
}

animate()
