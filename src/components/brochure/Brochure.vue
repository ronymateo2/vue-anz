<template>
  <div>      
      <anzcro-grid :brochures="brochures"></anzcro-grid>
      <anzcro-pagination :pagging="pagging"  @on-selected="onSelected" :activeindex="currentIndex"></anzcro-pagination>
  </div>
</template>
<script>

import AnzcroGrid from './BrochureGrid.vue'
import AnzcroPagination from '../grid/AnzcroPagination.vue'
import BrochureService from '../../services/BrochureService.js'
export default {
  name: 'Brochure',
  components: {    
    'anzcro-grid':AnzcroGrid,
    'anzcro-pagination': AnzcroPagination
  },
  data(){
   return { brochures: [], pagging :{}, currentIndex:1,inboxRecords:0 }
  },
  created: function(){
      this.loadData();
  },
  methods:{
    loadData: function(){
      const service = new BrochureService();
      service.getBrochures(this.currentIndex,10)        
        .then((data)=> {
          this.brochures = data.content.data;
          this.inboxRecords = data.content.total;
        })
    },
    onSelected:function(index){      
      const service = new BrochureService();      
      return service.getBrochures(index,10)
        .then(data=>{
            this.brochures = data.content.data;
            this.currentIndex = index;
        });
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
