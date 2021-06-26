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
    <h2>Кнопка с иконкой</h2>
    <base-button danger>
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16"
          role="img"
          aria-label="Warning:"
        >
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </svg>
      </template>
      <template #default>Кнопка с иконкой</template>
    </base-button>
    <highlight-code lang="vue">
      <pre>
        &lt;base-button danger&gt;
          &lt;template #icon&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;18&quot; height=&quot;18&quot; fill=&quot;currentColor&quot; class=&quot;bi bi-exclamation-triangle-fill flex-shrink-0 me-2&quot; viewBox=&quot;0 0 16 16&quot; role=&quot;img&quot; aria-label=&quot;Warning:&quot;&gt;
              &lt;path d=&quot;M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z&quot;/&gt;
            &lt;/svg&gt;
          &lt;/template&gt;
          &lt;template #default&gt;Кнопка с иконкой&lt;/template&gt;
        &lt;/base-button&gt;
      </pre>
    </highlight-code>
    <h2>Loading кнопка</h2>
    <base-button loading primary>
      <template #icon>:)</template>
      <template #default>Loading кнопка</template>
    </base-button>
    <highlight-code lang="vue">
      <pre>
        &lt;base-button loading primary&gt;
          &lt;template #icon&gt;:)&lt;/template&gt;
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
