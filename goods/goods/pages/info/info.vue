<template>
	<view class="head">
		<!-- 头部信息，居中，大字 -->
		分类结果
	</view>
	<hr />
	<scroll-view scroll-y="true">
		<!-- 使用v-for循环显示showData中的每个商品 -->
		<view v-for="(item, index) in showData" :key="index"
			:class="{ 'content': true, 'active': currentPressedIndex === index }" @click="pressDown(item, index)">
			<view class="imagePlace">
				<image src="../../static/show.png" mode="widthFix"></image>
			</view>
			<view class="textplace">
				<text>名称：{{ item.goodname }}</text><br />
				<text>规格：{{ item.Specification }}</text><br />
				<text>单价：{{ item.price }}</text>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import data from '../../static/data.json'

	export default {
		data() {
			return {
				title: 'Hello',
				jsonData: data,
				showData: null,
				currentPressedIndex: null // 添加一个属性来记录当前被点击的view的索引
			};
		},
		onLoad() {
			const jsonKeys = Object.keys(this.jsonData);
			console.log(jsonKeys);
			// 获取存储的值
			var a = uni.getStorageSync("clickedItem");
			console.log(a);
			// 判断item是否在keys中
			if (jsonKeys.includes(a)) {
				console.log("这个种类存在内容");
				var needs = this.jsonData[a];
				console.log("needs");
				console.log(needs);
				this.showData = needs;
				console.log("this");
				console.log(this.showData);
			} else {
				console.log("这个种类不存在内容");
			}
		},
		methods: {
			pressDown(item, index) {
				this.currentPressedIndex = index; // 更新当前被点击的view的索引
				console.log(item)
				var good = {
					"classify": item.classify,
					"goodid": item.goodid,
					joinedTime: this.getCurrentTime()
				}
				console.log(good)

				var historyList = uni.getStorageSync('historyList');

				// 如果historyList不是数组，则初始化为空数组
				if (!historyList) {
					historyList = [];
				}

				// 检查数组中是否已经存在相同的good对象
				var exists = historyList.some(existingGood =>
					existingGood.goodid === good.goodid && existingGood.classify === good.classify
				);

				// 如果不存在相同的good对象，则添加到数组中
				if (!exists) {
					historyList.push(good);
					// 将更新后的数组存回StorageSync
					uni.setStorageSync('historyList', historyList);
				}

			},
			getCurrentTime() {
				// 创建一个新的Date对象
				var now = new Date();
				// 将Date对象转换为字符串格式
				return now.toLocaleString(); // 或者使用 now.toISOString() 获取ISO格式的时间字符串
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
		font-size: 5vw;
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

	.active {
		background-color: #ddd;
		/* 当view被点击时的背景颜色 */
	}
</style>