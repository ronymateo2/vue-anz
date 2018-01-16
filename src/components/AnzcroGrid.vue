<template>
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
        <td>{{brochure.createdAt}}</td>
        <td></td>
        <td>
          <button class="btn btn-primary" data-toggle="modal" data-target="#myModal" data_id="783" data-placement="top" title="View">
            <i class="fa fa-eye" aria-hidden="true"></i>
          </button>
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
</template>

<script>
  export default {
    name: 'anzcro-grid',     
    props: {
     brochures: Array
    }
  }
</script>

<style>
</style>