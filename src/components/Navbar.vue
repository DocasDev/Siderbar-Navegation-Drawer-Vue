<template>
    <main>
        <button @click="$emit('toggleSidebar')" :class="['btn-menu', btnClass]" type="button">
            <font-awesome-icon :icon="['fa-solid', btnIcon]" />
        </button>
    </main>
</template>

<script>
const activeBtnClass = 'active';
const activeBtnIcon = 'fa-angles-down';
const inactiveBtnIcon = 'fa-angles-right';

export default{
    data(){
        return{
            btnClass: this.activeSidebar ? activeBtnClass : '',
            btnIcon: this.activeSidebar ? activeBtnIcon : inactiveBtnIcon,
        }
    },
    props:{
        activeSidebar: Boolean
    },
    watch:{
        activeSidebar(){
            this.btnClass = this.activeSidebar ? activeBtnClass : '';
            this.btnIcon = this.activeSidebar ? activeBtnIcon : inactiveBtnIcon;
        }
    }
}
</script>

<style scoped>
main{
    display: flex;
    justify-content: space-between;
    width: calc(100% - 20px);
    height: 40px;
    background: #0761c9;
    padding: 10px;
}

main .btn-menu{
    display: block;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: #1579ec;
}

.btn-menu:focus-visible{
    outline: none;
}

.btn-menu svg{
    transition: .5s ease;
    font-size: 1.2rem;
    color: #FFF;
}

.btn-menu.active svg{
    transform: rotate(90deg);
}
</style>