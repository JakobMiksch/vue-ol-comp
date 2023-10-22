<template>

<p>EXTRA OL</p>
<p>{{ layers ? layers.length : "UNGÜLTIG" }}</p>

</template>

<script lang="ts" setup>
import { useMap } from '@/composables/useMap';
import Vue from 'vue'

const {layers} = useMap()
</script>