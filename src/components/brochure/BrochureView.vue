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
                        <select class="select2-status">
                            <!-- <option value="<%= enquiry.get("status") %>"><%= Statuses[enquiry.get("status")].description %></option>
                            <% for (var index in Statuses[enquiry.get("status")].next) { %>
                               <option value="<%= Statuses[enquiry.get("status")].next[index] %>"><%= Statuses[Statuses[enquiry.get("status")].next[index]].description %></option>
                            <% } %> -->
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
                                        <td>TODO:resolve</td>
                                      </tr>

                                        <!-- <% _.each(enquiry.get("enquiry_metas"), function(meta) { %>

                                            <% if ( ['quotes', 'notes', 'consultant'].indexOf(meta.key) < 0 ) { %>

                                                <tr>
                                                    <td><%= _.capitalize(meta.key.replace("_"," ")) %></td>
                                                    <td><%= meta.value %></td>
                                                </tr>

                                            <% } %>

                                        <% }); %>
                                        <tr>
                                            <td>Consultant</td>
                                            <td>
                                                <%
                                                    var consultant_id = parseInt((enquiry.getMetaByKey('consultant') || {value:0}).value);
                                                    if ( User.hasRole('admin') ) {
                                                %>

                                                    <select name="consultant">
                                                        <option value="">-- Select Consultant --</option>

                                                        <% Consultants.forEach(function(consultant) { %>

                                                           <option value="<%= consultant.id %>"<%= consultant.id === consultant_id ? ' selected' : '' %>><%= consultant.name %></option>

                                                        <% }) %>

                                                    </select>

                                                <% } else { %>

                                                   <%= (Consultants.getConsultantById(consultant_id) !== null ? Consultants.getConsultantById(consultant_id).name : '') %>

                                                <% } %>
                                            </td>
                                        </tr> -->
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
    brochure: Object
  },
  data () {
    return {
      isActive: false
    }
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
    }
  }
}
</script>

<style>

</style>
