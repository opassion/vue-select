<template>
  <div id="app">
    {{ selected2 }}
    <div class="container">
      <v-select v-model="selected1" v-bind="config" />
      <v-select
        v-model="selected2"
        :options="config.options"
        :label="'label'"
        :value="'value'"
        :append-to-body="true"
      />
      <v-select v-model="selected3" v-bind="config2" />
    </div>
    <input type="text" />
  </div>
</template>

<script>
import vSelect from "../src/components/Select";
import countries from "../docs/.vuepress/data/countryCodes";
import books from "../docs/.vuepress/data/books";

export default {
  components: { vSelect },
  data: () => ({
    selected1: null,
    selected2: countries[3],
    selected3: 4,
    config: {
      options: countries,
      selectOnKeyCodes: [13, 9],
    },
    config2: {
      options: [1, 2, 3, 4, 5, 6, 7],
      selectOnKeyCodes: [13, 9],
    },
  }),
};
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  font-family: -apple-system, sans-serif;
}

#app {
  height: 100%;
  /* max-width: 20rem; */
  margin: 10rem auto 0;
}

.container {
  display: grid;
  grid-template-columns: 300px 300px;
  align-items: center;
  width: 100%;
}

hr {
  border: none;
  border-bottom: 1px solid #cacaca;
  margin-bottom: 1em;
  padding-top: 1em;
  width: 90%;
}
</style>
