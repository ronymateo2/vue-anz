<template>
  <nav aria-label="Page navigation">
    <ul class="pagination" >
      <li  v-if="indexs[0] != 1">
        <a href="#" data_page="2" aria-label="Prev" v-on:click="goPrev($event)">
          <span aria-hidden="true">« Prev</span>
        </a>
      </li>
      <li v-for="index in indexs"  :key="index" :class="{active : index== activeindex}">
        <a v-on:click="showPage(index,$event)" href="#" :data_page="index"> {{index}}</a>        
      </li>
      <li>
        <a href="#" data_page="2" aria-label="Next" v-on:click="goNext($event)">
          <span aria-hidden="true">Next »</span>
        </a>
      </li>
    </ul>
  </nav>

</template>

<script>
  export default {
    name: 'anzcro-pagination',
    data(){
      return {
        indexs: [1,2,3,4,5,6,7,8,9,10],
        activeindex:2
      }
    },
    methods:{
      showPage:function(index, $event){        
        $event.preventDefault();
        this.activeindex = index;      
      },
      goNext:function($event){
        $event.preventDefault();
        this.activeindex ++;
        const newIndexes =  this.indexs.map(i => { return i + 1 });        
        this.indexs = newIndexes;              
      },      
      goPrev:function($event){ 
          this.activeindex --;
          const newIndexes =  this.indexs.map(i => { return i - 1 });        
          this.indexs = newIndexes;              
      }
    }
  };

</script>
<style>
</style>
