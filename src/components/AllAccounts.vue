<template>
    <div>
        <div v-if="error">
            There was an error retrieving accounts!
        </div>
        <div v-if="!error && loading">
            <b-spinner label="Spinning"></b-spinner>
        </div>
        <div>
            <AccountPreview v-for="account in accounts" v-bind:key="account.token" :account='account'/>
        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import AccountPreview from './AccountPreview.vue';
import Account from '../models/Account';

@Component({
    components: {
        AccountPreview
    }
})

export default class AllAccounts extends Vue {
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
