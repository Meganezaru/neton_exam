import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { add, calc_max_value } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test("Wに収まる品物が無い", () =>{
  const limit_weight = 1;
  const weight = [10, 10];
  const value = [20, 30];
  assertEquals(calc_max_value(limit_weight, weight, value), 0);
});