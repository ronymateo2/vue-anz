<template>
  <div>
    <button class="btn btn-primary" data-toggle="modal" v-on:click.prevent="open()" data-target="#myModal" data_id="783" data-placement="top"
      title="View">
      <i class="glyphicons glyphicons-eye-open" aria-hidden="true"></i>
    </button>
    <div>
    </div>
    <div class="modal fade in" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" v-bind:style="{'display': this.isActive == false ? 'none': 'block'}">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" v-on:click.prevent="close()" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">Enquiry #{{brochure.id}} : {{brochure.subject}}</h4>
          </div>
          <div class="modal-body">
            <ul class="nav nav-pills">
              <li  v-bind:class="{active : isActiveTab('details')}" v-on:click.prevent="makeActiveTab('details')">
                <a aria-expanded="true" href="#" data-toggle="tab">Details</a>
              </li>
              <li v-bind:class="{active : isActiveTab('client')}"  v-on:click.prevent="makeActiveTab('client')">
                <a aria-expanded="false" href="#client" data-toggle="tab">Client</a>
              </li>
              <li>
                <select class="select2-status" v-model="brochureStatus">
                  <option :value="statuses['inbox'].description">{{statuses['inbox'].description}}</option>
                  <option v-for="status in statuses['inbox'].next" :key="status" :value="status">{{statuses[status].description}}</option>
                </select>
              </li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content">
              <div class="tab-pane fade" id='details' v-bind:class="{'active in': isActiveTab('details')}" >
                <brochure-details :brochure="brochure"></brochure-details>
              </div>
              <div class="tab-pane fade" id="client"  v-bind:class="{'active in' : isActiveTab('client')}" >
                <brochure-view :brochure="brochure" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailsView from './DetailsView.vue'
import ClientViewVue from './ClientView.vue'
export default {
  name: 'anzcro-brochure-view',
  props: {
    brochure: Object
  },
  components: {
    'brochure-details': DetailsView,
    'brochure-view': ClientViewVue
  },
  data () {
    return {
      isActive: false,
      statuses: window.Statuses,
      consultants: window.Consultants,
      user: window.User,
      brochureConsultant: '',
      brochureStatus: window.Statuses['inbox'].description,
      activeTab: 'details'
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
      },
      makeActiveTab : function(value){
      this.activeTab = value;
      },
      isActiveTab : function (value){
        return  this.activeTab == value
      }
    }  
  }
</script>

<style>
</style>