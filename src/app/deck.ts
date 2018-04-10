import { Card } from './card';
import { Rank } from './rank.enum';
import { Suit } from './suit.enum';

export class Deck {
  private _cards: Card[];

  constructor() {
    this._cards = this.getSortedDeck();
    this._cards = this.shuffle();
  }

  public shuffle(): Card[] {
    // Shuffled the existing deck and return it
    return [new Card];
  }

  private getSortedDeck(): Card[] {
    // Return cards in new-deck order.
    for (const suit in Suit) {
      if (suit in [Suit.Spade, Suit.Heart]) {
        for (const rank in Rank) {
          if (1) {
            this._cards.push(new Card(suit, rank));
          }
        }
      }
    }
    return [];
  }
}
