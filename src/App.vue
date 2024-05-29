<script setup lang="ts">
import {onMounted, ref} from 'vue'
import MapView from "@/components/MapView.vue";
import {setMapView} from "@/components/MapViewClass";

const lat = ref(0)
const lng = ref(0)
function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      lat.value = position.coords.latitude
      lng.value = position.coords.longitude
      setMapView(lat.value, lng.value)
    })
  }
}
</script>

<template>
  <header>
    <button class="button" @click=getLocation()>GetLocation</button>
    {{lat}} , {{lng}}
    <div class="wrapper">
    </div>
  </header>

  <body class="wrapper">
    <MapView/>
  </body>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #04AA6D;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}
.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
