<template>
  <div :class="inputClass">
    <div class="input__wrapper">
      <label v-if="label" class="input__label"
        >{{ label }} <span v-if="required">*</span></label
      >
      <input
        class="input__field"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        :value="value"
        @focus="focused = true"
        @blur="focused = false"
        @input="$emit('input', $event.target.value)"
        @change="$emit('change', $event.target.value)"
      />
    </div>
    <div v-if="error.status && error.text" class="input__error">
      {{ error.text }}
    </div>
    <p v-if="description" class="input__description">
      {{ description }}
    </p>
  </div>
</template>
<script>
export default {
  name: "BaseInput",
  props: {
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    error: {
      type: Object,
      default: () => ({}),
    },
    description: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    focused: false,
  }),
  computed: {
    inputClass() {
      return [
        "input",
        {
          "input--error": this.error.status,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  margin-bottom: 16px;
  &__label {
    font-size: 16px;
    line-height: 1;
    color: #09101d;
    display: inline-block;
    transition: color 0.4s ease;
    margin-bottom: 12px;
  }
  &__field {
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 12px;
    font-size: 16px;
    line-height: 1;
    color: #000000;
    background-color: #fff;
    background-clip: padding-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid #858c94;
    border-radius: 8px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &::placeholder {
      color: #cccccc;
      opacity: 1;
    }
    &:disabled {
      background-color: rgb(202 202 202 / 30%);
      border-color: rgba(118, 118, 118, 0.3);
    }
    &:focus {
      outline: none;
    }
  }
  &__description {
    font-size: 14px;
    margin-top: 8px;
    color: #6c757d;
  }
  &__error {
    color: red;
    font-size: 14px;
    margin-top: 8px;
  }
  &--error {
    .input__label {
      color: red;
    }
    .input__field {
      border-color: red;
    }
  }
}
</style>
