import { writable } from 'svelte/store';
import { browser } from '$app/env';
import { v4 as uuid } from '@lukeed/uuid';

import type { Card } from './card.types';

const CARDS_KEY = 'CARDS_KEY';

const getLocalStorage = (key: string): string | null => {
	if (!browser) {
		return null;
	}

	return window.localStorage.getItem(key);
};

const setLocalStorage = (key: string, value: string) => {
	if (!browser) {
		return;
	}

	window.localStorage.setItem(key, value);
};

const createCards = () => {
	const { subscribe, set, update } = writable<Card[]>([]);

	// Loading cards
	const cardsStr = getLocalStorage(CARDS_KEY);
	const cards = cardsStr ? JSON.parse(cardsStr) : [];
	set(cards);

	const addCard = (card: Omit<Card, 'id'>) => {
		update((cards) => {
			const newCards = [...cards, { id: uuid(), ...card }];

			setLocalStorage(CARDS_KEY, JSON.stringify(newCards));

			return newCards;
		});
	};

	const removeCard = (id: string) => {
		update((cards) => {
			const newCards = cards.filter((card) => card.id !== id);

			setLocalStorage(CARDS_KEY, JSON.stringify(newCards));

			return newCards;
		});
	};

	const deleteAll = () => set([]);

	return { subscribe, addCard, removeCard, deleteAll };
};

export const cards = createCards();
