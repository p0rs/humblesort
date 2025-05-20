# Yet another simple sort - Humble Sort

The original solution can be stated as,

Imaging the numbers to be sorted as a deck of numbered cards. An iteration consits in moving all cards from one hand to another. When you move a card you move it to the top of the deck if it's greater than the previously moved card. Keep on iterating until the cards are sorted. The cards are sorted if all the cards go in the same direction during an iteration. 

The test implementation here is a variation of this algorithm, which is simpler to implement and showed better performance in randomized testing. This is another O(N^2) non-stable sort. The only use of the algorithm could be it is simple.
