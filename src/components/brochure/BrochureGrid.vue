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
          <anzcro-brochure-view :brochure="brochure"></anzcro-brochure-view>
        </td>
        <td>
          <button type="button" class="btn btn-danger trash" data-toggle="modal" data-target="#myModal" aria-label="Left Align"
            data_id="783" data-placement="top" title="Trash">
            <i class="glyphicon glyphicon-trash" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import AnzcroBrochureView from './BrochureView.vue'
export default {
  name: 'brochure-grid',
  props: {
    brochures: Array
  },
  data () {
    return { brochureItem: {},
      modalShown: false}
  },
  components: {
    'anzcro-brochure-view': AnzcroBrochureView
  },
  methods: {
    showinfo: function (brochureItem) {
      this.modalShown = true
      this.brochureItem = brochureItem
    }
  }
}
</script>

<style>
</style>
