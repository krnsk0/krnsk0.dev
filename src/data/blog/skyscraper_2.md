---
type: "post"
host: "local"
title: "Solving Every Skyscraper Puzzle: Part Two"
date: "1562130000000"
description: "Solving all possible valid skyscraper puzzles with constraint propagation and backtracking search, part 2. Covers constrained row/column search & recursive backtracking search."
word_count: 0
slug: "skyscraper-puzzle-2"
offsite_link: ""
---

<style>
td {border: none; padding: 0px; text-align: center; display: inline-block; margin: 1px; }
.small td { width: 1.5em; height: 1.5em;}
.large td { width: 3em; height: 3em; padding-top: 0.75em;}
.md_table {margin: 5px auto; font-family: "IBM Plex Mono", monospace; text-align: center; width: 50%; border-collapse: separate;}
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