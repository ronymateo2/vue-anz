<template>
<div>
    <br>
    <div class="well" v-html="brochure.content">
    </div>
    <div class="panel panel-primary">
        <div class="panel-heading">
            Additional Information
        </div>
        <div class="panel-body">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="meta in brochure.enquiry_metas" :key="meta.id" v-if="evaluate(meta.key)" >
                    <td>
                        {{meta.key  | capitalize}}
                    </td>
                    <td>
                        {{meta.value}}
                    </td>
                    </tr>
                    <tr>
                    <td>Consultant</td>
                    <td>
                        <select v-if="user.roles.find(e=> e.name == 'admin') " >
                            <option value=""></option>
                            <option v-for="consultant in consultants" :key="consultant.id" :value="consultant.id"  :selected="brochure.consultantId === consultant.id ? 'selected' : ''">{{consultant.name}}</option>
                        </select>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click.prevent="close()" >Close</button>
          <button type="button" class="btn btn-primary" v-on:click.prevent="save()" >Save changes</button>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'details-view',
  props: {
    brochure: Object
  },
  computed: {
    ...mapGetters({
      consultants: 'getConsultants',
      user: 'getUser',
      brochureStatus: 'getBrochureStatus',
      statuses: 'getStatuses'
    })
  },
  methods: {
    evaluate: function (meta) {
      return ['quotes', 'notes', 'consultant'].indexOf(meta) < 0
    },
    close: function () {
      this.isActive = false
    },
    open: function () {
      this.isActive = true
    },
    save: function () {
      console.log(this.brochureConsultant)
      console.log(this.brochureStatus)
    }
  }
}
</script>

<style>

</style>
