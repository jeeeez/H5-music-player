import './index.scss';

import Vue from 'vue';
import template from './index.html';

import MusicBox from '@/components/music-box';

import rainyMoodResource from '@/assets/music/rainymood/rainymood.m4a';

const RainyMood = {
	name: 'rainy-mood',
	components: {
		MusicBox
	},
	template,
	data() {
		return {
			resources: [{
				name: 'Rain',
				volume: 70,
				URL: rainyMoodResource
			},{
				name: 'Tea',
				volume: 40,
				URL: 'http://cdn.calm.com/scenes/scene-Qqkzy9k7Eo.m4a?v=1418162240715'
			}]
		};
	}
};

export default RainyMood;
