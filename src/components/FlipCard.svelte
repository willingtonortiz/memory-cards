<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ReloadIcon from './icons/ReloadIcon.svelte';

	const dispatch = createEventDispatcher();

	export let isFlipped = false;
	export let question = '';
	export let answer = '';

	const toggleCard = () => {
		isFlipped = !isFlipped;

		dispatchToggled(isFlipped);
	};

	const dispatchToggled = (isFlipped: boolean) => {
		dispatch('toggled', { isFlipped });
	};
</script>

<div
	style="width: 500px; height: 300px; transform-style: preserve-3d; perspective: 1000px;"
	class="relative shadow-lg shadow-gray-400 cursor-pointer transition-all flex flex-nowrap justify-center items-center"
	class:flipped={isFlipped}
	on:click={toggleCard}
>
	<div
		class="z-20 absolute right-2 top-2 cursor-pointer flex flex-nowrap items-center"
		style="backface-visibility: hidden;"
	>
		<ReloadIcon size={16} />

		<span class="ml-1 font-bold">Flip</span>
	</div>

	<div
		class="z-10 absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center"
		style="backface-visibility: hidden;"
	>
		<span class="text-2xl text-center">{question}</span>
	</div>

	<div
		class="z-10 absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center"
		style="transform: rotateY(180deg); backface-visibility: hidden;"
	>
		<span class="text-2xl text-center">{answer}</span>
	</div>
</div>

<style>
	.flipped {
		transform: rotateY(180deg);
	}
</style>
