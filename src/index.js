import '@/assets/styles/index.scss';

import Vue from 'vue';
import RainyMood from '@/containers/rainy-mood';
import FastClick from 'fastclick';

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

new Vue({
	components: {
		RainyMood
	},
	template: `<div id="container"><rainy-mood></rainy-mood></div>`
}).$mount('app');

