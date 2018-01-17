<template>
  <div>
      
  </div>
</template>

<script>
import BrochureService from '../../services/BrochureService.js'
import AnzcroPagination from '../grid/AnzcroPagination.vue'

export default {
  name: 'anzcro-trash',
  data(){
    return { trashes:[]}
  },
  methods: {
    loadTrashes(){
      const service = new BrochureService();
    }

  }
}
</script>

<style>

</style>
