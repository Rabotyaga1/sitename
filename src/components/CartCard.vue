<template>
    <div class="card">
        <img class="card__picture" src="" alt="">
        <div class="card__info">
            <div class="info__wrapper">
                <div class="info__name">
                    <span class="text">Название</span>
                    <span class="text">Модель</span>
                </div>
                <span class="text">Цена</span>
            </div>
            <div class="counter">
                <div class="count">-</div>
                <div class="count" id="plus">+</div>
                <input class="field" type="input">
            </div>
        </div>
        <img class="card__cross" src="../assets/img/del.png" alt="">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .card{
        width: 527px;
        height: 159px;
        background-color: #F1F1F1;
        border: 1px solid #C4C4C4;
        padding: 19px 8px 19px 19px;
        display: flex;
        position: relative;
    }
    .card__picture{
        width: 191px;
        height: 160px;
        background-color: burlywood;
    }
    .card__info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 50%;
        margin-left: 20px;
    }
    .info__wrapper{
        display: flex;
        justify-content: space-between;
    }
    .info__name{
        display: flex;
        flex-direction: column;
    }
    .field{
        width: 56px;
        height: 33px;
        padding: 0 24px;
        font-size: 16px;
        font-family: Rubik;
    }
    .counter{
        width: 108px;
        position: relative;
        height: 37px;
    }
    .control__count {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
    }
    .count{
        width: 24px;
        height: 37px;
        background-color: black;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Rubik;
        font-size: 18px;
        position: absolute;
        cursor: pointer;
        user-select: none;
    }
    #plus {
        position: absolute;
        top: 0;
        right: 0;
    }
    .text{
        font-family: Rubik;
        font-size: 16px;
    }
    .card__cross{
        width: 13px;
        height: 13px;
        position: absolute;
        top: 6px;
        right: 8px;

    }
</style>