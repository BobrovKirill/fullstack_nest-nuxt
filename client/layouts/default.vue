<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TheDefault',
});
</script>

<template>
	<BaseRing></BaseRing>
	<BaseHeader></BaseHeader>
	<main id="main">
		<slot />
	</main>
	<BaseFooter></BaseFooter>
</template>

<style lang="stylus"></style>
