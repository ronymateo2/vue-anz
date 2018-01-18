<template>
  <ul class="nav nav-tabs">
        <router-link tag="li"  to="/" exact>
            <a  aria-expanded="true" href="#inbox" data-toggle="tab">Inbox ({{inboxRecord}})</a>
        </router-link>
        <router-link tag="li" to="/trash" >
            <a  aria-expanded="false" href="#trash" data-toggle="tab"><i class="fa fa-trash" aria-hidden="true"></i>Trash</a>
        </router-link>
    </ul>
</template>
<script>
export default {
  name: 'anzcro-tab',
  props: {
    inboxRecord: Number
  }
}
</script>
