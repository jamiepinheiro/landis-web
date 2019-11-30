<template>
  <div class='text-center'>
        <div v-if="error">
            There was an error retrieving accounts!
        </div>
        <div v-else-if="!error && loading">
            <b-spinner class='mt-5' label='Spinning'></b-spinner>
        </div>
        <b-tabs v-else content-class='mt-3 mx-auto' fill>
            <b-tab lazy title='All Accounts' active>
                <AllAccounts :accounts='accounts'/>
            </b-tab>
            <b-tab lazy title='Charts'>
                <Charts :accounts='accounts'/>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import AllAccounts from './components/AllAccounts.vue';
import Charts from './components/Charts.vue';

@Component({
    components: {
        AllAccounts,
        Charts
    }
})

export default class App extends Vue {
    private loading: boolean = true;
    private error: boolean = false;
    private accounts: Account[] = [];

    private created(): void {
        axios.get('https://us-central1-landis-project.cloudfunctions.net/allAccounts')
        .then((response) => {
            this.loading = false;
            this.accounts = response.data;
        })
        .catch((e) => {
            this.error = true;
        });
    }
}
</script>

<style>

</style>