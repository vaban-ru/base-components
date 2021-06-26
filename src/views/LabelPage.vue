<template>
  <div class="page">
    <h1>
      <a
        href="https://github.com/webzlodimir/base-components/blob/master/src/components/BaseLabel.vue"
        target="_blank"
        >Лейбл</a
      >
    </h1>
    <h2>Стандартный лейбл</h2>
    <div class="grid">
      <base-label>Стандартный лейбл</base-label>
      <base-label primary>Primary лейбл</base-label>
      <base-label secondary>Secondary лейбл</base-label>
      <base-label success>Success лейбл</base-label>
      <base-label danger>Danger лейбл</base-label>
    </div>
    <highlight-code lang="vue">
      <pre>
        &lt;base-label&gt;Стандартный лейбл&lt;/base-label&gt;
        &lt;base-label primary&gt;Primary лейбл&lt;/base-label&gt;
        &lt;base-label secondary&gt;Secondary лейбл&lt;/base-label&gt;
        &lt;base-label success&gt;Success лейбл&lt;/base-label&gt;
        &lt;base-label danger&gt;Danger лейбл&lt;/base-label&gt;
      </pre>
    </highlight-code>
    <h2>Скругленный лейбл</h2>
    <div class="grid">
      <base-label rounded>Стандартный лейбл</base-label>
      <base-label rounded primary>Primary лейбл</base-label>
      <base-label rounded secondary>Secondary лейбл</base-label>
      <base-label rounded success>Success лейбл</base-label>
      <base-label rounded danger>Danger лейбл</base-label>
    </div>
    <highlight-code lang="vue">
      <pre>
        &lt;base-label rounded&gt;Стандартный лейбл&lt;/base-label&gt;
        &lt;base-label rounded primary&gt;Primary лейбл&lt;/base-label&gt;
        &lt;base-label rounded secondary&gt;Secondary лейбл&lt;/base-label&gt;
        &lt;base-label rounded success&gt;Success лейбл&lt;/base-label&gt;
        &lt;base-label rounded danger&gt;Danger лейбл&lt;/base-label&gt;
      </pre>
    </highlight-code>
    <h2>Лейбл с иконкой</h2>
    <base-label>
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
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
      Лейбл с иконкой
    </base-label>
    <highlight-code lang="vue">
      <pre>
        &lt;base-label&gt;
          &lt;template #icon&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;18&quot; height=&quot;18&quot; fill=&quot;currentColor&quot; class=&quot;bi bi-exclamation-triangle-fill flex-shrink-0 me-2&quot; viewBox=&quot;0 0 16 16&quot; role=&quot;img&quot; aria-label=&quot;Warning:&quot;&gt;
              &lt;path d=&quot;M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z&quot;/&gt;
            &lt;/svg&gt;
          &lt;/template&gt;
          Лейбл с иконкой
        &lt;/base-button&gt;
      </pre>
    </highlight-code>
  </div>
</template>

<script>
import BaseLabel from "@/components/BaseLabel";
export default {
  name: "AlertsPage",
  components: { BaseLabel },
  created() {
    document.title = "Лейбл";
  },
};
</script>

<style scoped lang="scss">
.grid {
  display: flex;

  .label + .label {
    margin-left: 8px;
  }
}
</style>
