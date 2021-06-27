<template>
  <div class="page">
    <h1>Поле ввода</h1>
    <h2>Стандартное поле ввода</h2>
    <base-input />
    <highlight-code lang="vue">
      <pre>
        &lt;base-input /&gt;
      </pre>
    </highlight-code>
    <h2>Поле ввода с плейсхолдером</h2>
    <base-input placeholder="Это плейсхолдер" />
    <highlight-code lang="vue">
      <pre>
        &lt;base-input placeholder=&quot;Это плейсхолдер&quot; /&gt;
      </pre>
    </highlight-code>
    <h2>Поле ввода с названием</h2>
    <base-input label="Это название поля ввода" />
    <highlight-code lang="vue">
      <pre>
        &lt;base-input label=&quot;Это название поля ввода&quot; /&gt;
      </pre>
    </highlight-code>
    <h2>Поле ввода с описанием</h2>
    <base-input
      label="Это название поля ввода"
      description="Описание поля ввода"
    />
    <highlight-code lang="vue">
      <pre>
        &lt;base-input
          label=&quot;Это название поля ввода&quot;
          description=&quot;Описание поля ввода&quot;
        /&gt;
      </pre>
    </highlight-code>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
export default {
  name: "InputPage",
  components: { BaseInput },
  created() {
    document.title = "Поле ввода";
  },
};
</script>

<style scoped></style>
