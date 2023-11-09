import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';

const DoubleBarchart = () => {
  const [data] = useState([
    { month: 'January', value1: 200, value2: 150 },
    { month: 'February', value1: 250, value2: 100 },
    { month: 'March', value1: 150, value2: 90 },
    { month: 'May', value1: 200, value2: 150 },
    { month: 'June', value1: 250, value2: 100 },
    { month: 'July', value1: 300, value2: 200 },
    // Add more months and values as needed
  ]);
  

  const svgRef = useRef();
  const fullWidth= 400;
  const fullHeight = 127;

  useEffect(() => {
    const width= fullWidth
    const height = fullHeight 
    const svg = d3
      .select(svgRef.current)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${fullWidth} ${fullHeight}`)
      .style('overflow', 'visible');

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([0, width])
      .padding(0.7);
    const yScale = d3.scaleLinear().domain([0, height+d3.max(data, (d) => Math.max(d.value1, d.value2))]).nice().range([height, 0]);

    const xAxis = d3.axisBottom(xScale).tickSize(0);

    const xAxisGroup = svg
      .append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${height})`)
      .attr('color', '#D3D4D6');

    xAxisGroup.select('.domain').remove();

    svg
      .selectAll('.bar1')
      .data(data)
      .join('rect')
      .attr('class', 'bar1')
      .attr('x', (d) => xScale(d.month))
      .attr('y', (d) => yScale(d.value1))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height- yScale(d.value1))
      .attr('fill', '#47B747')
      .attr('border', 'none')
      .attr('rx', 8) // Sharp corners for bar2
      .attr('ry', 8);

    svg
      .selectAll('.bar2')
      .data(data)
      .join('rect')
      .attr('class', 'bar2')
      .attr('x', (d) => xScale(d.month))
      .attr('y', (d) => yScale(d.value2))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height- yScale(d.value2))
      .attr('fill', '#02BB7D')
      .attr('rx', 8) // Sharp corners for bar2
      .attr('ry', 8);

  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default DoubleBarchart;
