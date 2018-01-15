<template>
  <div>
      <anzcro-tab></anzcro-tab>
      <anzcro-grid></anzcro-grid>
      <anzcro-pagination></anzcro-pagination>
  </div>
</template>
<script>
import AnzcroTab from './AnzcroTab.vue'
import AnzcroGrid from './AnzcroGrid.vue'
import AnzcroPagination from './AnzcroPagination.vue'
export default {
  name: 'Brochure',
  components: {
    'anzcro-tab': AnzcroTab,
    'anzcro-grid':AnzcroGrid,
    'anzcro-pagination': AnzcroPagination
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
