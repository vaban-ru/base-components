<template>
  <component
    :class="buttonClass"
    :target="targetBlank"
    :href="href"
    :type="buttonType"
    :is="component"
    :disabled="disabled"
  >
    <div class="btn__icon" v-if="hasIconSlot">
      <slot name="icon" />
    </div>
    <slot />
  </component>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    /**
     * Тип кнопки
     * button, submit
     */
    type: {
      type: String,
      default: "button",
    },
    /**
     * Является ли кнопка ссылкой
     */
    link: {
      type: Boolean,
      default: false,
    },
    /**
     * Какой тег использовать если кнопка становится ссылкой
     */
    linkTag: {
      type: String,
      default: "a",
    },
    /**
     * URL ссылки
     */
    href: {
      type: String,
      default: null,
    },
    /**
     * Открывать ссылку в новой вкладке
     */
    blank: {
      type: Boolean,
      default: false,
    },
    /**
     * Кнопка неактивна
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Флаг отображения загрузчика
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * Пропсы для классов кнопки
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
    outline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /**
     * Возвращает список классов для кнопки/ссылки
     */
    buttonClass() {
      return [
        "btn",
        {
          "btn--disabled": this.disabled || this.loading,
          "btn--primary": this.primary,
          "btn--secondary": this.secondary,
          "btn--success": this.success,
          "btn--danger": this.danger,
          "btn--outline": this.outline,
          "btn--loading": this.loading,
        },
      ];
    },
    /**
     * Возвращает типа компонента: кнопка или ссылка
     * @returns {string}
     */
    component() {
      return this.link ? this.linkTag : "button";
    },
    /**
     * Возвращает тип кнопки или false для скрытия атрибута
     * @returns {String|boolean}
     */
    buttonType() {
      return !this.link ? this.type : false;
    },
    /**
     * Возвращает строку для открытия ссылки в новой вкладке или false для скрытия атрибута
     * @returns {string|boolean}
     */
    targetBlank() {
      return this.blank ? "_blank" : false;
    },
    /**
     * Наличие контента в слоте icon
     * @returns {boolean}
     */
    hasIconSlot() {
      return !!this.$slots.icon;
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  color: #000000;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: #fbfbfb;
  border: 1px solid transparent;
  padding: 11px 15px;
  font-size: 14px;
  height: 45px;
  min-width: 150px;
  transition: background-color 0.4s ease, color 0.4s ease;
  border-radius: 8px;
  text-decoration: none;
  line-height: normal;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  &:hover {
    background-color: #000000;
    border-color: #000000;
    color: #ffffff;
  }

  &--loading {
    .btn__icon {
      animation: rotate 2s linear infinite;
    }
  }

  &--disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  &--primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;

    &:hover {
      color: #fff;
      background-color: #0b5ed7;
      border-color: #0a58ca;
    }
  }

  &--secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;

    &:hover {
      color: #fff;
      background-color: #5c636a;
      border-color: #565e64;
    }
  }

  &--success {
    color: #fff;
    background-color: #198754;
    border-color: #198754;

    &:hover {
      color: #fff;
      background-color: #157347;
      border-color: #146c43;
    }
  }

  &--danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;

    &:hover {
      color: #fff;
      background-color: #bb2d3b;
      border-color: #b02a37;
    }
  }

  &--outline {
    color: #000;
    background-color: transparent;
    border-color: #000;

    &:hover {
      background-color: #000000;
      color: #ffffff;
    }

    &.btn--primary {
      color: #0d6efd;
      background-color: transparent;
      border-color: #0d6efd;

      &:hover {
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca;
      }
    }

    &.btn--secondary {
      color: #6c757d;
      background-color: transparent;
      border-color: #6c757d;

      &:hover {
        color: #fff;
        background-color: #5c636a;
        border-color: #565e64;
      }
    }

    &.btn--success {
      color: #198754;
      background-color: transparent;
      border-color: #198754;

      &:hover {
        color: #fff;
        background-color: #157347;
        border-color: #146c43;
      }
    }

    &.btn--danger {
      color: #dc3545;
      background-color: transparent;
      border-color: #dc3545;

      &:hover {
        color: #fff;
        background-color: #bb2d3b;
        border-color: #b02a37;
      }
    }
  }

  &__icon {
    margin-right: 8px;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
