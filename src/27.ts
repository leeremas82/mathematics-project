function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  let previous = 0;
  let current = 1;
  for (let i = 2; i < n; i++) {
    [previous, current] = [current, previous + current];
  }
  return current;
}
