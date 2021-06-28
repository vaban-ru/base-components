<template>
  <div class="page">
    <h1>
      <a
        href="https://github.com/webzlodimir/base-components/blob/master/src/components/BaseInput.vue"
        target="_blank"
        >Поле ввода</a
      >
    </h1>
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
    <h2>v-model для поля ввода</h2>
    <base-input placeholder="Это плейсхолдер" v-model="inputValue" />
    <p>Значение поля ввода: {{ inputValue }}</p>
    <highlight-code lang="vue">
      <pre>
        &lt;template&gt;
            &lt;base-input placeholder=&quot;Это плейсхолдер&quot; v-model=&quot;inputValue&quot; /&gt;
        &lt;/template&gt;
        &lt;script&gt;
          export default {
            data: () =&gt; ({
              inputValue: 123,
            }),
          }
        &lt;/script&gt;
      </pre>
    </highlight-code>
    <h2>Поле ввода с типом number</h2>
    <base-input type="number" placeholder="Вводить можно только цифры" />
    <highlight-code lang="vue">
      <pre>
        &lt;base-input type=&quot;number&quot; placeholder=&quot;Вводить можно только цифры&quot; /&gt;
      </pre>
    </highlight-code>
    <h2>Поле ввода с типом number (стрелки выключены)</h2>
    <base-input
      no-arrows
      type="number"
      placeholder="Вводить можно только цифры"
    />
    <highlight-code lang="vue">
      <pre>
        &lt;base-input
          no-arrows
          type=&quot;number&quot;
          placeholder=&quot;Вводить можно только цифры&quot;
        /&gt;
      </pre>
    </highlight-code>
    <h2>Textarea</h2>
    <base-input placeholder="Это текстовое поле ввода" type="textarea" />
    <highlight-code lang="vue">
      <pre>
        &lt;base-input placeholder=&quot;Это текстовое поле ввода&quot; type=&quot;textarea&quot; /&gt;
      </pre>
    </highlight-code>
    <h2>Textarea с указанием cols и rows</h2>
    <base-input
      :cols="5"
      :rows="6"
      placeholder="Это текстовое поле ввода"
      type="textarea"
    />
    <highlight-code lang="vue">
      <pre>
        &lt;base-input
          :cols=&quot;5&quot;
          :rows=&quot;6&quot;
          placeholder=&quot;Это текстовое поле ввода&quot;
          type=&quot;textarea&quot;
        /&gt;
      </pre>
    </highlight-code>
    <h2>Textarea с выключенным resize</h2>
    <base-input
      no-resize
      placeholder="Это текстовое поле ввода"
      type="textarea"
    />
    <highlight-code lang="vue">
      <pre>
        &lt;base-input
          no-resize
          placeholder=&quot;Это текстовое поле ввода&quot;
          type=&quot;textarea&quot;
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
  data: () => ({
    inputValue: 123,
  }),
  created() {
    document.title = "Поле ввода";
  },
};
</script>

<style scoped></style>
