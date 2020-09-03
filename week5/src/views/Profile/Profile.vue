<template>
    <div>
        <h1>Ini Halama Profile {{ ids }}</h1>
    </div>
</template>

<script>
export default {
    name: "profile",
    data() {
        return {
            ids: this.$router.params.id,
        }
    },
}
</script>

<style lang="scss" scoped></style>
