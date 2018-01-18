<template>
    <div id='app'>
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>
<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import '../../assets/bootstrap/css/bootstrap.min.css'
export default {
  name: 'Layout',
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter
  }
}
</script>

<style>

</style>
