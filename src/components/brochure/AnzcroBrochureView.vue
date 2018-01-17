<template>
<div>
  <button class="btn btn-primary" data-toggle="modal"  v-on:click.prevent="open()"  data-target="#myModal" data_id="783" data-placement="top" title="View">
            <i class="fa fa-eye" aria-hidden="true"></i>            
  </button>          
  <div>
  </div>
  <div  class="modal fade in" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" v-bind:style="{'display': this.isActive == false ? 'none': 'block'}"> 
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close"  v-on:click.prevent="close()" data-dismiss="modal" aria-hidden="true">×</button>
          <h4 class="modal-title" id="myModalLabel">Enquiry #793 : New - Custom Itinerary</h4>
        </div>
        <div class="modal-body">
          {{brochure}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>  
  </div>
</div>
</template>

<script>
  export default {
      name: 'anzcro-brochure-view',
      props: {
        brochure: Object,       
    },
    data(){
      return {
        isActive:false
      };
    },
    methods:{
      close: function(){       
          this.isActive = false;        
      },
      open:function(){
          this.isActive = true;          
      }
    }
  }
</script>

<style>


</style>
