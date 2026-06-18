// =============================================
// REYSCAN — Visualizador 3D de piezas
// Usa Three.js r128 via CDN
// =============================================

class Viewer3D {
  constructor(canvasId, piece) {
    this.canvas = document.getElementById(canvasId);
    this.piece = piece;
    this.animId = null;
    this.autoRotate = true;
    this.init();
  }

  init() {
    const W = this.canvas.clientWidth || 400;
    const H = this.canvas.clientHeight || 320;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xF4F6FA);

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    this.camera.position.set(3, 2.5, 3);
    this.camera.lookAt(0, 0, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setSize(W, H);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = true;
    this.scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xF5A623, 0.3);
    fillLight.position.set(-3, 2, -3);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x1B3A6B, 0.2);
    rimLight.position.set(0, -3, -5);
    this.scene.add(rimLight);

    // Grid
    const grid = new THREE.GridHelper(6, 12, 0xD1D9E6, 0xE8EDF5);
    grid.position.y = -1;
    this.scene.add(grid);

    // Build piece mesh
    this.mesh = this.buildMesh(this.piece.shape, this.piece.material);
    this.scene.add(this.mesh);

    // Mouse orbit
    this.isDragging = false;
    this.prevMouse = { x: 0, y: 0 };
    this.spherical = { theta: Math.PI / 4, phi: Math.PI / 3, r: 5 };
    this.canvas.addEventListener('mousedown', e => { this.isDragging = true; this.prevMouse = { x: e.clientX, y: e.clientY }; });
    this.canvas.addEventListener('mousemove', e => {
      if (!this.isDragging) return;
      const dx = (e.clientX - this.prevMouse.x) * 0.01;
      const dy = (e.clientY - this.prevMouse.y) * 0.01;
      this.spherical.theta -= dx;
      this.spherical.phi = Math.max(0.2, Math.min(Math.PI - 0.2, this.spherical.phi - dy));
      this.prevMouse = { x: e.clientX, y: e.clientY };
      this.autoRotate = false;
    });
    this.canvas.addEventListener('mouseup', () => { this.isDragging = false; });
    this.canvas.addEventListener('wheel', e => {
      this.spherical.r = Math.max(2, Math.min(10, this.spherical.r + e.deltaY * 0.01));
    });
    // Touch
    this.canvas.addEventListener('touchstart', e => {
      this.isDragging = true;
      this.prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });
    this.canvas.addEventListener('touchmove', e => {
      if (!this.isDragging) return;
      const dx = (e.touches[0].clientX - this.prevMouse.x) * 0.012;
      const dy = (e.touches[0].clientY - this.prevMouse.y) * 0.012;
      this.spherical.theta -= dx;
      this.spherical.phi = Math.max(0.2, Math.min(Math.PI - 0.2, this.spherical.phi - dy));
      this.prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      this.autoRotate = false;
    }, { passive: true });
    this.canvas.addEventListener('touchend', () => { this.isDragging = false; });

    this.animate();
    window.addEventListener('resize', () => this.resize());
  }

  materialColor(material) {
    const map = {
      'Bronce':   { color: 0xC8921A, roughness: 0.25, metalness: 0.85 },
      'Aluminio': { color: 0xC0C8D0, roughness: 0.2,  metalness: 0.9  },
      'Fierro':   { color: 0x6A7080, roughness: 0.4,  metalness: 0.8  },
      'Zamac':    { color: 0x909898, roughness: 0.3,  metalness: 0.75 },
    };
    return map[material] || { color: 0xA09080, roughness: 0.35, metalness: 0.7 };
  }

  buildMesh(shape, material) {
    const props = this.materialColor(material);
    const mat = new THREE.MeshStandardMaterial({
      color: props.color,
      roughness: props.roughness,
      metalness: props.metalness,
    });

    let geo;
    const group = new THREE.Group();

    if (shape === 'cylinder') {
      geo = new THREE.CylinderGeometry(0.5, 0.5, 1.4, 48);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      group.add(mesh);
      // Hole inside (buje / bocallave)
      const holeGeo = new THREE.CylinderGeometry(0.22, 0.22, 1.5, 32);
      const holeMat = new THREE.MeshStandardMaterial({ color: 0x222830, roughness: 0.8, metalness: 0.1 });
      group.add(new THREE.Mesh(holeGeo, holeMat));

    } else if (shape === 'ring') {
      // Torus = arandela / buje flat
      geo = new THREE.TorusGeometry(0.6, 0.18, 24, 64);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = Math.PI / 2;
      mesh.castShadow = true;
      group.add(mesh);

    } else if (shape === 'box') {
      // Cerradura — caja principal
      geo = new THREE.BoxGeometry(1.4, 0.9, 0.5);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      group.add(mesh);
      // Cilindro llave
      const cylGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.6, 24);
      const cyl = new THREE.Mesh(cylGeo, mat);
      cyl.rotation.z = Math.PI / 2;
      cyl.position.set(0, 0, 0.3);
      group.add(cyl);

    } else if (shape === 'oval') {
      // Asa — torus aplanado
      const torusGeo = new THREE.TorusGeometry(0.7, 0.12, 16, 64, Math.PI);
      const torus = new THREE.Mesh(torusGeo, mat);
      torus.rotation.x = Math.PI / 2;
      torus.castShadow = true;
      group.add(torus);
      // Placa base
      const plateGeo = new THREE.BoxGeometry(1.6, 0.1, 0.4);
      const plate = new THREE.Mesh(plateGeo, mat);
      plate.position.y = -0.7;
      group.add(plate);

    } else if (shape === 'bolt') {
      // Perno — cabeza hexagonal + cuerpo cilíndrico
      const headGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.3, 6);
      const head = new THREE.Mesh(headGeo, mat);
      head.position.y = 0.65;
      head.castShadow = true;
      group.add(head);
      const bodyGeo = new THREE.CylinderGeometry(0.2, 0.2, 1.4, 24);
      const body = new THREE.Mesh(bodyGeo, mat);
      body.castShadow = true;
      group.add(body);
      // Roscado (líneas)
      for (let i = -5; i <= 5; i++) {
        const rGeo = new THREE.TorusGeometry(0.21, 0.015, 8, 24);
        const r = new THREE.Mesh(rGeo, new THREE.MeshStandardMaterial({ color: 0x505870, roughness: 0.6, metalness: 0.5 }));
        r.rotation.x = Math.PI / 2;
        r.position.y = i * 0.12;
        if (Math.abs(r.position.y) < 0.7) group.add(r);
      }

    } else if (shape === 'gear') {
      // Engranaje — disco central + dientes
      const diskGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.22, 48);
      group.add(new THREE.Mesh(diskGeo, mat));
      // Agujero central
      const holeGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.25, 24);
      group.add(new THREE.Mesh(holeGeo, new THREE.MeshStandardMaterial({ color: 0x1A1A22, roughness: 0.8 })));
      // Dientes
      const nTeeth = 16;
      for (let i = 0; i < nTeeth; i++) {
        const angle = (i / nTeeth) * Math.PI * 2;
        const toothGeo = new THREE.BoxGeometry(0.12, 0.22, 0.14);
        const tooth = new THREE.Mesh(toothGeo, mat);
        tooth.position.set(Math.cos(angle) * 0.68, 0, Math.sin(angle) * 0.68);
        tooth.rotation.y = -angle;
        group.add(tooth);
      }
    } else {
      geo = new THREE.SphereGeometry(0.7, 32, 32);
      group.add(new THREE.Mesh(geo, mat));
    }

    return group;
  }

  animate() {
    this.animId = requestAnimationFrame(() => this.animate());
    if (this.autoRotate) this.spherical.theta += 0.005;

    const { r, theta, phi } = this.spherical;
    this.camera.position.set(
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.cos(theta)
    );
    this.camera.lookAt(0, 0, 0);
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    const W = this.canvas.clientWidth;
    const H = this.canvas.clientHeight;
    this.camera.aspect = W / H;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(W, H);
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
    this.renderer.dispose();
  }

  resetView() {
    this.spherical = { theta: Math.PI / 4, phi: Math.PI / 3, r: 5 };
    this.autoRotate = true;
  }

  toggleAutoRotate() {
    this.autoRotate = !this.autoRotate;
    return this.autoRotate;
  }

  setWireframe(val) {
    this.mesh.traverse(c => { if (c.isMesh) c.material.wireframe = val; });
  }

  explodeView(val) {
    // expand children slightly
    let i = 0;
    this.mesh.children.forEach(c => {
      if (c.isMesh) {
        const dir = c.position.clone().normalize();
        if (dir.length() < 0.01) dir.set(0, 1, 0);
        c.position.copy(dir.multiplyScalar(val ? i * 0.4 : 0));
        i++;
      }
    });
  }
}
