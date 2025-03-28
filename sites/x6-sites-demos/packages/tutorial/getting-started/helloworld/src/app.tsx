import React from 'react'
import { Graph } from '@digiforce-cloud/x6'
import './app.css'

const data = {
  // 节点
  nodes: [
    {
      id: 'node1',
      x: 40,
      y: 40,
      width: 80,
      height: 40,
      label: 'Hello',
    },
    {
      id: 'node2',
      x: 160,
      y: 180,
      width: 80,
      height: 40,
      label: 'World',
    },
  ],
  // 边
  edges: [
    {
      source: 'node1',
      target: 'node2',
    },
  ],
}

export default class Example extends React.Component {
  private container: HTMLDivElement

  componentDidMount() {
    const graph = new Graph({
      container: this.container,
    })

    graph.fromJSON(data)
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
