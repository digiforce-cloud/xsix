import React from 'react'
import { Graph, Node } from '@digiforce-cloud/x6'
import { Settings, State } from './settings'
import './app.css'

export default class Example extends React.Component {
  private container: HTMLDivElement
  private node: Node

  componentDidMount() {
    const graph = new Graph({
      container: this.container,
      grid: {
        visible: true,
      },
    })

    this.node = graph.addNode({
      shape: 'rect',
      x: 80,
      y: 68,
      width: 240,
      height: 80,
      attrs: {
        label: {
          text: 'left',
          fill: '#6a6c8a',
        },
        body: {
          strokeWidth: 1,
        },
      },
      ports: {
        groups: {
          a: {
            position: {
              name: 'top',
              args: {
                dr: 0,
                dx: 0,
                dy: -10,
              },
            },
            label: {
              position: {
                name: 'left',
              },
            },
            attrs: {
              circle: {
                fill: '#ffffff',
                stroke: '#31d0c6',
                strokeWidth: 2,
                r: 10,
              },
              text: {
                fill: '#6a6c8a',
              },
            },
          },
        },
      },
    })

    Array.from({ length: 3 }).forEach((_, index) => {
      const label =
        index === 2
          ? {
              position: { args: { x: 20, y: -20 } },
            }
          : {}
      const stroke = index === 2 ? { stroke: 'red' } : {}
      const fill = index === 2 ? { fill: 'red' } : {}
      this.node.addPort({
        label,
        group: 'a',
        attrs: {
          circle: { magnet: true, ...stroke },
          text: { text: `P${index}`, ...fill },
        },
      })
    })
  }

  onAttrsChanged = ({ position, ...args }: State) => {
    this.node.prop('ports/groups/a/label/position/name', position)
    this.node.attr('label/text', position)
  }

  refContainer = (container: HTMLDivElement) => {
    this.container = container
  }

  render() {
    return (
      <div className="app">
        <div className="app-side">
          <Settings onChange={this.onAttrsChanged} />
        </div>
        <div className="app-content" ref={this.refContainer} />
      </div>
    )
  }
}
