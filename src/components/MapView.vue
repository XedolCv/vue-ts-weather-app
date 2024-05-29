<template>
  <div id="map">
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {initMapView} from "@/components/MapViewClass";
onMounted(() => {
 initMapView();
})
</script>
<style scoped>
#map {
  width: 500px;
  height: 500px;
}
</style>
