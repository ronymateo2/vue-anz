<template>
<div>
  <button class="btn btn-primary" data-toggle="modal"  v-on:click.prevent="open()"  data-target="#myModal" data_id="783" data-placement="top" title="View">
            <i class="glyphicons glyphicons-eye-open" aria-hidden="true"></i>
  </button>
  <div>
  </div>
  <div  class="modal fade in" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" v-bind:style="{'display': this.isActive == false ? 'none': 'block'}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close"  v-on:click.prevent="close()" data-dismiss="modal" aria-hidden="true">×</button>
          <h4 class="modal-title" id="myModalLabel">Enquiry #{{brochure.id}} : {{brochure.subject}}</h4>
        </div>
        <div class="modal-body">
           <ul class="nav nav-pills">
                    <li class="active">
                        <a aria-expanded="true" href="#" data-toggle="tab">Details</a>
                    </li>
                    <li class="">
                        <a aria-expanded="false" href="#client" data-toggle="tab">Client</a>
                    </li>
                    <li class="">
                        <a aria-expanded="false" href="#notes" data-toggle="tab">Notes</a>
                    </li>
                    <li class="">
                        <a aria-expanded="false" href="#quotes" data-toggle="tab">Quotes</a>
                    </li>
                    <li class="">
                        <a aria-expanded="false" href="#email" data-toggle="tab">Email</a>
                    </li>
                    <li>
                        <select class="select2-status" v-model="brochureStatus">
                            <option :value ="statuses['inbox'].description">{{statuses['inbox'].description}}</option>
                            <option v-for ="status in statuses['inbox'].next" :key="status" :value="status">{{statuses[status].description}}</option>
                        </select>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <div class="tab-pane fade active in" id="details">
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
                    </div>
                    <div class="tab-pane fade" id="client">
                    </div>
                    <div class="tab-pane fade" id="notes">
                    </div>
                    <div class="tab-pane fade" id="quotes">
                    </div>
                    <div class="tab-pane fade" id="email">
                    </div>
                </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click.prevent="close()" >Close</button>
          <button type="button" class="btn btn-primary" v-on:click.prevent="save()" >Save changes</button>
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
    brochure: Object
  },
  data () {
    return {
      isActive: false,
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
