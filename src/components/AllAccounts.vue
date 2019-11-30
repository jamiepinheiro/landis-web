<template>
    <div>
        <div>
            <AccountPreview v-for="account in accounts" v-bind:key="account.token" :account='account'/>
        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import AccountPreview from './AccountPreview.vue';
import Account from '../models/Account';

@Component({
    components: {
        AccountPreview
    }
})

export default class AllAccounts extends Vue {
    @Prop({type: Array as () => Account[]})
    public accounts!: Account[];
}
</script>

<style>
</style>
