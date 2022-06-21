<template>
    <div class="header">
        <div class="header-container">
            <div
                class="header-analytics"
                @click="$router.push('analytics')"
            >Аналитика</div>
            <div
                class="header-auth"
                @click="$router.push('auth')"
            >Авторизация</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderVue'
}
</script>

<style>
.header {
    background: #505771;
    margin: 0px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
}

.header-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}

.header-auth {
    justify-self: flex-end;
}

.header-container div {
    font-size: 5px;
    color: #c4c7d0;
    cursor: pointer;
}

.header-container div:hover {
    color: aliceblue;
}

</style>