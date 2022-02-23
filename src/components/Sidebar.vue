<template>
  <div :style="{width: sidebarWidth + 'px'}" class="sidebar">
      <img src="@/assets/logo.svg" class="sidebar-logotype" alt="Logotype Vue">
      <Menu />
    </div>
</template>

<script>
import Menu from './Menu.vue';

const initalWidth = 300;

export default {
    data(){
        return{
            width: document.documentElement.clientWidth,
            sidebarWidth: initalWidth
        }
    },
    props:{
        activeSidebar: Boolean,
    },
    components:{
      Menu,
    },
    mounted(){
      let timeOutFunctionId;
      const f = this.getDimensions;
      window.addEventListener('resize', () => {
        clearTimeout(timeOutFunctionId);
        timeOutFunctionId = setTimeout(f, 500);
      });
      this.checkActiveSidebar();
      this.checkSidebarWidth();
    },
    unmounted(){
      window.removeEventListener('resize', this.getDimensions);
    },
    methods:{
      getDimensions(){
        this.width = document.documentElement.clientWidth;
        this.checkActiveSidebar();
      },
      setSidebarWidth(width){
        this.sidebarWidth = width;
      },
      checkActiveSidebar(){
        if(this.width <= 768){
            this.$emit('setActiveSideBar', false);
        }else{
            this.$emit('setActiveSideBar', true);
        }
      },
      checkSidebarWidth(){
        if(this.activeSidebar){
          this.setSidebarWidth(initalWidth);
        }else{
          this.setSidebarWidth(0);
        }
      }
    },
    watch:{
      with(){
        this.checkActiveSidebar();
      },
      activeSidebar(){
        this.checkSidebarWidth();
      }
    }
}
</script>

<style scoped>
.sidebar{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1579ec;
  width: 300px;
  height: calc(100vh - 80px);
  transition: .5s ease;
  padding: 40px 0;
}

.sidebar .sidebar-logotype{
    display: block;
    width: 100px;
    margin-bottom: 30px;
}
</style>