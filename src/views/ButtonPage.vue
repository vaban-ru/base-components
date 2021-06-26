<template>
  <div class="page">
    <h1>
      <a
        href="https://github.com/webzlodimir/base-components/blob/master/src/components/BaseButton.vue"
        target="_blank"
        >Кнопка</a
      >
    </h1>
    <h2>С заливкой</h2>
    <div class="grid">
      <base-button>Стандартная кнопка</base-button>
      <base-button primary>Primary кнопка</base-button>
      <base-button secondary>Secondary кнопка</base-button>
      <base-button success>Success кнопка</base-button>
      <base-button danger>Danger кнопка</base-button>
    </div>
    <highlight-code lang="vue">
      <pre>
        &lt;base-button&gt;Стандартная кнопка&lt;/base-button&gt;
        &lt;base-button primary&gt;Primary кнопка&lt;/base-button&gt;
        &lt;base-button secondary&gt;Secondary кнопка&lt;/base-button&gt;
        &lt;base-button success&gt;Success кнопка&lt;/base-button&gt;
        &lt;base-button danger&gt;Danger кнопка&lt;/base-button&gt;
      </pre>
    </highlight-code>
    <h2>Outline кнопки</h2>
    <div class="grid">
      <base-button outline>Стандартная кнопка</base-button>
      <base-button primary outline>Primary кнопка</base-button>
      <base-button secondary outline>Secondary кнопка</base-button>
      <base-button success outline>Success кнопка</base-button>
      <base-button danger outline>Danger кнопка</base-button>
    </div>
    <highlight-code lang="vue">
      <pre>
        &lt;base-button outline&gt;Стандартная кнопка&lt;/base-button&gt;
        &lt;base-button primary outline&gt;Primary кнопка&lt;/base-button&gt;
        &lt;base-button secondary outline&gt;Secondary кнопка&lt;/base-button&gt;
        &lt;base-button success outline&gt;Success кнопка&lt;/base-button&gt;
        &lt;base-button danger outline&gt;Danger кнопка&lt;/base-button&gt;
      </pre>
    </highlight-code>
    <h2>Неактивная кнопка</h2>
    <base-button primary disabled>Неактивная кнопка</base-button>
    <highlight-code lang="vue">
      <pre>
        &lt;base-button primary disabled&gt;Неактивная кнопка&lt;/base-button&gt;
      </pre>
    </highlight-code>
    <h2>Кнопка-ссылка</h2>
    <base-button href="https://google.com/" link blank primary
      >Кнопка-ссылка</base-button
    >
    <highlight-code lang="vue">
      <pre>
        &lt;base-button href=&quot;https://google.com/&quot; link blank primary&gt;Кнопка-ссылка&lt;/base-button&gt;
      </pre>
    </highlight-code>
    <h2>Loading кнопка</h2>
    <base-button loading primary>
      <template #loader>:)</template>
      <template #default>Loading кнопка</template>
    </base-button>
    <highlight-code lang="vue">
      <pre>
        &lt;base-button loading primary&gt;
          &lt;template #loader&gt;:)&lt;/template&gt;
          &lt;template #default&gt;Loading кнопка&lt;/template&gt;
        &lt;/base-button&gt;
      </pre>
    </highlight-code>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
export default {
  name: "ButtonPage",
  components: { BaseButton },
  created() {
    document.title = "Кнопка";
  },
};
</script>

<style lang="scss">
.grid {
  display: flex;

  .btn + .btn {
    margin-left: 8px;
  }
}
</style>
