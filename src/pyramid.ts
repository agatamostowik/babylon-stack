import { MeshBuilder, StandardMaterial, Color3 } from "@babylonjs/core";
import { ExerciseBase } from "./common/ExerciseBase";

const colors = [
  new Color3(0, 0, 1),
  new Color3(1, 0, 0),
  new Color3(1, 1, 0),
  new Color3(1, 0, 1),
];

export class Pyramid extends ExerciseBase {
  override addContent(): void {
    const size = 4;
    const y = 0;
    const z = 0;

    const build = (size: number, y: number, z: number, colorIndex: number) => {
      if (size === 0) {
        return;
      }

      const myMaterial = new StandardMaterial("mat" + colorIndex, this.scene);
      myMaterial.diffuseColor = colors[colorIndex % colors.length];

      [...Array(size)].forEach((_, i) => {
        [...Array(size)].forEach((_, j) => {
          const sphere = MeshBuilder.CreateSphere("sphere" + i, {
            diameter: 1,
            segments: 32,
          });
          sphere.position.y = y;
          sphere.position.x = i + z;
          sphere.position.z = j + z;
          sphere.material = myMaterial;
        });
      });

      build(size - 1, y + 0.75, z + 0.5, colorIndex + 1);
    };

    build(size, y, z, 0);
  }
}
