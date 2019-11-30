<template>
    <div class='m-3'>
        <b-card :title="`${account.name_first} ${account.name_last}`" :sub-title='account.employer'>
            <b-card-text>
                {{ account.address }}
            </b-card-text>
            <b-link :href='`mailto:${account.email}`' class="card-link">{{account.email}}</b-link>
            <b-progress :value='score' :max='1' class="my-3"></b-progress>
        </b-card>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Account from '../models/Account';
@Component({})

export default class AccountPreview extends Vue {
    @Prop({type: Object as () => Account})
    public account!: Account; 
    
    private score: number = 0;

    created() {
        // Animate the movement
        window.setTimeout(() => this.score = this.account.credit / 800);
    }


}
</script>

<style>

</style>