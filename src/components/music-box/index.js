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
			playing: false
		};
	},

	mounted() {
		this.audio.volume = this.resource.volume / 100;
	},

	computed: {
		audio() {
			return this.$refs.audio;
		},
		volume() {
			return this.resource.volume;
		}
	},

	methods: {},
	watch: {
		volume(v) {
			this.audio.volume = v / 100;
		},
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
