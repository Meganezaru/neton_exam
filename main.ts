export function add(a: number, b: number): number {
  return a + b;
}

export function calc_max_value(limit_weight: number, weight: number[], value: number[]): number {
  const item_count = weight.length;

  // 残り重量と残り商品数をインデックスにして結果をキャッシュ
  let cache: {[key: number]:{[key: number]: number}} = {};
  function calc_value(limit_weight: number, index: number): number {
    if (item_count <= index) {
      // 商品をすべて確認した
      return 0
    }

    if (limit_weight in cache && index in cache[limit_weight]) {
      return cache[limit_weight][index];
    }

    if (limit_weight < weight[index]) {
      return calc_value(limit_weight, index + 1);
    } else {
      const result = Math.max(
        value[index] + calc_value(limit_weight - weight[index], index + 1),
        calc_value(limit_weight, index + 1)
      )

      if (limit_weight in cache) {
        cache[limit_weight][index] = result;
      } else {
        cache[limit_weight] = {[index]: result};
      }
      return result;
    }
  }

  return calc_value(limit_weight, 0);
} 

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
