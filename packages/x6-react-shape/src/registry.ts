import { Graph, Node, Registry } from '@digiforce-cloud/x6'

export type Definition =
  | ((this: Graph, node: Node) => React.ReactElement | null | undefined)
  | React.ReactElement

export const registry = Registry.create<Definition>({
  type: 'react componnet',
})

declare module '@digiforce-cloud/x6/lib/graph/graph' {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  namespace Graph {
    let registerReactComponent: typeof registry.register
    let unregisterReactComponent: typeof registry.unregister
  }
}

Graph.registerReactComponent = registry.register
Graph.unregisterReactComponent = registry.unregister
