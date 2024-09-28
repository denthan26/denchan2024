<template>
	<view class="head">
		<!-- 头部信息，居中，大字 -->
		分类结果
	</view>
	<hr />
	<scroll-view scroll-y="true">
		<view v-for="(item, index) in showData" :key="index" @click="pressDown()">
			<view class="content">
				<view class="imagePlace">
					<image src="../../static/show.png" mode="widthFix"></image>
				</view>
				<view class="textplace">
					<text>名称：{{item.goodname}}</text><br />
					<text>规格：{{item.Specification}}</text><br />
					<text>单价：{{item.price}}</text>
				</view>
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
				showData: null
			}
		},
		onLoad() {
			const jsonKeys = Object.keys(this.jsonData)
			console.log(jsonKeys)
			// 获取存储的值
			var a = uni.getStorageSync("clickedItem")
			console.log(a)
			// 判断item是否在keys中
			if (jsonKeys.includes(a)) {
				console.log("这个种类存在内容")
				//var needs = this.jsonData.a
				console.log(this.jsonData[a])
				var needs = this.jsonData[a]
				console.log("needs")
				console.log(needs)
				this.showData = needs
				console.log("this")
				console.log(this.showData)
			} else {
				console.log("这个种类不存在内容")
			}
		},

		methods: {
			pressDown() {
				// 改变一个背景颜色变灰
			}
		}
	}
</script>