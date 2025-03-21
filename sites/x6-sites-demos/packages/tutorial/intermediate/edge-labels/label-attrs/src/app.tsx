import React from 'react'
import { Graph } from '@digiforce-cloud/x6'
import './app.css'

export default class Example extends React.Component {
  private container: HTMLDivElement

  componentDidMount() {
    const graph = new Graph({
      container: this.container,
      grid: true,
      background: {
        color: 'rgba(0, 255, 0, 0.3)',
      },
    })

    const edge = graph.addEdge({
      source: { x: 40, y: 40 },
      target: { x: 320, y: 40 },
    })

    edge.appendLabel({
      markup: [
        {
          tagName: 'circle',
          selector: 'body',
        },
        {
          tagName: 'text',
          selector: 'label',
        },
        {
          tagName: 'circle',
          selector: 'asteriskBody',
        },
        {
          tagName: 'text',
          selector: 'asterisk',
        },
      ],
      attrs: {
        label: {
          text: '½',
          fill: '#000',
          fontSize: 12,
          textAnchor: 'middle',
          textVerticalAnchor: 'middle',
          pointerEvents: 'none',
        },
        body: {
          ref: 'label',
          fill: '#fff',
          stroke: '#000',
          strokeWidth: 1,
          refR: 1,
          refCx: 0,
          refCy: 0,
        },
        asterisk: {
          ref: 'label',
          text: '＊',
          fill: '#ff0000',
          fontSize: 8,
          textAnchor: 'middle',
          textVerticalAnchor: 'middle',
          pointerEvents: 'none',
          refX: 16.5,
          refY: -2,
        },
        asteriskBody: {
          ref: 'asterisk',
          fill: '#fff',
          stroke: '#000',
          strokeWidth: 1,
          refR: 1,
          refCx: '50%',
          refCy: '50%',
          refX: 0,
          refY: 0,
        },
      },
    })
  }

  refContainer = (container: HTMLDivElement) => {
    this.container = container
  }

  render() {
    return (
      <div className="app">
        <div className="app-content" ref={this.refContainer} />
      </div>
    )
  }
}
