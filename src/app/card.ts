import { Suit } from './suit.enum';
import { Rank } from './rank.enum';

export class Card {
  private _rank;
  private _suit;

  constructor(suit: Suit, rank: Rank) {
    this._suit = suit;
    this._rank = rank;
  }
}
