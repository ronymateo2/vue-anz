<template>
  <ul class="nav nav-tabs">
        <li class="active">
            <a aria-expanded="true" href="#inbox" data-toggle="tab">Inbox (759)</a>
        </li>
        <li class="">
            <a aria-expanded="false" href="#quoted" data-toggle="tab">Hold Client (9)</a>
        </li>
        <li class="">
            <a aria-expanded="false" href="#hold-supplier" data-toggle="tab">Hold Supplier (1)</a>
        </li>
        <li class="">
            <a aria-expanded="false" href="#confirmed" data-toggle="tab">Confirmed / Deposit Due (2)</a>
        </li>
        <li class="">
            <a aria-expanded="false" href="#balance-due" data-toggle="tab">Balance Due (0)</a>
        </li>
        <li class="">
            <a aria-expanded="false" href="#completed" data-toggle="tab">Completed</a>
        </li>
        <li class="">
            <a aria-expanded="false" href="#non-confirmed" data-toggle="tab">Non-confirmed</a>
        </li>
        <li class="">
            <a aria-expanded="false" href="#canceled" data-toggle="tab">Cancelled</a>
        </li>
        <li class="">
            <a aria-expanded="false" href="#non-booking" data-toggle="tab">Non-booking</a>
        </li>
        <li class="">
            <a aria-expanded="false" href="#trash" data-toggle="tab"><i class="fa fa-trash" aria-hidden="true"></i> Trash</a>
        </li>
    </ul>       
</template>
<script>

export default {
    name: 'anzcro-tab',
}
</script>
