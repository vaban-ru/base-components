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
    <h2>Алерт с иконкой</h2>
    <base-alert danger>
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugit
      numquam quas qui saepe tenetur. Accusantium in incidunt iure maxime
      nesciunt nisi possimus quod veniam voluptatibus. Doloribus laudantium
      nihil voluptatem!
    </base-alert>
    <highlight-code lang="vue">
      <pre>
        &lt;base-alert danger&gt;
          &lt;template #icon&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;currentColor&quot; class=&quot;bi bi-exclamation-triangle-fill flex-shrink-0 me-2&quot; viewBox=&quot;0 0 16 16&quot; role=&quot;img&quot; aria-label=&quot;Warning:&quot;&gt;
              &lt;path d=&quot;M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z&quot;/&gt;
            &lt;/svg&gt;
          &lt;/template&gt;
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
