import * as THREE from "three";

export const GLOBE_RADIUS = 2;

/** Camera faces the Saudi Arabia → UAE → India corridor; Jeddah near visual center */
export const INITIAL_VIEW_LAT = 21;
export const INITIAL_VIEW_LNG = 54;
export const INITIAL_CAMERA_DISTANCE = 5.95;

/** Shift globe mesh right and slightly down inside the canvas */
export const GLOBE_SCENE_OFFSET_X = 1.05;
export const GLOBE_SCENE_OFFSET_Y = -0.28;

export function latLngToVector3(
  lat: number,
  lng: number,
  radius: number = GLOBE_RADIUS
): THREE.Vector3 {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

export function createArcPoints(
  startLat: number,
  startLng: number,
  endLat: number,
  endLng: number,
  segments = 64,
  altitude = 0.35
): THREE.Vector3[] {
  const start = latLngToVector3(startLat, startLng, GLOBE_RADIUS);
  const end = latLngToVector3(endLat, endLng, GLOBE_RADIUS);
  const points: THREE.Vector3[] = [];

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const point = start.clone().lerp(end, t);
    const scale = GLOBE_RADIUS + altitude * Math.sin(t * Math.PI);
    points.push(point.normalize().multiplyScalar(scale));
  }

  return points;
}
