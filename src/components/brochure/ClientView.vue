<template>
<div>
    <div class="panel panel-primary">
        <div class="panel-heading">
            Client Information
        </div>
        <div class="panel-body">
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <td>Email</td>
                        <td>
                            {{brochure.client.email}}
                        </td>
                    </tr>
                    <tr>
                        <td>Full name</td>
                        <td>
                            <input name="name" class="form-control" value="" placeholder="Full Name"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Agent?</td>
                        <td>
                            <select name="agency_flag" data-minimum-results-for-search="Infinity">
                                <option>NO</option>
                                <option>YES</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Agency Name</td>
                        <td>
                            <input name="agency_name" class="form-control" placeholder="Agency Name"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Street</td>
                        <td>
                            <input name="address_street" class="form-control" placeholder="Street"/>
                        </td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>
                            <input name="address_city" class="form-control" placeholder="City"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Region</td>
                        <td>
                            <input name="address_region" class="form-control" placeholder="Region"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Zip Code</td>
                        <td>
                            <input name="address_zip" class="form-control" placeholder="Zip Code"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>
                            <select name="address_country" class="form-control" style="width: 50%">
                                <option v-for="(value,key) in countries" :value="key" :key="key" >{{value}}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Mobile Phone</td>
                        <td>
                            <input name="mobile" class="form-control" placeholder="Mobile Phone"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Home Phone</td>
                        <td>
                            <input name="phone" class="form-control" placeholder="Home Phone"/>
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
  name: 'brochure-client',
  props: {
    brochure: Object
  },
  data () {
    return {
      countries: window.Countries
    }
  },
  methods: {
    close: function () {

    },
    save: function () {

    }
  }
}
</script>

<style>

</style>
