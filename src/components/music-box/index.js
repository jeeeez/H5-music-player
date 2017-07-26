import './index.scss';

import Vue from 'vue';
import template from './index.html';

import VolumeSlider from '@/components/volume-slider';
import MusicCheckBox from '@/components/music-check-box';

const MusicBox = {
	name: 'music-box',

	template,

	props: {
		resource: {
			type: Object,
			required: true
		}
	},

	components: {
		VolumeSlider,
		MusicCheckBox
	},

	data() {
		return {
			volume: 50,
			playing: false
		};
	},

	mounted() {
		this.audio.volume = this.volume / 100;
		// this.playing = true;
	},

	computed: {
		audio() {
			return this.$refs.audio;
		}
	},

	methods: {
		onVolumeChange(volume) {
			this.volume = volume;
			this.audio.volume = this.volume / 100;
		},

		// play() {
		// 	this.audio.play();
		// }
	},
	watch: {
		playing(val) {
			if (val) {
				this.audio.play();
			} else {
				this.audio.pause();
			}
		}
	}
};

export default MusicBox;
