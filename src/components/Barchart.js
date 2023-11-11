import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";

const Barchart = () => {
  const [data] = useState([200, 250, 60, 150, 100, 175]);
  const svgRef = useRef();
  const fullWidth = 400;
  const fullHeight = 128;

  useEffect(() => {
    // Setting up the svg container
    const w = fullWidth;
    const h = fullHeight;
    const labels = [
      "Older",
      "Jan 02-08",
      "Jan 09-16",
      "Jan 17-24",
      "Jan 25-31",
      "Future",
    ];

    const svg = d3
      .select(svgRef.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", `0 0 ${fullWidth} ${fullHeight}`)
      .style("overflow", "visible");
    // .style('margin', '50px');

    // Setting the scaling
    const xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, w])
      .padding(0.7); // Adjusted padding for better visualization
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .nice()
      .range([h, 0]);

    // Setting up the axes
    const xAxis = d3
      .axisBottom(xScale)
      .tickSize(0)
      .tickFormat((d, i) => `${labels[i]}`);

    const xAxisGroup = svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0,${h})`)
      .attr("color", "#D3D4D6");

    xAxisGroup.select(".domain").remove();

    // Setting the svg data
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (val, i) => xScale(i))
      .attr("y", (val) => yScale(val))
      .attr("width", xScale.bandwidth())
      .attr("height", (val) => h - yScale(val))
      .attr("fill", "#47B747")
      .attr("border", "none")
      .attr("boreder-radius", "5px")
      .attr("rx", 8) // Adjust the horizontal radius for rounded corners
      .attr("ry", 8); // Adjust the vertical radius for rounded corners;
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Barchart;
