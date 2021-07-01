import { shallowMount, createLocalVue } from "@vue/test-utils";
import BaseButton from "@/components/BaseButton";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

const buttonText = "Текст кнопки";

const factory = (props = {}) => {
  return shallowMount(BaseButton, {
    slots: {
      default: buttonText,
      icon: "=)",
    },
    propsData: {
      ...props,
    },
    localVue,
  });
};

describe("BaseButton.vue", () => {
  it("У компонента кнопки верное название BaseButton", () => {
    const wrapper = factory();
    expect(wrapper.vm.$options.name).toMatch("BaseButton");
  });
  it("Кнопка содержит установленный текст", () => {
    const wrapper = factory();
    expect(wrapper.text()).toMatch(buttonText);
  });
  it("В кнопке отображается обертка для иконки и сама иконка", () => {
    const wrapper = factory();
    expect(wrapper.text()).toMatch("=)");
    expect(wrapper.find(".btn__icon").exists()).toBe(true);
  });
  it("У кнопки меняется класс при смене props primary", () => {
    const wrapper = factory({ primary: true });
    expect(wrapper.classes()).toContain("btn--primary");
  });
  it("У кнопки меняется класс при смене props secondary", () => {
    const wrapper = factory({ secondary: true });
    expect(wrapper.classes()).toContain("btn--secondary");
  });
  it("У кнопки меняется тип при изменении props type", () => {
    const wrapper = factory({ type: "submit" });
    expect(wrapper.attributes("type")).toBe("submit");
  });
  it("Кнопка не активна при props disabled", () => {
    const wrapper = factory({ disabled: true });
    expect(wrapper.attributes("disabled")).toBe("disabled");
    expect(wrapper.classes()).toContain("btn--disabled");
  });
  it("Кнопка не активна при props loading и у неё есть класс btn--loading", () => {
    const wrapper = factory({ loading: true });
    expect(wrapper.classes()).toContain("btn--disabled");
    expect(wrapper.classes()).toContain("btn--loading");
  });
});
