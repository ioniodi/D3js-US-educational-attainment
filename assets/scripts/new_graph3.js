var radius = 120,
    padding = 10;

var color = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var arc = d3.arc()
    .outerRadius(radius)
    .innerRadius(radius - 30);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.population; });

d3.tsv("assets/data/data.tsv", function(error, data) {
  if (error) throw error;

  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "state" && key !== "National"; }));

  data.forEach(function(d) {
    d.ages = color.domain().map(function(name) {
      console.log((+d[name])/(+d["National"])*100);
      return {name: name, population: (+d[name])/(+d["National"])*100};
    });
  });

  var legend = d3.select("#stacked-bar-chart").append("svg")
      .attr("class", "legend")
      .attr("width", radius * 2)
      .attr("height", radius * 10)
      .attr("style", "float:left;")
    .selectAll("g")
      .data(color.domain().slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });


  legend.append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", 80)
      .attr("y", 9)
      .attr("dy", ".35em")
      .text(function(d) { return d; });

  var svg3 = d3.select("#stacked-bar-chart").selectAll(".pie")
      .data(data)
    .enter().append("svg")
      .attr("class", "pie")
      .attr("width", radius * 2)
      .attr("height", radius * 2)
    .append("g")
      .attr("transform", "translate(" + radius + "," + radius + ")");

  svg3.selectAll(".arc")
      .data(function(d) { return pie(d.ages); })
    .enter().append("path")
      .attr("class", "arc")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.name); });

  svg3.append("text")
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text(function(d) { return d.state; });
    });