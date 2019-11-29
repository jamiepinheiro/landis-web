<template>
  <div class='text-center'>
        <b-tabs content-class='mt-3 mx-auto' fill>
            <b-tab title='All Accounts' active>
                <AllAccounts/>
            </b-tab>
            <b-tab title='Charts'>
                <Charts/>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import AllAccounts from './components/AllAccounts.vue';
import Charts from './components/Charts.vue';

@Component({
    components: {
        AllAccounts,
        Charts
    }
})

export default class App extends Vue {}
</script>

<style>

</style>