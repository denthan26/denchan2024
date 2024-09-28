<template>
	<view class="head">
		<!-- 头部信息，居中，大字 -->
		搜索结果
	</view>
	<hr />
	<scroll-view scroll-y="true">
		<view>
			<view class="content">
				<view class="imagePlace">
					<image src="../../static/show.png" mode="widthFix"></image>
				</view>
				<view class="textplace">
					<text>名称：旺仔牛奶</text><br />
					<text>规格：500ml/罐</text><br />
					<text>单价：5元</text>
				</view>
			</view>
		</view>
		<view>
			<view class="content">
				<view class="imagePlace">
					<image src="../../static/show.png" mode="widthFix"></image>
				</view>
				<view class="textplace">
					<text>名称：旺仔牛奶</text><br />
					<text>规格：500ml/罐</text><br />
					<text>单价：5元</text>
				</view>
			</view>
		</view>
		<view>
			<view class="content">
				<view class="imagePlace">
					<image src="../../static/show.png" mode="widthFix"></image>
				</view>
				<view class="textplace">
					<text>名称：旺仔牛奶</text><br />
					<text>规格：500ml/罐</text><br />
					<text>单价：5元</text>
				</view>
			</view>
		</view>
		<view>
			<view class="content">
				<view class="imagePlace">
					<image src="../../static/show.png" mode="widthFix"></image>
				</view>
				<view class="textplace">
					<text>名称：旺仔牛奶</text><br />
					<text>规格：500ml/罐</text><br />
					<text>单价：5元</text>
				</view>
			</view>
		</view>
		<view>
			<view class="content">
				<view class="imagePlace">
					<image src="../../static/show.png" mode="widthFix"></image>
				</view>
				<view class="textplace">
					<text>名称：旺仔牛奶</text><br />
					<text>规格：500ml/罐</text><br />
					<text>单价：5元</text>
				</view>
			</view>
		</view>
		<view>
			<view class="content">
				<view class="imagePlace">
					<image src="../../static/show.png" mode="widthFix"></image>
				</view>
				<view class="textplace">
					<text>名称：旺仔牛奶</text><br />
					<text>规格：500ml/罐</text><br />
					<text>单价：5元</text>
				</view>
			</view>
		</view>
		<view>
			<view class="content">
				<view class="imagePlace">
					<image src="../../static/show.png" mode="widthFix"></image>
				</view>
				<view class="textplace">
					<text>名称：旺仔牛奶</text><br />
					<text>规格：500ml/罐</text><br />
					<text>单价：5元</text>
				</view>
			</view>
		</view>
		<view>
			<view class="content">
				<view class="imagePlace">
					<image src="../../static/show.png" mode="widthFix"></image>
				</view>
				<view class="textplace">
					<text>名称：旺仔牛奶</text><br />
					<text>规格：500ml/罐</text><br />
					<text>单价：5元</text>
				</view>
			</view>
		</view>
		<view>
			<view class="content">
				<view class="imagePlace">
					<image src="../../static/show.png" mode="widthFix"></image>
				</view>
				<view class="textplace">
					<text>名称：旺仔牛奶</text><br />
					<text>规格：500ml/罐</text><br />
					<text>单价：5元</text>
				</view>
			</view>
		</view>
		<view>
			<view class="content">
				<view class="imagePlace">
					<image src="../../static/show.png" mode="widthFix"></image>
				</view>
				<view class="textplace">
					<text>名称：旺仔牛奶</text><br />
					<text>规格：500ml/罐</text><br />
					<text>单价：5元</text>
				</view>
			</view>
		</view>

	</scroll-view>
</template>

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