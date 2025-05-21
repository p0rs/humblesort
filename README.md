# Yet another simple sort - Humble Sort

The original solution can be stated as,

Imagine the list/array of numbers to be sorted as a deck of numbered cards. An iteration consits in moving all cards from one hand to the other. When you move a card, you move it to the top of the deck if it's greater than the previously moved card else it goes to the bottom. Keep on iterating until the cards are sorted. The cards are sorted if all the cards go in the same direction during an iteration.

The test implementation here is a variation of this algorithm, which is simpler to implement and showed better performance in randomized testing. This is another O(N^2) non-stable sort. The algorithm is easy to implment on lists or languages with dynamic arrays.
