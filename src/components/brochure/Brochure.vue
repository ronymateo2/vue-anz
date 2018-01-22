<template>
  <div>
      <brochure-grid :brochures="brochures"></brochure-grid>
      <anzcro-pagination :pagging="pagging"  @on-selected="onSelected" :activeindex="currentIndex"></anzcro-pagination>
  </div>
</template>
<script>

import BrochureGrid from './BrochureGrid.vue'
import AnzcroPagination from '../grid/AnzcroPagination.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Brochure',
  components: {
    'brochure-grid': BrochureGrid,
    'anzcro-pagination': AnzcroPagination
  },
  data () {
    return { pagging: {}, currentIndex: 1 }
  },
  computed: mapGetters({
    brochures: 'getbrochures'
  }),
  created: function () {
    this.start({page: this.currentIndex, perPage: 10})
  },
  methods: {
    ...mapActions(['loadBrochures', 'start']),
    onSelected: function (index) {
      this.loadBrochures({page: index, perPage: 10}).then((data) => {
        this.currentIndex = index
      })
    }
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
