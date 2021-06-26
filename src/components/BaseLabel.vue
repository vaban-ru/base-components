<template>
  <div :class="labelClass">
    <span v-if="hasIconSlot" class="label__icon">
      <slot name="icon" />
    </span>
    <span><slot /></span>
  </div>
</template>

<script>
export default {
  name: "BaseLabel",
  props: {
    /**
     * Пропсы для классов лейбла
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
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /**
     * Возвращает список классов
     */
    labelClass() {
      return [
        "label",
        {
          "label--primary": this.primary,
          "label--secondary": this.secondary,
          "label--success": this.success,
          "label--danger": this.danger,
          "label--rounded": this.rounded,
        },
      ];
    },
    /**
     * Наличие слота с иконкой
     * @returns {boolean}
     */
    hasIconSlot() {
      return !!this.$slots.icon;
    },
  },
};
</script>

<style lang="scss">
.label {
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  background-color: #f8f9fa;
  color: #212529;
  font-size: 10px;
  font-weight: bold;
  line-height: 1;
  padding: 8px;

  &--primary {
    background-color: #0d6efd;
    color: #ffffff;
  }
  &--secondary {
    background-color: #6c757d;
    color: #ffffff;
  }
  &--success {
    background-color: #198754;
    color: #ffffff;
  }
  &--danger {
    background-color: #dc3545;
    color: #ffffff;
  }
  &--rounded {
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
  }

  &__icon {
    margin-right: 8px;

    svg,
    path {
      fill: currentColor;
    }
  }
}
</style>
