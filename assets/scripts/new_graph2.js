var column_name="Total College";
$('input[type=radio][name=treeSum]').change(function() {
    if (this.value == 'number') {
        column_name = "Total College";
    }
    else if (this.value == 'percent') {
        column_name = "Percent College";
    }
    else if (this.value == 'male') {
        column_name = "Percent College - Male";
    }
    else if (this.value == 'femal') {
        column_name = "Percent College - Female";
    }

    render_graph();

});

  var obj = document.getElementById("chart");

  var divWidth = obj.offsetWidth;
function render_graph(){
  $("#chart").empty();

  var margin = {top: 30, right: 0, bottom: 20, left: 0},
      width = divWidth,
      height = 500 - margin.top - margin.bottom;

  var svg2 = d3.select("#chart").append("svg")
      .style("width", width)
      .style("height", height)
      .style("margin-left", -margin.left + "px")
      .style("margin.right", -margin.right + "px")
      .style("padding", "10px")
      .style("font", "10px sans-serif")
      .style("box-sizing", "border-box");

  var g2 = svg2.append("g");

  d3.json("assets/data/us.json", function(data) {
    var radius = height;
    var color = d3.scaleOrdinal(d3.schemeCategory20b);
    var partition = d3.partition()
          .size([2 * Math.PI, radius]);
    var root = d3.hierarchy(data)
          .sum(function (d) { return parseFloat(d[column_name])});
    
    partition(root);
    var arc = d3.arc()
          .startAngle(function (d) { return d.x0 })
          .endAngle(function (d) { return d.x1 })
          .innerRadius(function (d) { return d.y0 })
          .outerRadius(function (d) { return d.y1 });

    var format = d3.format(",d");

    g2.append("g")
        .attr("fill-opacity", 0.6)
      .selectAll("path")
      .data(root.descendants().filter(d => d.depth))
      .enter().append("path")
        .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })
        .attr("d", arc)
      .style('stroke', '#fff')
      .append("title")
        .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${parseFloat(d.value)}`);

    g2.append("g")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
      .selectAll("text")
      .data(root.descendants().filter(d => d.depth && (d.y0 + d.y1) / 2 * (d.x1 - d.x0) > 10))
      .enter().append("text")
        .attr("transform", function(d) {
          const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
          const y = (d.y0 + d.y1) / 2;
          return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
        })
        .attr("dy", "0.35em")
        .text(d => d.data.name);
    const box = g2.node().getBBox();
    svg2.attr("width", box.width)
      .attr("height", box.height)
      .attr("viewBox", `${box.x} ${box.y} ${box.width} ${box.height}`);

  })
}



