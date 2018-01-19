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
                        <select v-if="user.roles.find(e=> e.name == 'admin') " v-model="brochureConsultant">
                            <option value=""></option>
                            <option v-for="consultant in consultants" :key="consultant.id" :value="consultant.id" >{{consultant.name}}</option>
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
export default {
  name: 'details-view',
  props: {
    brochure: Object
  },
  data () {
    return {
      statuses: window.Statuses,
      consultants: window.Consultants,
      user: window.User,
      brochureConsultant: '',
      brochureStatus: window.Statuses['inbox'].description
    }
  },
  methods: {
    setConsultant: function () {
      const metaConsultant = this.consultants.find(t => this.isSelected(t.id))
      this.brochureConsultant = metaConsultant.id
    },
    setStatus: function () {
      this.brochureStatus = this.statuses['inbox'].description
    },
    evaluate: function (meta) {
      return ['quotes', 'notes', 'consultant'].indexOf(meta) < 0
    },
    close: function () {
      this.isActive = false
      this.setConsultant()
      this.setStatus()
    },
    open: function () {
      this.isActive = true
      this.setConsultant()
      this.setStatus()
    },
    isSelected: function (consultantId) {
      /* eslint-disable */
      const metaConsultant = this.brochure.enquiry_metas.find(
        t => t.key === 'consultant' && t.value == consultantId
      )
      if (metaConsultant) {
        this.brochureConsultant = consultantId
        const consultant = this.consultants.find(
          t => t.id == metaConsultant.value
        )
        this.$set(this.brochure, 'consultant', consultant.name)
      }
      return metaConsultant
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
