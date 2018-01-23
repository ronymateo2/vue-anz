<template>
<div>
    <br/>
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
                            <input name="name" class="form-control" value="" v-model="brochure.client.name" placeholder="Full Name"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Agent?</td>
                        <td>
                            <select name="agency_flag" data-minimum-results-for-search="Infinity"  v-model="brochure.client.client_metas.find(t=>t.key == 'agency_flag').value" >
                                <option value="NO" >NO</option>
                                <option value="YES">YES</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Agency Name</td>
                        <td>
                            <input name="agency_name" class="form-control" placeholder="Agency Name" v-model="brochure.client.client_metas.find(t=>t.key == 'agency_name').value"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Street</td>
                        <td>
                            <input name="address_street" class="form-control" placeholder="Street" v-model="brochure.client.client_metas.find(t=>t.key == 'address_street').value"/>
                        </td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>
                            <input name="address_city" class="form-control" placeholder="City" v-model="brochure.client.client_metas.find(t=>t.key == 'address_city').value"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Region</td>
                        <td>
                            <input name="address_region" class="form-control" placeholder="Region"  v-model="brochure.client.client_metas.find(t=>t.key == 'address_region').value" />
                        </td>
                    </tr>
                    <tr>
                        <td>Zip Code</td>
                        <td>
                            <input name="address_zip" class="form-control" placeholder="Zip Code"  v-model="brochure.client.client_metas.find(t=>t.key == 'address_zip').value"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>
                            <select name="address_country" class="form-control" style="width: 50%" v-model="brochure.client.client_metas.find(t=>t.key == 'address_country').value">
                                <option v-for="(value,key) in countries" :value="value" :key="key" >{{value}}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Mobile Phone</td>
                        <td>
                            <input name="mobile" class="form-control" placeholder="Mobile Phone" v-model="brochure.client.client_metas.find(t=>t.key == 'mobile').value"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Home Phone</td>
                        <td>
                            <input name="phone" class="form-control" placeholder="Home Phone" v-model="brochure.client.client_metas.find(t=>t.key == 'phone').value"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'brochure-client',
  props: {
    brochure: Object
  },
  computed: {
    ...mapGetters({
      countries: 'getCountries'
    })
  },
  methods: {
  }
}
</script>

<style>

</style>
