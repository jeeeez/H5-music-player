import './index.scss';

import Vue from 'vue';
import template from './index.html';


const VolumeSlider = {
	name: 'volume-slider',
	props: {
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 100
		},
		step: {
			type: Number,
			default: 1
		},
		value: {
			type: Number,
			required: true
		}
	},
	template,
	data() {
		return {
			startPosition: 0,
			startX: 0,
			newPosition: null,
			hovering: false,
			dragging: false
		};
	},
	computed: {
		sliderSize() {
			return parseInt(getElementWidth(this.$refs.slider), 10);
		},
		currentPosition() {
			return `${ (this.value - this.min) / (this.max - this.min) * 100 }%`
		}
	},
	methods: {
		onMouseEnter() {
			this.hovering = true;
		},
		onMouseLeave() {
			this.hovering = false;
		},
		onButtonDown(event) {
			event.preventDefault();

			this.onDragStart(event);
			window.addEventListener('mousemove', this.onDragging);
			window.addEventListener('mouseup', this.onDragEnd);
			window.addEventListener('contextmenu', this.onDragEnd);
		},

		onDragStart(event) {
			this.dragging = true;
			this.startX = event.clientX;

			this.startPosition = parseFloat(this.currentPosition);
		},

		onDragging(event) {
			if (!this.dragging) return;

			const diff = (event.clientX - this.startX) / this.sliderSize * 100;

			this.newPosition = diff + this.startPosition;

			this.setPosition(this.newPosition);
		},

		onDragEnd(event) {
			if (!this.dragging) return;

			setTimeout(() => {
				this.dragging = false;
				this.setPosition(this.newPosition);
			}, 0);

			window.removeEventListener('mousemove', this.onDragging);
			window.removeEventListener('mouseup', this.onDragEnd);
			window.removeEventListener('contextmenu', this.onDragEnd);
		},

		setPosition(newPosition) {
			if (newPosition < 0) {
				newPosition = 0;
			} else if (newPosition > 100) {
				newPosition = 100;
			}

			// 每步所占的百分比
			const widthPerStep = 100 / ((this.max - this.min) / this.step);
			const movedSteps = Math.round(newPosition / widthPerStep);

			let value = movedSteps * widthPerStep * (this.max - this.min) * 0.01 + this.min;
			value = parseFloat(value.toFixed(0));

			this.$emit('input', value);

			if (!this.dragging && value !== this.oldValue) {
				this.oldValue = value;
			}
		}
	}
};

export default VolumeSlider;


function getElementWidth(element) {
	return element.offsetWidth;
}
