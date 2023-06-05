<template>
    <div class="column-wrapper">
        <h3 class="column-name">{{ this.segmentName }}</h3>
        <ul>
            <li v-for="cart in segmentCarts">
                <dealCart  
                :client="cart.OFFER_FIRST_RESPONSIBLE" 
                :offerId="cart.OFFER_ID"
                :phone="cart.CONTACT_TITLE"
                :segmentName="cart.SEGMENT_NAME"
                :key="index"/>
            </li>
        </ul>

    </div>
</template>
<script>
import dealCart from './deal-cart.vue';
    export default {
        props: {
            segmentName: String,
            segmentCarts: Array
        },
        components: {
            dealCart
        }
    }
</script>
<style scoped>
    .column-wrapper{
        margin-right: 12px;
        height: 100%;
    }
    .column-name{
        font-size: 16px;
        text-align: center;
        font-weight: 400;
    }
    .column-wrapper ul {
        list-style-type: none;
        padding: 8px;
    }
    .column-wrapper li {
        margin-bottom: 24px;
    }
</style>