<template>
  <ul class="nav nav-tabs">
        <li class="active">
            <router-link  to="/" aria-expanded="true" href="#inbox" data-toggle="tab">Inbox ({{inboxRecord}})</router-link>
        </li>     
        <li class="">
            <router-link to="/trash" aria-expanded="false" href="#trash" data-toggle="tab"><i class="fa fa-trash" aria-hidden="true"></i>Trash</router-link>
        </li>
    </ul>       
</template>
<script>
export default {
    name: 'anzcro-tab',
    props: {
        inboxRecord:Number
    }
}
</script>
