---
type: "post"
host: "local"
title: "Solving Every Skyscraper Puzzle: Part Two"
date: "1562130000000"
published: true
description: "Puzzle-solving with constraint propagation and backtracking search. Covers constrained row/column search & board-wide backtracking."
word_count: 0
slug: "skyscraper-puzzle-2"
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
.border {border: 1px solid #313131;}
.dark {background-color: rgb(230, 230, 235);}
.green {color: darkgreen;}
.red {color: red;}
</style>

The [last post](/writing/skyscraper-puzzle-1) in this series described three forms of inference a [Skyscrapers](https://www.conceptispuzzles.com/index.aspx?uri=puzzle/skyscrapers) puzzle board and then implemented them in Javascript: edge clue initialization, resolved cell constraint propagation, and process of elimination. In combination, these allowed us to draw out all consequences from information initially derived from edge clues:

<table class="md_table large">
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>1</td>
      <td>2</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td class="border">123</td>
      <td class="border">123</td>
      <td class="border">4</td>
      <td class="border">123</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td class="border">123</td>
      <td class="border">4</td>
      <td class="border">123</td>
      <td class="border">123</td>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
      <td class="border">4</td>
      <td class="border">123</td>
      <td class="border">123</td>
      <td class="border">123</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td class="border">123</td>
      <td class="border">123</td>
      <td class="border">12</td>
      <td class="border">4</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>3</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

In this post, we'll implement our final form of inference, Clue Elimination, giving our program the capacity to solve every valid, published Skyscraper puzzle. After this, we'll add recursive backtracking search, which lets the program solve all valid puzzles, full-stop.

## Clue Elimination

The last post concluded with the observation that an an experienced skyscrapers player might next notice that the 2 clue on the top allows the resolution of its adjacent cell. Given that we know the position of the 4 in the last column, the adjacent cell must be 3, as any other value would result in more than two buildings being visible from the standpoint of the clue.

<table class="md_table large">
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>1</td>
      <td>2</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td class="border">123</td>
      <td class="border">123</td>
      <td class="border">4</td>
      <td class="border">3</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td class="border">3</td>
      <td class="border">4</td>
      <td class="border">1</td>
      <td class="border">2</td>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
      <td class="border">4</td>
      <td class="border">123</td>
      <td class="border">3</td>
      <td class="border">1</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td class="border">123</td>
      <td class="border">123</td>
      <td class="border">2</td>
      <td class="border">4</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>3</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
