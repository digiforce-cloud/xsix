import React from 'react'
import { Graph } from '@digiforce-cloud/x6'
import './app.css'

Graph.registerPortLayout(
  'sin',
  (portsPositionArgs, elemBBox) => {
    return portsPositionArgs.map((_, index) => {
      const step = -Math.PI / 8
      const y = Math.sin(index * step) * 50
      return {
        position: {
          x: index * 12,
          y: y + elemBBox.height,
        },
        angle: 0,
      }
    })
  },
  true,
)

export default class Example extends React.Component {
  private container: HTMLDivElement

  componentDidMount() {
    const graph = new Graph({
      container: this.container,
      grid: {
        visible: true,
      },
    })

    const rect = graph.addNode({
      x: 120,
      y: 40,
      width: 280,
      height: 120,
      attrs: {
        body: {
          fill: '#fff',
          stroke: '#000',
          strokeWidth: 1,
        },
      },
      ports: {
        groups: {
          sin: {
            attrs: {
              circle: {
                r: 6,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fe854f',
              },
            },
            position: 'sin',
          },
        },
      },
    })

    Array.from({ length: 24 }).forEach(() => {
      rect.addPort({ group: 'sin' })
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
