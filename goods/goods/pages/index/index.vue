<template>
	<view class="head">
		<!-- 头部信息，居中，大字 -->
		商品分类
	</view>
	<hr />
	<scroll-view scroll-y="true">
		<view v-for="(item, index) in classify" :key="index" @click="handleTap(item, index)">
			<view class="content">
				<view class="imagePlace">
					<image src="../../static/show.png" mode="widthFix"></image>
				</view>
				<view class="textplace">
					{{item}}
				</view>
				<view class="jumpArrow">
					<image src="../../static/箭头.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import classify from '../../static/classify.json'
	export default {
		data() {
			return {
				title: 'Hello',
				classify: classify.classify
			}
		},
		onLoad() {
			console.log(this.classify[0]) // 柜台
			console.log(this.classify[1]) // 第一排左
		},
		methods: {
			handleTap(item, index) {

				console.log("存储数据")
				// 将点击的item和index存储到本地
				uni.setStorageSync('clickedItem', item);
				uni.setStorageSync('clickedIndex', index);
				// 可以在这里添加其他逻辑，比如跳转前的操作
				uni.navigateTo({
					url: '/pages/info/info'
				})
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		/* 确保边距和内边距不会增加元素的总宽度 */
	}

	.head {
		text-align: center;
		font-size: 24px;
		/* 适当减小字体大小 */
		font-weight: bold;
		/* 加粗 */
		margin: 20px 0;
		/* 垂直方向的边距 */
		color: #333;
		/* 深色文本 */
	}

	.scroll-view {
		height: 80vh;
		padding: 10px;
		/* 增加内边距 */
	}

	.content {
		display: flex;
		align-items: center;
		/* 垂直居中子元素 */
		margin-bottom: 20px;
		/* 增加底部边距 */
		background-color: #fff;
		/* 背景色 */
		border-radius: 10px;
		/* 圆角 */
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		/* 阴影效果 */
		padding: 15px;
		/* 内边距 */
	}

	.imagePlace {
		flex-shrink: 0;
		/* 防止图像在小屏幕上被压缩 */
		margin-right: 15px;
		/* 统一边距 */
	}

	.imagePlace image {
		width: 80px;
		/* 固定宽度 */
		height: 80px;
		/* 固定高度，保持宽高比 */
		object-fit: cover;
		/* 裁剪并填充图像 */
		border-radius: 50%;
		/* 圆形图像 */
	}

	.textplace {
		flex-grow: 1;
		/* 占据剩余空间 */
		font-size: 7vw;
		/* 适当减小字体大小 */
		font-weight: 500;
		/* 中等字重 */
		color: #333;
		/* 深色文本 */
		line-height: 1.4;
		/* 行高 */
		padding: 0;
		/* 移除内边距 */
		margin-right: 15px;
		/* 统一边距 */
	}

	.jumpArrow {
		flex-shrink: 0;
		/* 防止箭头在小屏幕上被压缩 */
	}

	.jumpArrow image {
		width: 30px;
		/* 适当减小箭头大小 */
		height: 30px;
		/* 保持宽高比 */
	}

	/* 	* {
		margin: 0;
		padding: 0;
	}
	.head {

		text-align: center;
		font-size: 50px;
		margin-top: 20px;
		margin-bottom: 10px;
	}

	.scroll-view {
		height: 80vh;
	}

	.navigator {
		display: flex;
		flex-direction: column;
	}

	.content {
		display: flex;
		flex-direction: row;
	}

	.textplace {
		display: flex;
		width: 60vw;
		border: 1px red solid;
		padding-left: 20px;
		padding-top: 30px;
		font-size: 30px;
		font-weight: bolder;

	}

	.imagePlace {
		margin-right: 10px;
	}

	.imagePlace image {
		width: 25vw;
		box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
	}

	.jumpArrow image {
		width: 10vw;
		margin-top: 30px;
	} */
</style>