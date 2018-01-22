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
    <anzcro-pagination  @on-selected="onSelected" :activeindex="currentIndex"></anzcro-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AnzcroPagination from '../grid/AnzcroPagination.vue'
export default {
  name: 'anzcro-trash',
  data () {
    return { currentIndex: 1 }
  },
  components: {
    'anzcro-pagination': AnzcroPagination
  },
  created: function () {
    this.loadTrashes({page: this.currentIndex, perPage: 10})
  },
  computed: mapGetters({
    trashes: 'getTrashes'
  }),
  methods: {
    ...mapActions(['loadTrashes']),
    onSelected: function (index) {
      this.loadTrashes({page: index, perPage: 10}).then((data) => {
        this.currentIndex = index
      })
    }
  }
}
</script>

<style>

</style>
