---
type: "post"
host: "local"
title: "Solving Every Skyscraper Puzzle: Part Two"
date: "1562130000000"
published: false
description: "Puzzle-solving with constraint propagation and backtracking search. Covers constrained row/column search and board-wide backtracking."
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

The [last post](/writing/skyscraper-puzzle-1) in this series described three forms of inference applicable to a [Skyscrapers](https://www.conceptispuzzles.com/index.aspx?uri=puzzle/skyscrapers) puzzle board and then implemented them in Javascript. In combination, edge clue initialization, constraint propagation, and process of elimination allowed us to draw out all consequences from an initial look at the edge clues:

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

Though this is the only such observation to be made at this point on this board, not all such observations need begin with a 2 clue across from a resolved cell with value `N`. Consider this row:

<table class="md_table large">
  <tbody>
    <tr>
      <td>3</td>
      <td class="border">2</td>
      <td class="border">13</td>
      <td class="border">4</td>
      <td class="border">13</td>
      <td></td>
    </tr>
  </tbody>
</table>

Here, the three clue combined with the constraints already in place are enough to allow us to resolve the entire row, as only the sequence 2-3-4-1 satisfied the clue.

We've already hinted at a way to generalize about our first case: 2-clues in rows or columns with a cell resolved to `N` allow us to resolve an adjacent cell to `N - 1`. For being so simple, this "2-clue rule" seems like a very good candidate for a constraint we can hard-code to allow us to advance further. Are there other such rules we might discover?

Looking at the second case, we might say: "with the first and the third cells resolved, the clue insists on a value for the second." This seems like it might generally applicable. But what if the second and fourth are resolved instead of the first and third? What if the gap between resolved cells is larger than one cell? When does the clue allow us to resolve cells in relation to the height of the cells on either side of the gap? And how to state answers to each of these questions in terms of a board with size `N`?

While it is not impossible to answer these questions concerning a potential "gap rule," we will find that the questions only multiply as `N` grows-- and as we consider other possible variations on the theme of inference enabled by clues on a constrained row.

Internet guides to the game are filled with home-spun wisdom concerning heuristics like the 2-clue and gap rules. But, while experienced players may have facility in describing and applying many such heuristics, their capacity to reason about clue constraints is hardly exhausted by these. This tends to suggest we are not operating at a high enough level of generality in attempting to describe clue constraint inference as potentially exhausted by a set of rules, patterns, or heuristics, no matter how (finitely) large.

What is common to all such rules and patterns? They begin from a partly resolved row and its clues and... SEQUENCES

## Reasoning About Sequences

So far we have considered constraining the board principally on a cell-by-cell basis, even when taking row and column information into account. In edge clue initialization, we derive information from clues which constrains single cells based on their position in a row or column. In constraint propagation, we sequentially write constraints to single cells in the same row or column as another single, resolved cell. In process of elimination, we resolve single cells based on whether values exist in collections of single cells in columns and rows.

But this isn't the only way to think about what values are or are not possible for cells. Clues principally rule out _sequences_ of values for their rows or columns. If two or more cells are unknown, a clue may not tell us much about these cells in isolation, but it can rule out certain _combinations_ of values for these cells, considered together.

This insight makes available to us a powerful mechanism for generalizing about clue elimination. If for every remaining possible sequence for a row or column, the clues rule out _all but_ one or more values for a cell, we can resolve the cell to these values.

That is, suppose we make a list of possible sequences not yet eliminated by our constraints, for a given row or column. Then suppose we filter this list according to which sequences are permitted by clues. We may not yet be able to resolve the entire row--that is, multiple sequences might remain--but if we find that _all remaining sequences_ show just a single value, for a cell, then we know that the cell in question _must_ resolve to this value.

It might be objected at this point that in generating all remaining sequences for a row and then ruling some out that we veer dangerously close to the guess-and-check methodology we swore off
