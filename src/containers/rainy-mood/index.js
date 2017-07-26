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
				URL: rainyMoodResource
			}]
		};
	}
};

export default RainyMood;
