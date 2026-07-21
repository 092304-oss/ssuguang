/* 溯光 v4 — 交互式 3D 粒子蝴蝶（精细版）
   真实翼形（前翅尖 / 后翅圆 + 小尾突）+ 翅斑 + 身体 + 触角 + 漂浮尘。
   蓝→紫渐变，扇翅 / 呼吸 / 鼠标 3D 倾斜 + 涟漪排斥 + 星尘闪烁。 */
(function () {
  if (!window.THREE) return;
  const host = document.getElementById("hero-canvas");
  if (!host) return;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  // ---------- 生成粒子 ----------
  // type: 0 翅膜  1 翅斑  2 身体  3 触角  4 漂浮尘
  const COUNT = 12000;
  const base = new Float32Array(COUNT * 3);
  const rand = new Float32Array(COUNT);
  const wing = new Float32Array(COUNT);
  const type = new Float32Array(COUNT);
  const cmix = new Float32Array(COUNT);  // 0 翅根 -> 1 翅缘

  // 椭圆翼瓣：直接落在给定中心，向外渐尖
  function lobe(cx, cy, rx, ry, tilt) {
    const r = Math.sqrt(Math.random());
    const a = Math.random() * Math.PI * 2;
    let lx = Math.cos(a) * rx * r;
    let ly = Math.sin(a) * ry * r;
    lx *= (0.62 + 0.5 * r);              // 外缘拉尖
    const cs = Math.cos(tilt), sn = Math.sin(tilt);
    return [cx + lx * cs - ly * sn, cy + lx * sn + ly * cs, r];
  }

  let i3 = 0;
  for (let i = 0; i < COUNT; i++) {
    const s = Math.random();
    let x, y, t, mix, z, q;
    if (s < 0.24) {            // 上左翼（大）
      q = lobe(-1.25, 0.66, 1.30, 1.00, 0.44); x = q[0]; y = q[1];
      t = 0; z = (Math.random()-0.5)*0.5;
    } else if (s < 0.48) {     // 上右翼
      q = lobe(1.25, 0.66, 1.30, 1.00, -0.44); x = q[0]; y = q[1];
      t = 0; z = (Math.random()-0.5)*0.5;
    } else if (s < 0.635) {    // 下左翼（小、带尾突）
      q = lobe(-0.98, -0.92, 0.90, 1.02, -0.30); x = q[0]; y = q[1];
      t = 0; z = (Math.random()-0.5)*0.5;
    } else if (s < 0.79) {     // 下右翼
      q = lobe(0.98, -0.92, 0.90, 1.02, 0.30); x = q[0]; y = q[1];
      t = 0; z = (Math.random()-0.5)*0.5;
    } else if (s < 0.87) {     // 翅斑（四个眼斑）
      const sx = Math.random()<0.5 ? -1 : 1;
      const up = Math.random()<0.5;
      const cx = sx * (up ? 1.55 : 1.15);
      const cy = up ? 1.15 : -1.35;
      const rr = Math.sqrt(Math.random());
      const a = Math.random()*Math.PI*2;
      x = cx + Math.cos(a)*0.26*rr; y = cy + Math.sin(a)*0.26*rr;
      t = 1; mix = 1.0; z = (Math.random()-0.5)*0.4 + 0.08;
    } else if (s < 0.925) {    // 身体（纺锤）
      const ty = Math.random();
      const w = Math.sin(ty*Math.PI) * 0.15 + 0.03;
      x = (Math.random()-0.5) * 2 * w;
      y = -1.35 + ty * 2.7;
      t = 2; mix = 0.0; z = (Math.random()-0.5)*0.2;
    } else if (s < 0.95) {     // 触角（曲线 + 末端棒槌）
      const tt = Math.random();
      const sgn = Math.random()<0.5 ? -1 : 1;
      const bend = Math.sin(tt*1.5)*0.5;
      x = sgn*(0.04 + bend);
      y = 1.35 + tt*0.85;
      if (tt > 0.85) { x += sgn*0.07; y += 0.02; }
      t = 3; mix = 1.0; z = (Math.random()-0.5)*0.15;
    } else {                   // 漂浮星尘
      const a = Math.random()*Math.PI*2;
      const rr = 2.0 + Math.random()*3.2;
      x = Math.cos(a)*rr; y = Math.sin(a)*rr*0.8 + 0.1;
      t = 4; mix = Math.random(); z = (Math.random()-0.5)*1.8;
    }
    if (t === 0) { mix = Math.min(1.0, (q[2]*0.35 + Math.hypot(x, y)/2.6)); }
    base[i3] = x; base[i3+1] = y + 0.05; base[i3+2] = z;
    rand[i] = Math.random();
    wing[i] = x >= 0 ? 1 : -1;
    type[i] = t; cmix[i] = mix;
    i3 += 3;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(base.slice(), 3));
  geo.setAttribute("aBase", new THREE.BufferAttribute(base, 3));
  geo.setAttribute("aRand", new THREE.BufferAttribute(rand, 1));
  geo.setAttribute("aWing", new THREE.BufferAttribute(wing, 1));
  geo.setAttribute("aType", new THREE.BufferAttribute(type, 1));
  geo.setAttribute("aMix", new THREE.BufferAttribute(cmix, 1));

  const uniforms = {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector3(999, 999, 0) },
    uSize: { value: 16.0 * Math.min(window.devicePixelRatio, 2) },
    uColRoot: { value: new THREE.Color("#1b3fb0") }, // 翅根深蓝
    uColMid:  { value: new THREE.Color("#6a2fd6") }, // 翅面紫
    uColEdge: { value: new THREE.Color("#b98cff") }, // 翅缘亮紫
    uColSpot: { value: new THREE.Color("#8fe0ff") }, // 翅斑冰蓝
    uColBody: { value: new THREE.Color("#122a66") }, // 身体深
  };

  const vert = `
    uniform float uTime; uniform vec3 uMouse; uniform float uSize;
    attribute vec3 aBase; attribute float aRand; attribute float aWing;
    attribute float aType; attribute float aMix;
    varying float vMix; varying float vType; varying float vGlow; varying float vTw;
    void main() {
      vec3 p = aBase;
      // 扇翅仅作用于翅膜(0)与翅斑(1)
      if (aType < 1.5) {
        float flap = sin(uTime * 2.4) * 0.55 * (0.25 + abs(p.x));
        float ang = flap * aWing;
        float cs = cos(ang), sn = sin(ang);
        float nx = p.x * cs - p.z * sn;
        float nz = p.x * sn + p.z * cs;
        p.x = nx; p.z = nz;
      }
      // 漂浮尘缓慢环绕上浮
      if (aType > 3.5) {
        p.x += sin(uTime * 0.5 + aRand * 6.28) * 0.4;
        p.y += cos(uTime * 0.4 + aRand * 6.28) * 0.4 + sin(uTime*0.2)*0.1;
      }
      // 整体呼吸
      p.y += sin(uTime * 1.2 + aRand * 6.28) * 0.05;
      // 鼠标涟漪排斥
      float d = distance(p.xy, uMouse.xy);
      float infl = smoothstep(2.0, 0.0, d);
      vec2 dir = normalize(p.xy - uMouse.xy + 0.0001);
      p.xy += dir * infl * 1.0;
      p.z += infl * 0.6;
      vGlow = infl;
      vMix = aMix; vType = aType;
      vTw = 0.5 + 0.5 * sin(uTime * 3.0 + aRand * 30.0);
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      float sz = uSize;
      if (aType > 3.5) sz *= 0.55 * (0.5 + vTw);      // 尘更小并闪
      if (aType > 0.5 && aType < 1.5) sz *= 1.25;      // 翅斑略大
      gl_PointSize = sz * (1.0 + vGlow * 1.4) * (1.0 / -mv.z);
      gl_Position = projectionMatrix * mv;
    }`;

  const frag = `
    precision mediump float;
    uniform vec3 uColRoot; uniform vec3 uColMid; uniform vec3 uColEdge;
    uniform vec3 uColSpot; uniform vec3 uColBody;
    varying float vMix; varying float vType; varying float vGlow; varying float vTw;
    void main() {
      vec2 c = gl_PointCoord - 0.5;
      float dd = length(c);
      if (dd > 0.5) discard;
      float alpha = smoothstep(0.5, 0.06, dd);
      vec3 col;
      if (vType < 0.5) {                 // 翅膜：根->面->缘
        col = mix(uColRoot, uColMid, smoothstep(0.0, 0.6, vMix));
        col = mix(col, uColEdge, smoothstep(0.72, 1.0, vMix));
      } else if (vType < 1.5) {          // 翅斑
        col = uColSpot;
      } else if (vType < 2.5) {          // 身体
        col = uColBody;
      } else if (vType < 3.5) {          // 触角
        col = uColEdge;
      } else {                           // 漂浮尘
        col = mix(uColSpot, uColEdge, vMix);
        alpha *= 0.5 + vTw * 0.5;
      }
      col = mix(col, uColEdge, vGlow * 0.5);
      float a = alpha * (vType > 3.5 ? 0.7 : 0.95);
      gl_FragColor = vec4(col, a);
    }`;

  const mat = new THREE.ShaderMaterial({
    uniforms, vertexShader: vert, fragmentShader: frag,
    transparent: true, depthWrite: false, blending: THREE.NormalBlending,
  });
  const points = new THREE.Points(geo, mat);
  points.scale.setScalar(1.25);
  scene.add(points);

  // 极淡紫色柔光衬底
  const glowGeo = new THREE.PlaneGeometry(6, 6);
  const glowMat = new THREE.MeshBasicMaterial({
    transparent: true, depthWrite: false, blending: THREE.NormalBlending, opacity: 0.16,
    map: makeGlowTexture(),
  });
  const glow = new THREE.Mesh(glowGeo, glowMat);
  glow.position.z = -1.5;
  scene.add(glow);
  function makeGlowTexture() {
    const c = document.createElement("canvas"); c.width = c.height = 256;
    const g = c.getContext("2d");
    const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    grd.addColorStop(0, "rgba(150,120,255,0.5)");
    grd.addColorStop(0.45, "rgba(120,90,220,0.2)");
    grd.addColorStop(1, "rgba(120,90,220,0)");
    g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }

  // ---------- 鼠标交互 ----------
  const target = { rx: 0, ry: 0 }, cur = { rx: 0, ry: 0 };
  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const ndc = new THREE.Vector2(2, 2);
  const hit = new THREE.Vector3(999, 999, 0);
  function onMove(clientX, clientY) {
    const r = renderer.domElement.getBoundingClientRect();
    if (clientX < r.left || clientX > r.right) { uniforms.uMouse.value.set(999, 999, 0); }
    const x = (clientX - r.left) / r.width;
    const y = (clientY - r.top) / r.height;
    target.ry = (x - 0.5) * 0.8;
    target.rx = (y - 0.5) * -0.6;
    ndc.set(x * 2 - 1, -(y * 2 - 1));
    raycaster.setFromCamera(ndc, camera);
    raycaster.ray.intersectPlane(plane, hit);
    if (clientX >= r.left && clientX <= r.right) uniforms.uMouse.value.copy(hit);
  }
  window.addEventListener("pointermove", (e) => onMove(e.clientX, e.clientY));
  window.addEventListener("pointerleave", () => uniforms.uMouse.value.set(999, 999, 0));

  function resize() {
    const w = host.clientWidth || window.innerWidth;
    const h = host.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    // 文字在右 → 蝴蝶推到左侧；窄屏居中
    const off = w > 940 ? -0.3 : 0;
    points.position.x = off;
    glow.position.x = off;
  }
  window.addEventListener("resize", resize);
  resize();

  const clock = new THREE.Clock();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function loop() {
    const t = clock.getElapsedTime();
    uniforms.uTime.value = t;
    cur.rx += (target.rx - cur.rx) * 0.05;
    cur.ry += (target.ry - cur.ry) * 0.05;
    points.rotation.x = cur.rx;
    points.rotation.y = cur.ry + (reduce ? 0 : Math.sin(t * 0.15) * 0.12);
    glow.rotation.z = t * 0.03;
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }
  loop();
})();
