<template>
    <div class="cart-wrapper">
        <div class="client">{{ client }}</div>
        <div class="phone">{{ phone }}</div>
        <div class="offer-id">#{{ offerId }}</div>
        <div class="offer-section">{{ segmentName }}</div>
    </div>
</template>
<script>
    export default {
        props: {
            client: String,
            offerId: Number,
            phone: String,
            segmentName: String 
        }
    }
</script>
<style scoped>
    .cart-wrapper {
        background-color: #e1e0e0;
        padding: 8px;
        border-radius: 8px;
    }
    .cart-wrapper div{
        margin-bottom: 12px;
        font-size: 12px;
    }
</style>