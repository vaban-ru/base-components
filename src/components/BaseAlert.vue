<template>
  <div :class="alertClass">
    <div v-if="hasIconSlot" class="alert__icon">
      <slot name="icon" />
    </div>
    <div v-if="hasTitleSlot" class="alert__title">
      <slot name="title" />
    </div>
    <div class="alert__body">
      <slot />
    </div>
    <div v-if="hasFooterSlot" class="alert__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseAlert",
  props: {
    /**
     * Пропсы для классов
     */
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /**
     * Проверка на наличие слота title
     * @returns {boolean}
     */
    hasTitleSlot() {
      return !!this.$slots.title;
    },
    /**
     * Проверка на наличие слота footer
     * @returns {boolean}
     */
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
    /**
     * Проверка на наличие слота icon
     * @returns {boolean}
     */
    hasIconSlot() {
      return !!this.$slots.icon;
    },
    /**
     * Возвращает список классов исходя из прокинутых пропсов
     * @returns {[string, {"alert--success": Boolean, "alert--secondary": Boolean, "alert--primary": Boolean, "alert--danger": Boolean}]}
     */
    alertClass() {
      return [
        "alert",
        {
          "alert--primary": this.primary,
          "alert--secondary": this.secondary,
          "alert--success": this.success,
          "alert--danger": this.danger,
          "alert--center": this.center,
          "alert--icon": this.hasIconSlot,
        },
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.alert {
  position: relative;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #fdfdfe;
  border-radius: 8px;
  color: #636464;
  background-color: #fefefe;
  font-size: 16px;

  &__title {
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 16px;
    margin-top: 0;
    line-height: 1.2;
  }

  &__footer {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid currentColor;
  }

  &--icon {
    display: grid;
    grid-template-columns: 24px auto;
    column-gap: 16px;
    align-items: center;
  }

  &--center {
    text-align: center;
  }

  &--primary {
    color: #084298;
    background-color: #cfe2ff;
    border-color: #b6d4fe;
  }
  &--secondary {
    color: #41464b;
    background-color: #e2e3e5;
    border-color: #d3d6d8;
  }
  &--success {
    color: #0f5132;
    background-color: #d1e7dd;
    border-color: #badbcc;
  }
  &--danger {
    color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7;
  }
}
</style>
