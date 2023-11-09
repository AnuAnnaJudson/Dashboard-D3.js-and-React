import { useState, useRef, useEffect } from "react";
import * as d3 from "d3";

const Linechart = () => {
  const [data] = useState([9, 50, 35, 50, 94, 10,80,70,50,44]); //data to show or points
  const svgRef = useRef(); //to let d3 get access to the dom
  const fullWidth= 400;
  const fullHeight = 95;

  useEffect(() => {
    //setting up svg
    const w = fullWidth;
    const h = fullHeight;
    const svg = d3
      .select(svgRef.current)
      .attr("width", '100%')
      .attr("height", '100%')
      .style("background", "#00000")
      .style("margin-top", "50")
      .attr('viewBox', `0 0 ${fullWidth} ${fullHeight}`)
      .style("overflow", "visible");
    //setting the scaling
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);
    // setting the axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((i) => i + 1)
      .tickSize(0);
    
    const xAxisGroup = svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0,${h})`)
      .attr('color',"#D3D4D6");

    xAxisGroup.select(".domain").remove(); // Remove the x-axis line
    //setting up the data for svg
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "#47B747")
      .attr("stroke-width", "4px")
      .attr("width", "100");
  }, [data]);
  
  return <svg ref={svgRef}></svg>;
};

export default Linechart;
