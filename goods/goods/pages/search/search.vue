<template>
	<view class="search-page">
		<!-- 标题部分 -->
		<view class="title">立即搜索</view>

		<!-- 搜索栏部分 -->
		<view class="search-bar">
			<view class="search-icon">
				<image src="../../static/箭头.png" mode="widthFix"></image>
			</view>
			<input type="text" class="search-input" placeholder="搜索商品" @confirm="search" />
			<view class="search-button" @click="goToSearch">
				<image src="../../static/箭头.png" mode="widthFix"></image>
			</view>
		</view>

		<!-- 最近搜索部分 -->
		<view class="recent-search">
			<view class="recent-title">最近搜索</view>
			<view class="recent-list">
				<view class="recent-item" v-for="(item, index) in recentSearches" :key="index"
					@click="goToSearch(item)">
					{{ item }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recentSearches: ['牛奶', '面包', '鸡蛋', '水果'] // 示例数据
			}
		},
		methods: {
			search(event) {
				// 处理搜索逻辑
				console.log('搜索内容:', event.target.value);
			},
			goToSearch() {
				// 跳转到搜索结果页面
				uni.navigateTo({
					url: "/pages/result/result"
				});
			}
		}
	}
</script>

<style>
	.search-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
	}

	.title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	.search-bar {
		display: flex;
		align-items: center;
		background-color: #f2f2f2;
		border-radius: 10px;
		padding: 10px;
		margin-bottom: 20px;
	}

	.search-icon {
		margin-right: 10px;
	}

	.search-icon image {
		width: 20px;
		height: 20px;
	}

	.search-input {
		flex: 1;
		border: none;
		outline: none;
		background-color: transparent;
	}

	.search-button {
		margin-left: 10px;
		padding: 5px;
	}

	.search-button image {
		width: 20px;
		height: 20px;
	}

	.recent-search {
		width: 100%;
	}

	.recent-title {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.recent-list {
		display: flex;
		flex-wrap: wrap;
	}

	.recent-item {
		background-color: #eaeaea;
		border-radius: 15px;
		padding: 5px 10px;
		margin: 5px;
		font-size: 14px;
	}
</style>