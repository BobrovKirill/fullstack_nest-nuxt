<template>
	<div class="meta">
		<div class="meta__date" :class="{ dark: isDarkStyle }">
			<time :datetime="date">{{ date }}&nbsp;&mdash;&nbsp;</time>
			<a :href="rubricUrl" rel="noopener">{{ rubric }}</a>
		</div>
		<div class="meta__rubric">
			<span>{{ rubricType }}</span>
			<svg width="32" height="32">
				<use :xlink:href="rubricTypeIcon"></use>
			</svg>
			<a
				v-if="commentsCounter > 0"
				:href="commentsUrl"
				class="meta__comment-counter"
			>
				<span>{{ commentsCounter }}</span>
				<svg width="32" height="32">
					<use xlink:href="#icon-comment_counter"></use>
				</svg>
			</a>
			<hr class="meta__hr" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'TheMeta',
	props: {
		date: String,
		isDarkStyle: Boolean,
		rubric: String,
		rubricUrl: String,
		metaType: String,
		commentsUrl: String,
		commentsCounter: Number,
	},
	data() {
		return {
			isDark: true,
			rubricType: '',
			rubricTypeIcon: '',
			metaTypes: {
				video: {
					icon: 'videos',
					name: 'видео',
				},
				article: {
					icon: 'wright',
					name: 'статья',
				},
				interview: {
					icon: 'wright',
					name: 'интервью',
				},
				news: {
					icon: 'wright',
					name: 'новость',
				},
				gallery: {
					icon: 'gallery',
					name: 'галерея',
				},
				quote: {
					icon: 'quote',
					name: 'цитата',
				},
			},
		};
	},
	mounted() {
		this.rubricType = this.metaTypes[this.metaType].name;
		this.rubricTypeIcon = `#icon__rubric_${this.metaTypes[this.metaType].icon}`;
	},
};
</script>

<style scoped></style>
