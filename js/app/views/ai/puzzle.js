"use strict";

import { html, render } from "/js/lib/lit-html/lit-html.js";

const template = (d) => html`
<div class="ai">
  <div class="row">
    <div class="col-sm-12">
      <p>
        The 8 Puzzle consists of a 3x3 board with eight numbered tiles and an empty spot. A tile adjacent to the empty
        spot can slide into that spot. The goal of the puzzle is to order all of the tiles numerically, leaving the
        empty
        spot in the lower-right corner.
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6">
      <h2>The Board</h2>
      <div id="puzzle">
        <div class="puzzle-row">
          <div id="spot-1" class="puzzle-spot">
            <div id="number-1" class="tile">1</div>
          </div>
          <div id="spot-2" class="puzzle-spot">
            <div id="number-2" class="tile">2</div>
          </div>
          <div id="spot-3" class="puzzle-spot">
            <div id="number-3" class="tile">3</div>
          </div>
        </div>
        <div class="puzzle-row">
          <div id="spot-4" class="puzzle-spot">
            <div id="number-4" class="tile">4</div>
          </div>
          <div id="spot-5" class="puzzle-spot">
            <div id="number-5" class="tile">5</div>
          </div>
          <div id="spot-6" class="puzzle-spot">
            <div id="number-6" class="tile">6</div>
          </div>
        </div>
        <div class="puzzle-row">
          <div id="spot-7" class="puzzle-spot">
            <div id="number-7" class="tile">7</div>
          </div>
          <div id="spot-8" class="puzzle-spot">
            <div id="number-8" class="tile">8</div>
          </div>
          <div id="spot-9" class="puzzle-spot">
            <div id="number-9" class="tile empty">&nbsp;</div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
      <button id="shuffle-tiles" class="btn btn-primary">Shuffle Tiles</button>
      <p>Note: not all tile arrangments are guaranteed to be solvable.</p>
    </div>
    <div class="col-sm-6">
      <h2>Choose an Algorithm</h2>
      <form class="form form-horizontal">
        <div class="form-group">
          <label for="search-algorithm" class="col-sm-2 control-label">Algorithm</label>
          <div class="col-sm-10">
            <select id="search-algorithm" class="form-control">
              <option value="tree-search" disabled="disabled">Tree-Search</option>
              <option value="graph-search-bfs">Graph-Search (breadth first)</option>
              <option value="graph-search-dfs">Graph-Search (depth first)</option>
              <option value="uniform-cost-search">Uniform-Cost-Search</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button id="solve-puzzle" class="btn btn-primary">Solve Puzzle</button>
          </div>
        </div>
      </form>
    </div>
    <div class="col-sm-12">
      <h2>Results</h2>
      <dl class="search-results">
        <dt>
          Nodes used in search
        </dt>
        <dd id="nodes-used">
          0
        </dd>
        <dt>
          Elapsed search time (ms)
        </dt>
        <dd id="elapsed-time">
          0
        </dd>
        <dt>Path Cost</dt>
        <dd id="path-cost">
          0
        </dd>
        <dt>
          Solution Path
        </dt>
        <dd id="solution">
          ...
        </dd>
      </dl>
      <form class="form form-horizontal">
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button id="watch-solution" disabled="disabled" class="btn btn-primary">Watch Solution</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
`;

export default class AiPuzzleView extends Backbone.View {
  render() {
    render(template(), this.el);
    return this;
  }
}