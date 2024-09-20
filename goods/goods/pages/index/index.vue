<template>
	<view class="head">
		<!-- 头部信息，居中，大字 -->
		商品分类
	</view>
	<scroll-view scroll-y="true">
		<view>
			<view class="imgSpace"></view>
			<!-- 靠左，是一个图片的占位，正方形图片 -->
			<view class="textSpace">
				牛奶
				<!-- 中间内容描述的位置，不超过十个字 -->
			</view>
			<view class="jumpArrow">
				<!-- 向右的跳转箭头，靠右 -->
			</view>
		</view>
		<view>
			<view class="imgSpace"></view>
			<!-- 靠左，是一个图片的占位，正方形图片 -->
			<view class="textSpace">
				牛奶
				<!-- 中间内容描述的位置，不超过十个字 -->
			</view>
			<view class="jumpArrow">
				<!-- 向右的跳转箭头，靠右 -->
			</view>
		</view>
	</scroll-view>
</template>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	/* 头部样式 */
	.head {

		text-align: center;
		font-size: 50px;
		/* 根据实际需要调整字体大小 */
		margin-top: 20px;
		margin-bottom: 10px;
		/* 根据需要调整头部与内容的间距 */
	}

	/* scroll-view 样式 */
	.scroll-view {
		height: 80vh;
		/* 根据需要设置scroll-view的高度 */
	}

	/* 每个item的容器样式 */
	.scroll-view view {
		display: flex;
		/* 使用flex布局 */
		align-items: center;
		/* 垂直居中 */
		padding: 10px 0;
		/* 上下padding */
		border-bottom: 1px solid #ccc;
		/* 每个item之间的分割线，根据需要调整 */
	}

	/* 图片占位样式 */
	.imgSpace {
		display: inline-block;
		width: 60px;
		/* 根据实际图片大小调整 */
		height: 60px;
		/* 正方形，所以宽高一致 */
		background-color: #f0f0f0;
		/* 占位背景色，可以根据需要调整 */
		margin-left: 10px;
		/* 与左边界的距离 */
	}

	/* 文本描述样式 */
	.textSpace {
		display: inline-block;
		flex: 1;
		/* 占据剩余空间 */
		margin: 0 10px;
		/* 左右margin */
		font-size: 14px;
		/* 字体大小 */
		white-space: nowrap;
		/* 不换行 */
		overflow: hidden;
		/* 超出隐藏 */
		text-overflow: ellipsis;
		/* 超出显示省略号 */
	}

	/* 跳转箭头样式 */
	.jumpArrow {
		display: inline-block;
		width: 20px;
		/* 箭头大小 */
		height: 20px;
		/* 箭头大小 */
		background-image: url('path/to/your/arrow.png');
		/* 箭头图片路径 */
		background-size: cover;
		/* 覆盖整个元素 */
		margin-right: 10px;
		/* 与右边界的距离 */
	}
</style>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>