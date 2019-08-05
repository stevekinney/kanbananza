import { cards as defaultCards } from '../normalized-state';

const cardsReducer = (cards = defaultCards, action) => {
    console.log('Hello from cards');
    return cards;
};

export default cardsReducer;