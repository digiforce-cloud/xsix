import React from 'react'
import { Graph, Node, Color } from '@digiforce-cloud/x6'
import { Settings, State, defaults } from './settings'
import './app.css'

export default class Example extends React.Component {
  private container: HTMLDivElement
  private graph: Graph
  private node: Node

  componentDidMount() {
    this.graph = new Graph({
      container: this.container,
      grid: true,
    })

    this.node = this.graph.addNode({
      x: 40,
      y: 40,
      width: 240,
      height: 80,
      attrs: {
        body: {
          rx: 10,
          ry: 10,
        },
      },
    })

    this.onChanged(defaults)
  }

  getText(args: State) {
    return `hueRotate(${args.angle})`
  }

  onChanged = (args: State) => {
    this.node.attr({
      label: {
        text: this.getText(args),
        fill: Color.invert(args.color, true),
      },
      body: {
        stroke: args.color,
        fill: Color.lighten(args.color, 40),
        filter: {
          name: 'hueRotate',
          args: { angle: args.angle },
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
        <div className="app-side">
          <Settings onChange={this.onChanged} />
        </div>
        <div className="app-content" ref={this.refContainer} />
      </div>
    )
  }
}
