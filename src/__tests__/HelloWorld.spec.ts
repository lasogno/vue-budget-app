import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CategoryView from "../views/CategoryView.vue";

describe("Categoty", () => {
  it("renders properly", () => {
    const wrapper = mount(CategoryView);
    expect(wrapper.text()).toContain("Add a new category");
  });
});
