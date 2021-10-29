<template>
    <div class="cart">
        <div class="cart__filled" v-if="status">
            <Card></Card>
            <div class="cart__checkout">
                <div class="checkout__card">
                    <span class="title">Информация о заказе</span>
                    <div class="items">
                        <div class="item__info">
                            <span class="text">Название</span>
                            <span class="text">Цена</span>
                        </div>
                        <div class="item__info">
                            <span class="text">Название</span>
                            <span class="text">Цена</span>
                        </div>
                    </div>
                    <div class="result">
                        <div class="result__upper">
                            <span class="result__text">Итого:</span>
                            <span class="result__text">Цена</span>
                        </div>
                        <span class="delivery__text">*Доставка включена в стоимость</span>
                    </div>
                </div>
                <input class="order__button" type="button" value="Заказать">
            </div>
        </div>
        <div class="cart__empty" v-else>
            <div class="empty-cart__text">
                <span>Тут очень... пусто</span>
                <img src="../assets/img/sad.png" alt="">
            </div>
            <input class="empty-cart__button" type="button" value="Перейти в магазин">
        </div>
    </div>
</template>

<script>
import Card from "./CartCard.vue"
export default {
    components:{
        Card
    },
    data() {
        return{
            status: 1,
        }
    }
}
</script>

<style scoped>
    .cart{
        width: 80%;
        height: 100%;
    }
    .cart__empty{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .empty-cart__text{
        display: flex;
        align-items: center;
        font-family: Rubik;
        font-weight: 600;
        font-size: 44px;
    }
    .empty-cart__button{
        margin-top: 52px;
        width: 262px;
        height: 61px;
        background-color: black;
        border: none;
        color: white;
        font-family: Rubik;
        font-weight: 600;
        font-size: 24px;
    }
    .cart__filled{
        width: 100%;
        height: 100%;
    }
    .checkout__card{
        background-color: #F1F1F1;
        border: 1px solid #C4C4C4;
        display: flex;
        flex-direction: column;
        padding: 10px;
        width: fit-content;
    }
    .order__button{
        margin-top: 10px;
        width: 264px;
        height: 61px;
        border: none;
        background-color: black;
        color: white;
        font-family: Rubik;
        font-size: 24px;
        cursor: pointer;
    }
    .items{
        margin-top: 25px;
        display: flex;
        flex-direction: column;
    }
    .item__info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 242px;
    }
    .result{
        width: 242px;
        margin-top: 25px;
    }
    .text{
        font-size: 16px;
        font-family: Rubik;
    }
    .title{
        font-size: 18px;
        font-family: Rubik;
        width: 242px;
    }
    .result__upper{
        display: flex;
        justify-content: space-between;
    }
    .result__text{
        font-size: 20px;
        font-family: Rubik;
        font-weight: 600;
    }
    .delivery__text{
        font-size: 12px;
        font-family: Rubik;
    }
</style>