// seajs 的简单配置
seajs.config({
	base:'../',
	alias: {
		//插件js
		'jquery': 'less_demo/plugin/jquery/jquery',
		'lessjs':'https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.1/less.min',

		//样式
		'style':'less_demo/css/style.css',
		//模块入口js
		'index':'less_demo/js/index'
	}
});