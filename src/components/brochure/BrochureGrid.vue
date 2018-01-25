<template>
<div>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Subject</th>
        <th>Client</th>
        <th>Site</th>
        <th>Consultant</th>
        <th>Created At</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="brochure in brochures"  :key="brochure.id" >
        <td>{{brochure.id}}</td>
        <td>{{brochure.subject}}</td>
        <td>{{brochure.client.name}}</td>
        <td>{{brochure.consultant}}</td>
        <td class="site justnzholidays-com"></td>
        <td>{{brochure.created_at}}</td>
        <td></td>
        <td>
          <anzcro-brochure-view :intialBrochure="brochure"></anzcro-brochure-view>
        </td>
        <td>
          <button type="button" class="btn btn-danger trash" data-toggle="modal" data-target="#myModal" aria-label="Left Align"
            data_id="783" data-placement="top" title="Trash" v-on:click.prevent="openModal(brochure)">
            <i class="glyphicon glyphicon-trash" aria-hidden="true" ></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <anzcro-modal :isActive="modalShown" :brochure="selectedBrochure" v-on:onConfirm="onConfirm" v-on:onClose="onClose"></anzcro-modal>
  </div>
</template>

<script>
import AnzcroBrochureView from './BrochureView.vue'
import AnzcroModal from '../shared/AppConfirmation.vue'
import { mapActions } from 'vuex'
export default {
  name: 'brochure-grid',
  props: {
    brochures: Array
  },
  data () {
    return {
      modalShown: false,
      selectedBrochure: null
    }
  },
  components: {
    'anzcro-brochure-view': AnzcroBrochureView,
    'anzcro-modal': AnzcroModal
  },
  methods: {
    ...mapActions(['updateBrohure']),
    openModal: function (brochure) {
      console.log(this.modalShown)
      this.modalShown = true
      this.selectedBrochure = brochure
    },
    onConfirm: function (sender) {
      console.log(sender)
      this.modalShown = false
      this.selectedBrochure.status = 'trash'

      this.updateBrohure(this.selectedBrochure)
        .then(data => {
          this.selectedBrochure = null
        })
    },
    onClose: function () {
      this.modalShown = false
      this.selectedBrochure = null
    }
  }

}
</script>

<style>
</style>
