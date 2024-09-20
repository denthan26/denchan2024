<!-- <template>
	<view>
		<image src="../../static/001.jpg" mode=""></image>
	</view>
</template> -->
<!-- <template>
	<view>
		<view v-for="(img, index) in images" :key="index">
			<image :src="img" ></image>
		</view>
	</view>
</template> -->

<template>
	<view class="">{{n}}</view>
	<view v-for="(item, index) in goodData">
		{{item.detail}} <text>...</text> {{item.name}}

	</view>
</template>
<script>
	import {
		name,
		myData
	} from '@/static/myData.json'

	export default {
		data() {
			return {
				title: 'denchan',
				goodData: myData,
				n: name
			}
		},
		onLoad() {
			console.log("hello");
			console.log(myData)
		},
		methods: {}
	}
</script>

<!-- 
<script>
export default {
  data() {
    return {
      // 图片数组，从001.jpg到439.jpg
      images: Array.from({ length: 439 }, (_, i) => `../../static/${(i + 1).toString().padStart(3, '0')}.jpg`)
    };
  }
};
</script>
 -->