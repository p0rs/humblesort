# Yet another simple sort - Humble Sort

The algorithm was conceived during an exploration of whether any additional simple sorting algorithms remain to be discovered. The problem was framed as follows: sort a full deck of cards using only two hands, without placing the cards down or inserting them into arbitrary positions. When transferring cards from one hand to the other, only two practical positions are allowed: the top or the bottom of the receiving hand. The deck can be flipped as a whole, and cards may be transferred either one by one or as a complete stack, but not selectively.

The original solution can be stated as,

Imagine the list/array of numbers to be sorted as a deck of numbered cards. An iteration consits in moving all cards from one hand to the other. When you move a card, you move it to the top of the deck if it's greater than the previously moved card else it goes to the bottom. Keep on iterating until the cards are sorted. The cards are sorted if all the cards go in the same direction during an iteration.

This is another O(N^2) non-stable sort. The algorithm is easy to implement on lists or languages with dynamic arrays. I don't see any use for this algorithm except for teaching purposes. You could ask the students as to why this algortihm will eventually lead to a sorted list and not enter an infinite loop. I could see two possible proofs, 

* each iterations lowering inversions 
* each swap forming a transform function in which a cycle is impossible.

Will sketch a proof more formally later.
