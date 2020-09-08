// Types
import type { Sphere } from 'features/main/reducers/appDataReducer';

const replaceSphereInSpheres = (spheres: Sphere[], sphere: Sphere): Sphere[] =>
  spheres.map(
    (sphereItem: Sphere): Sphere =>
      sphereItem.sphereId === sphere.sphereId ? sphere : sphereItem
  );

export { replaceSphereInSpheres };
