<script lang="ts">
	import { goto } from '$app/navigation';
	import { cards } from '$lib/storage';
	import PlusIcon from '../components/icons/PlusIcon.svelte';

	let question = '';
	let answer = '';

	const addCard = () => {
		cards.addCard({ question, answer });

		goto('/');
	};

	$: {
		console.log($cards);
	}
</script>

<svelte:head>
	<title>Add New card</title>
</svelte:head>

<div style="height: 100vh;" class="flex justify-center items-center bg-gray-100">
	<div style="width: 500px;" class="flex flex-col gap-6">
		<div class="grid grid-cols-1 items-center">
			<h1 class="col-start-1 col-end-2 row-start-1 row-end-1 text-3xl text-center font-bold">
				Add New Card
			</h1>

			<a class="col-start-1 col-end-2 row-start-1 row-end-1 ml-auto" href="/">
				<button
					class="m-auto px-2 py-1 border border-black rounded bg-white flex flex-nowrap justify-center items-center cursor-pointer transition-all hover:scale-110"
				>
					<span>Back</span>
				</button>
			</a>
		</div>

		<div class="flex flex-col gap-2">
			<label class="w-full" for="question">Question</label>

			<textarea
				required
				class="p-2 outline-none border border-black rounded"
				type="text"
				placeholder="Enter Question..."
				name="question"
				bind:value={question}
			/>
		</div>

		<div class="flex flex-col gap-2">
			<label class="w-full" for="answer">Answer</label>

			<textarea
				required
				class="p-2 outline-none border border-black rounded"
				type="text"
				placeholder="Enter Answer..."
				name="answer"
				bind:value={answer}
			/>
		</div>

		<button
			class="m-auto w-32 py-1.5 border border-black rounded bg-white flex flex-nowrap justify-center items-center cursor-pointer transition-all hover:scale-110"
			on:click={addCard}
		>
			<PlusIcon />

			<span class="ml-2">Add Card</span>
		</button>
	</div>
</div>
