---
type: "post"
host: "local"
title: "Solving Every Skyscraper Puzzle: Part Three"
date: "1563926400000"
published: true
description: "Puzzle-solving with constraint propagation and backtracking search in Javascript. Covers recursive backtracking and its optimization."
word_count: 0
slug: "skyscraper-puzzle-3"
offsite_link: ""
---

<style>
td {border: none; padding: 0px; text-align: center; display: inline-block; margin: 1px; }
.md_table {margin: 5px auto; font-family: "IBM Plex Mono", monospace; text-align: center; border-collapse: separate;}
@media (max-width: 700px) {
  .md_table {
    font-size: 0.9em;
  }
}
.small td { width: 1.5em; height: 1.5em;}
.large td { width: 3em; height: 3em; padding-top: 0.75em;}
@media (max-width: 700px) {
  .large {
    font-size: 0.8em;
  }
}
.smalltext .border {
  font-size: 1em;
  padding-top: 0.1em;
  line-height: 22px;
}
@media (max-width: 700px) {
  .smalltext {
    line-height: 15px;
    font-size: 0.3em;
  }
  .smalltext .border {
    line-height: 12px;
  }
}
.border {border: 1px solid #313131;}
.dark {background-color: rgb(230, 230, 235);}
.green {color: darkgreen;}
.red {color: red;}
.sequence-list {font-family: "IBM Plex Mono", monospace; display: flex; flex-direction: column; align-items: center; }

</style>

The first [two](/writing/skyscraper-puzzle-1) [posts](/writing/skyscraper-puzzle-2) in this series described and implemented for forms of inference applicable to solving the [Skyscrapers](https://www.conceptispuzzles.com/index.aspx?uri=puzzle/skyscrapers) puzzle. The program written so far is capable of solving all _valid_, _publishable_ puzzles of arbitrary size, where _valid_ puzzles are those whose clues permit one and only one solution, and _publishable_ puzzles are those solvable without guess-and-check, the Skycraper enthusiast's name for what we call recursive backtracking.

In this post, we'll build in a recursive backtracking mechanism that will allow the program to solve all valid puzzles, full-stop. At the end of the last post, we applied our program to one such valid but unpublishable puzzle discovered programmatically by CodeWars user [Medved01](https://www.codewars.com/users/medved01) and were able to get the board to this point:

<table class="md_table large smalltext">
  <tbody>
  <tr>
    <td> </td>
    <td>3</td>
    <td>3</td>
    <td>2</td>
    <td>1</td>
    <td>2</td>
    <td>2</td>
    <td>3</td>
    <td> </td>
  </tr>
  <tr>
    <td>3</td>
    <td class="border">12</td>
    <td class="border">13</td>
    <td class="border">12345</td>
    <td class="border">7</td>
    <td class="border">6</td>
    <td class="border">45</td>
    <td class="border">34</td>
    <td>4</td>
  </tr>
  <tr>
    <td>2</td>
    <td class="border">6</td>
    <td class="border">4</td>
    <td class="border">7</td>
    <td class="border">12345</td>
    <td class="border">125</td>
    <td class="border">12</td>
    <td class="border">23</td>
    <td>3</td>
  </tr>
  <tr>
    <td>5</td>
    <td class="border">12</td>
    <td class="border">23</td>
    <td class="border">34</td>
    <td class="border">6</td>
    <td class="border">1234</td>
    <td class="border">7</td>
    <td class="border">5</td>
    <td>2</td>
  </tr>
  <tr>
    <td>2</td>
    <td class="border">5</td>
    <td class="border">7</td>
    <td class="border">6</td>
    <td class="border">1234</td>
    <td class="border">1234</td>
    <td class="border">124</td>
    <td class="border">123</td>
    <td>4</td>
  </tr>
  <tr>
    <td>4</td>
    <td class="border">34</td>
    <td class="border">123</td>
    <td class="border">35</td>
    <td class="border">12345</td>
    <td class="border">12345</td>
    <td class="border">6</td>
    <td class="border">7</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td class="border">7</td>
    <td class="border">6</td>
    <td class="border">234</td>
    <td class="border">12345</td>
    <td class="border">12345</td>
    <td class="border">35</td>
    <td class="border">1234</td>
    <td>4</td>
  </tr>
  <tr>
    <td>3</td>
    <td class="border">34</td>
    <td class="border">5</td>
    <td class="border">12</td>
    <td class="border">1234</td>
    <td class="border">7</td>
    <td class="border">123</td>
    <td class="border">6</td>
    <td>2</td>
  </tr>
  <tr>
    <td></td>
    <td>2</td>
    <td>3</td>
    <td>5</td>
    <td>4</td>
    <td>1</td>
    <td>4</td>
    <td>2</td>
    <td> </td>
  </tr>
</tbody>
</table>

## Approach

## Code

We'll have to figure out how to switch over from a plain constraint-propagation-based approach to backtracking when we've hit an impasse. Right now, when confronted with an unpublishable puzzle, the program loops infinitely inside of `iterateClueConstraints`. In addition to checking for puzzle completion, we can check to see if the board has changed since the last iteration through the clues.

We could set up a boolean flag on the state object which is set to `false` at the beginning of the `iterateClueConstraints` loop and is set to `true` elsewhere when the board is changed, but we already have a function which counts the total number of possibilities left on the board, `isPuzzleSolved`. Since this function is already used in `iterateClueConstraints`, let's break it up into two functions, the second of which we can re-use:

```js
const countRemainingValuesOnBoard = state => {
  return (
    state.board.reduce((acc, cell) => acc + cell.size, 0) === state.N * state.N
  )
}

const isPuzzleSolved = state => {
  return countRemainingValuesOnBoard(state) === state.N * state.N
}
```

Now we can rewrite `iterateClueConstraints` to break when we've gone through all of the clues without side effects on the board:

```js
const iterateEdgeConstraints = state => {
  let sortedClueIndices = getSortedClueIndices(state)

  let i = 0
  let remainingValuesOnBoard = countRemainingValuesOnBoard(state)

  while (!isPuzzleSolved(state)) {
    edgeConstrainFromClue(state, sortedClueIndices[i])

    i += 1
    if (i === state.N * 2) {
      i = 0
      sortedClueIndices = getSortedClueIndices(state)

      if (remainingValuesOnBoard === countRemainingValuesOnBoard(state)) {
        break
      }
      remainingValuesOnBoard = countRemainingValuesOnBoard(state)
    }
  }
}
```
