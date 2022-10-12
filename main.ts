export function add(a: number, b: number): number {
  return a + b;
}

export function calc_max_value(limit_weight: number, weight: number[], value: number[]): number {
  const item_count = weight.length;
  function calc_value(limit_weight: number, index: number): number {
    if (item_count <= index) {
      // 商品をすべて確認した
      return 0
    }

    if (limit_weight < weight[index]) {
      return calc_value(limit_weight, index + 1);
    } else {
      return Math.max(
        value[index] + calc_value(limit_weight - weight[index], index + 1),
        calc_value(limit_weight, index + 1)
      )
    }
  }

  return calc_value(limit_weight, 0);
} 

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
