<template>
  <main>
    <Sidebar 
    @setActiveSideBar="setActiveSideBar"
    :activeSidebar="activeSidebar"
    />

    <Content 
    :toggleSidebar="toggleSidebar"
    :activeSidebar="activeSidebar"
    >
      <slot></slot>
    </Content>
    
  </main>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Content from './Content.vue';

export default {
    data(){
      return{
        activeSidebar: true,
      }
    },
    components:{
      Sidebar,
      Content,
    },
    methods:{
      toggleSidebar(){
        this.activeSidebar = !this.activeSidebar;
      },
      setActiveSideBar(value){
        this.activeSidebar = value;
      }
    }
}
</script>

<style scoped>
main{
  display: flex;
}
</style>