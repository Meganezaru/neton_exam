import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { calc_max_value } from "./main.ts";

Deno.test("Wに収まる品物が無い", () =>{
  const limit_weight = 1;
  const weight = [10, 10];
  const value = [20, 30];
  assertEquals(calc_max_value(limit_weight, weight, value), 0);
});

Deno.test("Wに収まる品物が1つだけある", () =>{
  const limit_weight = 10;
  const weight = [10, 10];
  const value = [20, 30];
  assertEquals(calc_max_value(limit_weight, weight, value), 30);
});

Deno.test("Wに収まる品物が複数ある", () =>{
  const limit_weight = 15;
  const weight = [10, 10, 5];
  const value = [20, 30, 10];
  assertEquals(calc_max_value(limit_weight, weight, value), 40);
});

Deno.test("Wに収まる品物の組み合わせが複数ある", () =>{
  const limit_weight = 15;
  const weight = [10, 10, 5, 15];
  const value = [20, 30, 10, 50];
  assertEquals(calc_max_value(limit_weight, weight, value), 50);
});

Deno.test("すべての商品がWに収まる", () =>{
  const limit_weight = 10000;
  const weight = [10, 10, 5, 15];
  const value = [20, 30, 10, 50];
  assertEquals(calc_max_value(limit_weight, weight, value), 110);
});

Deno.test("商品が100個ある", () =>{
  const limit_weight = 10000;
  const weight: Array<number> = Array(100);
  weight.fill(1000);
  const value: Array<number> = Array(100);
  value.fill(1000);
  assertEquals(calc_max_value(limit_weight, weight, value), 10000);
});

Deno.test("追加テストパターン1", () =>{
  const limit_weight = 55;
  const weight: Array<number> = [...Array(100)].map((_, index) => (index + 1));
  const value: Array<number> =  [...Array(100)].map((_, index) => (index + 1));
  assertEquals(calc_max_value(limit_weight, weight, value), 55);
});

Deno.test("追加テストパターン2", () =>{
  const limit_weight = 55;
  const weight: Array<number> = [...Array(100)].map((_, index) => (index + 1));
  const value: Array<number> =  [...Array(100)].map((_, index) => (index * 2));
  assertEquals(calc_max_value(limit_weight, weight, value), 108);
});