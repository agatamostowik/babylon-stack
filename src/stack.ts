import { MeshBuilder, StandardMaterial, Color3 } from "@babylonjs/core";
import { ExerciseBase } from "./common/ExerciseBase";

export class Stack extends ExerciseBase {
  override addContent(): void {
    const stackSize = 10;

    const boxWidth = 1.5;
    const boxHeight = 0.3;
    const boxDepth = 1.5;

    const colors = [
      new Color3(1, 0, 0),
      new Color3(0, 1, 0),
      new Color3(0, 0, 1),
      new Color3(1, 1, 0),
      new Color3(1, 0, 1),
    ];

    [...Array(stackSize)].map((_, i) => {
      const box = MeshBuilder.CreateBox(
        "box" + i,
        { width: boxWidth, height: boxHeight, depth: boxDepth },
        this.scene
      );

      const myMaterial = new StandardMaterial("mat" + i, this.scene);

      const color = colors[i % colors.length];
      myMaterial.diffuseColor = color;
      box.material = myMaterial;

      box.position.y = (i + 0.5) * boxHeight;

      box.rotation.y = Math.random() * Math.PI * 2;

      return box;
    });
  }
}
