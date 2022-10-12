export function add(a: number, b: number): number {
  return a + b;
}

export function calc_max_value(limit_weight: number, weight: number[], value: number[]): number {
  return 0
} 

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
