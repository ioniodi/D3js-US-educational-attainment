var margin = {top: 20, right: 0, bottom: 30, left: 40};
var svg = d3.select("#pie-chart");

var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("assets/data/species.tsv", function(error, data) {
  var margin = {top: 20, right: 0, bottom: 30, left: 40},
    width = 800,
    height = 400;

  var x = d3.scaleBand()
    .domain(data.map(function(d) { return d['Education Level']; }))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  var y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return parseFloat(d.Percent)*100; })])
    .nice()
    .range([height - margin.bottom, margin.top]);

  g.append("g")
    .attr("fill", "steelblue")
    .selectAll("rect").data(data).enter().append("rect")
      .attr("x", d => x(d['Education Level']))
      .attr("y", d => y(parseFloat(d.Percent)*100))
      .attr("height", d => y(0) - y(parseFloat(d.Percent)*100))
      .attr("width", x.bandwidth());

  g.append("g")
    .attr("transform", "translate(0,"+(height-margin.bottom)+")")
    .call(d3.axisBottom(x)
        .tickSizeOuter(0))

  g.append("g")
    .attr("transform", "translate("+margin.left+",0)")
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .append("text")
      .attr("x", 2)
      .attr("y", y(y.ticks().pop()) + 0.5)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      .text("Percent(%)");
});