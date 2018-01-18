<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Subject</th>
          <th>Quote/Booking #</th>
          <th>Client</th>
          <th>Site</th>
          <th>Consultant</th>
          <th>Created At</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="trash in trashes"  :key="trash.id" >
          <td>{{trash.id}}</td>
          <td>{{trash.subject}}</td>
          <td>{{trash.quote}}</td>
          <td>{{trash.client.name}}</td>
          <td>{{trash.site}}</td>
          <td>{{trash.consultant}}</td>
          <td>{{trash.created_at}}</td>
          <td>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" aria-label="Left Align"
              data_id="783" data-placement="top" title="Trash">
              <i class="glyphicons glyphicons-eye-open" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <anzcro-pagination :pagging="pagging" @on-selected="onSelected" :activeindex="currentIndex"></anzcro-pagination>
  </div>
</template>

<script>
import BrochureService from '../../services/BrochureService.js'
import AnzcroPagination from '../grid/AnzcroPagination.vue'
export default {
  name: 'anzcro-trash',
  data () {
    return { trashes: [], pagging: {}, currentIndex: 1 }
  },
  components: {
    'anzcro-pagination': AnzcroPagination
  },
  created: function () {
    this.loadTrashes()
  },
  methods: {
    loadTrashes () {
      const service = new BrochureService()
      service.getTrash(this.currentIndex, 10)
        .then((data) => {
          this.trashes = data.content.data
          this.inboxRecords = data.content.total
        })
    },
    onSelected: function (index) {
      const service = new BrochureService()
      return service.getTrash(index, 10)
        .then(data => {
          this.trashes = data.content.data
          this.currentIndex = index
        })
    }
  }
}
</script>

<style>

</style>
