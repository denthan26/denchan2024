<template>
	<view class="head">
		<!-- 头部信息，居中，大字 -->
		最近查看
	</view>
	<hr />
	<scroll-view scroll-y="true">
		<view>
			<view class="content" v-for="(item, index) in showData" :key="index">
				<view class="imagePlace">
					<image src="../../static/show.png" mode="widthFix"></image>
				</view>
				<view class="textplace">
					<text>名称：{{item.goodname}}</text><br />
					<text>规格：{{ item.Specification }}</text><br />
					<text>单价：{{ item.price }}</text>
				</view>
			</view>
		</view>

	</scroll-view>
</template>

<script>
	import classify from '../../static/classify.json'
	import data from '../../static/data.json'

	export default {
		data() {
			return {
				// 定义一个变量来存储过滤后的历史记录
				filteredHistoryList: [],
				classify: classify.classify,
				jsonData: data,
				showData: []
			}
		},
		onShow() {
			this.loadAndFilterHistoryList();
			//console.log("---------")

			var data = uni.getStorageSync('historyList')
			this.traverseHistoryList(data)
		},
		methods: {
			loadAndFilterHistoryList() {
				// 尝试从StorageSync中获取已有的数组
				var historyList = uni.getStorageSync('historyList');

				// 如果historyList不是数组，则初始化为空数组
				if (!historyList) {
					historyList = [];
					this.filteredHistoryList = historyList;
					uni.setStorageSync('historyList', historyList);
					return;
				}

				// 过滤掉超过36小时的记录
				var now = new Date();
				var thirtySixHoursAgo = new Date(now.getTime() - 36 * 60 * 60 * 1000); // 36小时前的日期
				this.filteredHistoryList = historyList.filter(item => {
					var itemDate = new Date(item.joinedTime);
					return itemDate >= thirtySixHoursAgo;
				});

				// 将过滤后的数组存回StorageSync
				uni.setStorageSync('historyList', this.filteredHistoryList);
			},
			traverseHistoryList(data) {
				// 清空之前的showData
				this.showData = [];

				// 遍历data数组并打印每个元素
				data.forEach((item, index) => {
					var goodCla = this.classify[item.classify];
					var goodIdT = item.goodid; // 确保这里是goodid，不是goodId

					// 检查分类是否存在于jsonData中
					if (goodCla && this.jsonData[goodCla]) {
						var xinxi = this.jsonData[goodCla];
						xinxi.forEach(good => {
							if (good.goodid === goodIdT) {
								console.log("target");
								console.log(good);

								// 检查是否已经添加过这个good对象
								var alreadyExists = this.showData.some(showItem =>
									showItem.goodid === good.goodid && showItem.classify === good
									.classify
								);

								// 如果没有添加过，则添加到showData中
								if (!alreadyExists) {
									this.showData.push(good);
								}
							}
						});
					}
				});

				console.log("-----------------------------------------------------");
				console.log(this.showData);
			},
			getCurrentTime() {
				// 创建一个新的Date对象
				var now = new Date();
				// 将Date对象转换为ISO格式的时间字符串
				return now.toISOString();
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
</style>