<template>
  <nav aria-label="Page navigation">
    <ul class="pagination" >
      <li  v-if="indexs[0] != 1">
        <a href="#" data_page="2" aria-label="Prev" v-on:click.prevent="goPrev($event)">
          <span aria-hidden="true">« Prev</span>
        </a>
      </li>
      <li v-for="index in indexs"  :key="index" :class="{active : index== activeindex}">
        <a v-on:click.prevent="showPage(index,$event)" href="#" :data_page="index"> {{index}}</a>
      </li>
      <li>
        <a href="#" data_page="2" aria-label="Next" v-on:click.prevent="goNext($event)">
          <span aria-hidden="true">Next »</span>
        </a>
      </li>
    </ul>
  </nav>

</template>

<script>
export default {
  name: 'anzcro-pagination',
  props: { pagging: Object, activeindex: Number },
  data () {
    return {
      indexs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    showPage: function (index, $event) {
      this.$emit('on-selected', index)
    },
    goNext: function ($event) {
      this.activeindex++
      const newIndexes = this.indexs.map(i => {
        return i + 1
      })

      this.$emit('on-selected', this.activeindex)
      this.indexs = newIndexes
    },
    goPrev: function ($event) {
      this.activeindex--
      const newIndexes = this.indexs.map(i => {
        return i - 1
      })
      this.$emit('on-selected', this.activeindex)
      this.indexs = newIndexes
    }
  }
}
</script>
<style>

</style>
