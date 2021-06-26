<template>
  <div class="page">
    <h1>
      <a
        href="https://github.com/webzlodimir/base-components/blob/master/src/components/BaseAlert.vue"
        target="_blank"
        >Алерт</a
      >
    </h1>
    <h2>Стандартный</h2>
    <base-alert>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugit
      numquam quas qui saepe tenetur. Accusantium in incidunt iure maxime
      nesciunt nisi possimus quod veniam voluptatibus. Doloribus laudantium
      nihil voluptatem!
    </base-alert>
    <base-alert primary>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugit
      numquam quas qui saepe tenetur. Accusantium in incidunt iure maxime
      nesciunt nisi possimus quod veniam voluptatibus. Doloribus laudantium
      nihil voluptatem!
    </base-alert>
    <base-alert secondary>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugit
      numquam quas qui saepe tenetur. Accusantium in incidunt iure maxime
      nesciunt nisi possimus quod veniam voluptatibus. Doloribus laudantium
      nihil voluptatem!
    </base-alert>
    <base-alert success>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugit
      numquam quas qui saepe tenetur. Accusantium in incidunt iure maxime
      nesciunt nisi possimus quod veniam voluptatibus. Doloribus laudantium
      nihil voluptatem!
    </base-alert>
    <base-alert danger>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugit
      numquam quas qui saepe tenetur. Accusantium in incidunt iure maxime
      nesciunt nisi possimus quod veniam voluptatibus. Doloribus laudantium
      nihil voluptatem!
    </base-alert>
    <highlight-code lang="vue">
      <pre>
        &lt;base-alert&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/base-alert&gt;
        &lt;base-alert primary&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/base-alert&gt;
        &lt;base-alert secondary&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/base-alert&gt;
        &lt;base-alert success&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/base-alert&gt;
        &lt;base-alert danger&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/base-alert&gt;
      </pre>
    </highlight-code>
    <h2>Алерт с заголовком</h2>
    <base-alert>
      <template #title>Заголовок алерта</template>
      <template #default>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
        fugit numquam quas qui saepe tenetur. Accusantium in incidunt iure
        maxime nesciunt nisi possimus quod veniam voluptatibus. Doloribus
        laudantium nihil voluptatem!
      </template>
    </base-alert>
    <highlight-code lang="vue">
      <pre>
        &lt;base-alert&gt;
          &lt;template #title&gt;Заголовок алерта&lt;/template&gt;
          &lt;template #default&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. &lt;/template&gt;
        &lt;/base-alert&gt;
      </pre>
    </highlight-code>
    <h2>Алерт с футером</h2>
    <base-alert>
      <template #default>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
        fugit numquam quas qui saepe tenetur. Accusantium in incidunt iure
        maxime nesciunt nisi possimus quod veniam voluptatibus. Doloribus
        laudantium nihil voluptatem!
      </template>
      <template #footer> Текст в футере алерта </template>
    </base-alert>
    <highlight-code lang="vue">
      <pre>
        &lt;base-alert primary&gt;
          &lt;template #default&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. &lt;/template&gt;
          &lt;template #footer&gt;Текст в футере алерта&lt;/template&gt;
        &lt;/base-alert&gt;
      </pre>
    </highlight-code>
    <h2>Алерт с текстом по центру</h2>
    <base-alert center>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugit
      numquam quas qui saepe tenetur. Accusantium in incidunt iure maxime
      nesciunt nisi possimus quod veniam voluptatibus. Doloribus laudantium
      nihil voluptatem!
    </base-alert>
    <highlight-code lang="vue">
      <pre>
        &lt;base-alert center&gt;
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        &lt;/base-alert&gt;
      </pre>
    </highlight-code>
  </div>
</template>

<script>
import BaseAlert from "@/components/BaseAlert";
export default {
  name: "AlertsPage",
  components: { BaseAlert },
  created() {
    document.title = "Алерты";
  },
};
</script>

<style scoped lang="scss"></style>
