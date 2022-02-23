<script setup>
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}

html,
body{
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
}

h1.title{
  font-size: 2.5rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1.title::after{
  content: '';
  position: absolute;
  width: 3em;
  height: 2px;
  background: #46b0f7;
  margin-top: 1.1em;
}
</style>
