<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
 name: "default"
})
</script>

<template>
	<BaseHeader></BaseHeader>
		<h2>layout</h2>
		<slot />
	<BaseFooter></BaseFooter>
</template>

<style lang="stylus">
</style>