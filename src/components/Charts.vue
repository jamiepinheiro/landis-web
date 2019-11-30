<template>
    <div>
        <h3>Distribution of Credit Scores</h3>
        <Echarts class="text-center" :options="options"/>
        <p>Credit Score Range</p>
    </div>
</template>

<script lang='ts'>
// @ts-ignore
import { Component, Prop, Vue } from 'vue-property-decorator';
import Account from '../models/Account';
import Echarts from '../forked/vue-echarts/components/ECharts.vue';

@Component({
    components: {
        Echarts
    }
})

export default class AllAccounts extends Vue {
    @Prop({type: Array as () => Account[]})
    public accounts!: Account[];

    private options = {
        xAxis: {
            data: this.data.labels
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                type: 'bar',
                data: this.data.values
            }
        ],
        color: ['#127ac2']
    };

    get data(): any {
        if (this.accounts) {
            const min = this.accounts.reduce((prev: Account, curr: Account) =>
                prev.credit < curr.credit ? prev : curr).credit;

            const max = this.accounts.reduce((prev: Account, curr: Account) =>
                prev.credit > curr.credit ? prev : curr).credit;

            const intervals = 20;

            const intervalSize = Math.round((max-min)/(intervals - 1));

            const values = new Array(intervals).fill(0);

            this.accounts.forEach((account: Account) => {
                const interval = Math.round(account.credit/intervalSize);
                values[interval] += 1;
            });

            const labels: string[] = [];
            for (var i = 0; i < intervals; i++) {
                labels.push(`${i * intervalSize} - ${(i + 1) * intervalSize}`);
            }

            return {
                values,
                labels
            };
        }
        return null;

    }
}
</script>

<style scoped>
.echarts {
  width: 100vw;
  height: 70vh;
}
</style>