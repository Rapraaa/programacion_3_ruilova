import { describe, it, expect } from "vitest";

describe("toBe vs toEqual", () => {
  it("toBe usa === : ideal para primitivos", () => {
    expect("Rex").toBe("Rex");
    expect(24.5).toBe(24.5);
  });

  it("toEqual compara la estructura recursivamente", () => {
    expect({ id: "1", mascota: "Rex" }).toEqual({ id: "1", mascota: "Rex" });
  });
});
