import { PI } from "mathjs";

function calculateCylinderVolume(radius: number, height: number): number {
    return Math.PI * radius ** 2 * height;
}

console.log(calculateCylinderVolume(5, 10));
