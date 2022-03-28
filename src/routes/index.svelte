<script lang="ts">
	import { cards } from '$lib/storage';
	import PlusIcon from '../components/icons/PlusIcon.svelte';
	import FlipCard from '../components/FlipCard.svelte';
	import LeftIcon from '../components/icons/LeftIcon.svelte';
	import RightIcon from '../components/icons/RightIcon.svelte';
	import DeleteIcon from '../components/icons/DeleteIcon.svelte';

	let currentCardIndex: number | null = null;
	$: cardsCount = $cards.length;
	$: {
		if (currentCardIndex === null && cardsCount > 0) {
			console.log('LLEGUE');

			currentCardIndex = 0;
		}
	}
	$: currentCard = $cards[currentCardIndex];

	const showPreviousCard = () => {
		if (currentCardIndex - 1 < 0) {
			return;
		}

		currentCardIndex--;
		currentCard = $cards[currentCardIndex];
	};

	const showNextCard = () => {
		if (currentCardIndex + 1 >= cardsCount) {
			return;
		}

		currentCardIndex++;
		currentCard = $cards[currentCardIndex];
	};

	const deleteAllCards = () => {
		currentCardIndex = null;
		cards.deleteAll();
	};
</script>

<div style="height: 100vh;" class="flex justify-center items-center">
	<div style="width: 600px;" class="flex flex-col gap-6">
		<div class="grid grid-cols-1 items-center">
			<h1 class="col-start-1 col-end-2 row-start-1 row-end-1 text-3xl text-center font-bold">
				Memory Cards
			</h1>

			<a class="col-start-1 col-end-2 row-start-1 row-end-1 ml-auto" href="/create">
				<button
					class="m-auto w-32 py-1 border border-black rounded bg-white flex flex-nowrap justify-center items-center cursor-pointer transition-all hover:scale-110"
				>
					<PlusIcon />

					<span class="ml-2 text-sm">Add New Card</span>
				</button>
			</a>
		</div>

		<div class="mx-auto">
			{#if currentCardIndex !== null}
				<FlipCard question={currentCard.question} answer={currentCard.answer} />
			{/if}
		</div>

		<div class="flex justify-center items-center">
			<LeftIcon className="cursor-pointer" on:click={showPreviousCard} />

			{#if currentCardIndex !== null}
				<span class="mx-4">{currentCardIndex + 1}/{cardsCount}</span>
			{/if}

			<RightIcon className="cursor-pointer" on:click={showNextCard} />
		</div>

		{#if cardsCount > 0}
			<div class="mx-auto">
				<button
					class="m-auto w-32 py-1 border border-black rounded bg-white flex flex-nowrap justify-center items-center cursor-pointer transition-all hover:scale-110"
					on:click={deleteAllCards}
				>
					<DeleteIcon />

					<span class="ml-2 text-sm">Clear Cards</span>
				</button>
			</div>
		{/if}
	</div>
</div>

<style>
</style>
