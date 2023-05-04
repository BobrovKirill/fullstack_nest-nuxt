<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
 name: "default"
})
</script>

<template>
	<BaseRing></BaseRing>
	<BaseHeader></BaseHeader>
		<slot />
	<BaseFooter></BaseFooter>
</template>

<style lang="stylus">
</style>