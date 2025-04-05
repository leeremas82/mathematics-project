import { sqrt } from "mathjs";

function calculateHypotenuse(side1: number, side2: number): number {
  return sqrt(square(side1) + square(side2));
}

function square(number: number): number {
  return number * number;
}
