import './index.scss';

import Vue from 'vue';
import template from './index.html';


const MusicCheckBox = {
	name: 'music-check-box',

	props: {
		value: {
			type: Boolean,
			required: true
		}
	},

	template,

	methods: {
		toggle() {
			this.$emit('input', !this.value);
		}
	}
};

export default MusicCheckBox;
