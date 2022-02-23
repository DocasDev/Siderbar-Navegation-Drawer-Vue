<template>
    <div class="content">
        <Navbar
        @toggleSidebar="toggleSidebar"
        :activeSidebar="activeSidebar"
        />

        <div class="container-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
    props:{
        toggleSidebar: Function,
        activeSidebar: Boolean,
    },
    components:{
      Navbar,
    },
}
</script>

<style scoped>
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #d5dee9;
  width: 100%;
  height: 100vh;
}

.content .container-content{
    display: flex;
    flex-direction: column;
    padding: 20px;
}
</style>