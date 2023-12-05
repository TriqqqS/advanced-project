import { classNames } from "./classNames";

describe("classNames", () => {
  test("one argument", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("three arguments (mods: 2 true)", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: true }, ["class1", "class2"])
    ).toBe("someClass class1 class2 hovered scrollable");
  });

  test("three arguments (mods: 1 true, 1 false)", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: false }, ["class1", "class2"])
    ).toBe("someClass class1 class2 hovered");
  });

  test("three arguments (mods: 1 true, 1 undefined)", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: undefined }, ["class1", "class2"])
    ).toBe("someClass class1 class2 hovered");
  });
});
