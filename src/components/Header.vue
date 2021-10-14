<template>
    <div class="header">
        <div class="header__up">
            <span class="logo">САЙТNAME</span>
        <div class="basket">
            <svg class="basket__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/>
            </svg>
            <!-- <svg class="basket__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z"/>
            </svg> -->
        </div>
        </div>
        <div class="header__navbar">
            <span class="navbar-item">Мужское</span>
            <span class="navbar-item">Женское</span>
            <span class="navbar-item">Аксессуары</span>
            <span class="navbar-item">Бренды</span>
            <span class="navbar-item" id="sale">Sale%</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        background-color: black;
        display: flex;
        flex-direction: column;
    }
    .header__up{
        width: 100%;
        height: 64px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: space-between;       
    }
    .logo{
        color: white;
        margin-left: 68px;
        font-size: 24px;
        font-family: Rubik Mono One;
    }
    .basket{
        margin-right: 68px;
    }
    .basket__icon{
        fill: white;
        cursor: pointer;
        
    }
    .header__navbar{
        width: 100%;
        height: 64px;
        background-color: #F1F1F1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .navbar-item{
        font-size: 18px;
        cursor: pointer;
        font-family: Rubik;
        font-weight: 400;
        margin-right: 42px;
    }
    #sale{
        color: #FF3E01;
    }
</style>

