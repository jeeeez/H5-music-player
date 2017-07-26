import '@/assets/styles/index.scss';

import Vue from 'vue';
import RainyMood from '@/containers/rainy-mood';


new Vue({
	components: {
		RainyMood
	},
	template: `<div id="container"><rainy-mood></rainy-mood></div>`
}).$mount('app');

// import MusicBox from '@/assets/scripts/music-box';
// import RainyLayer from '@/assets/scripts/rainy-layer';



// function initRainyLayer() {
// 	const rainyLayerCanvas = document.getElementById('rainy-layer');
// 	rainyLayerCanvas.width = document.body.offsetWidth;
// 	rainyLayerCanvas.height = document.body.offsetHeight;

// 	const rainyLayer = new RainyLayer(rainyLayerCanvas);

// 	return rainyLayer;
// }


// function initMusicBoxes() {
// 	const musicBox = new MusicBox(rainyMoodResource, {
// 		autoplay: false
// 	});
// 	musicBox.renderTo(document.getElementById('container'));
// }


// initRainyLayer();
// initMusicBoxes();
