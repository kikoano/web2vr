const svg = d3.select("svg"),
    margin = 200,
    width = svg.attr("width") - margin,
    height = svg.attr("height") - margin

svg.append("text")
    .attr("transform", "translate(100,0)")
    .attr("x", 50)
    .attr("y", 50)
    .attr("font-size", "24px")
    .text("XYZ Foods Stock Price")

const xScale = d3.scaleBand().range([0, width]).padding(0.4),
    yScale = d3.scaleLinear().range([height, 0]);

const g = svg.append("g")
    .attr("transform", "translate(" + 100 + "," + 100 + ")");

d3.csv("./assets/XYZ.csv", (error, data) => {
    if (error) {
        throw error;
    }

    xScale.domain(data.map((d) => d.year));
    yScale.domain([0, d3.max(data, (d) => d.value)]);

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale))
        .append("text")
        .attr("y", height - 250)
        .attr("x", width - 100)
        .attr("text-anchor", "end")
        .attr("stroke", "black")
        .text("Year");

    g.append("g")
        .call(d3.axisLeft(yScale).tickFormat((d) => "$" + d)
            .ticks(10))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "-5.1em")
        .attr("text-anchor", "end")
        .attr("stroke", "black")
        .text("Stock Price");

    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d.year))
        .attr("y", (d) => yScale(d.value))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - yScale(d.value));
});