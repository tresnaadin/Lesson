<template>
    <div id="app">
        <div class="charts" v-if="chart.length > 0">
            <h2>Chart = {{ chart.length }}</h2>
        </div>
        <div class="inp">
            <input type="text" v-model="max" />
            <input type="range" min="0" max="130" v-model="max" />
        </div>
        <div class="cont" v-for="item in data" :key="item.id">
            <div class="items" v-if="max >= Number(item.price)">
                <div class="btn">
                    <button @click="toDetail(item)">+</button>
                </div>
                <Items
                    :names="item.name"
                    :description="item.description"
                    :price="item.price"
                    :images="item.image"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Items from "@/components/Items"
import axios from "axios"

export default {
    name: "Home",
    components: {
        Items,
    },
    data() {
        return {
            data: null,
            max: 90,
            chart: [],
        }
    },
    methods: {
        addChart(data) {
            this.chart.push(data)
        },
        toDetail(data) {
            this.$router.push({ path: "/detail", params: { data: data } })
        },
    },
    mounted() {
        axios
            .get(process.env.VUE_APP_URL)
            .then((res) => {
                this.data = res.data
            })
            .catch((err) => {
                console.log(err)
            })
    },
}
</script>

<style>
.items {
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    max-width: 100%;
}

button {
    width: 80px;
    height: 50px;
}

.pic {
    width: 400px;
}

input {
    padding: 8px;
    font-size: 13pt;
}

.inp {
    width: 100%;
    display: flex;
    padding: 20px 0;
    justify-content: center;
}

.detail {
    line-height: 20px;
    font-size: 14pt;
    margin-bottom: 20px;
}

.name {
    margin-bottom: 20px;
    color: rgb(0, 153, 255);
}

.price {
    text-align: right;
    margin-right: 20px;
    color: rgb(124, 123, 123);
}

.desc {
    width: 40%;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
