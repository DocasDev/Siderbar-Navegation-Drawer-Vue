<template>
  <nav>
        <ul>
            <li>
              <router-link to="/">Dashboard</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
        </ul>
      </nav>
</template>

<script setup>

</script>

<style scoped>
nav{
    display: flex;
    flex-direction: column;
    align-items: center;
}

nav ul{
    display: flex;
    flex-direction: column;
}

nav ul li{
    list-style: none;
    padding: 7px 0;
    text-align: center;
}

nav ul li a{
    display: block;
    font-size: 1.2rem;
    color: #FFF;
    text-decoration: none;
}
</style>