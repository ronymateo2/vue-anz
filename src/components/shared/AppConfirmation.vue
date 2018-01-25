<template>
  <div class="modal fade in" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" v-bind:style="{'display': this.isActive == false ? 'none': 'block'}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" v-on:click.prevent="close" >×</button>
          <h4 class="modal-title" id="myModalLabel">Enquiry # {{id}} : Send To Trash</h4>
        </div>
        <div class="modal-body">
          Are you sure you want to delete this enquiry?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal"  v-on:click.prevent="close" >Cancel</button>
          <button type="button" class="btn btn-primary"  v-on:click.prevent="confirm">Confirm</button>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'anzcro-modal',
  props: {
    isActive: Boolean,
    brochure: Object
  },
  computed: {
    id: function () {
      if (this.brochure) {
        return this.brochure.id
      }
      return ''
    }
  },
  methods: {
    confirm: function () {
      this.$emit('onConfirm', this.brochure)
    },
    close: function () {
      this.$emit('onClose', this.brochure)
    }
  }
}

</script>

<style>

</style>
