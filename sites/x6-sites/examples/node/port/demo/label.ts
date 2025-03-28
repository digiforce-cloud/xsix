import { Graph } from '@digiforce-cloud/x6'

const graph = new Graph({
  container: document.getElementById('container'),
  grid: true,
})

// 文档：https://x6.antv.vision/zh/docs/tutorial/basic/port

const rect = graph.addNode({
  x: 240,
  y: 60,
  width: 100,
  height: 180,
  attrs: {
    body: {
      fill: '#f5f5f5',
      stroke: '#d9d9d9',
      strokeWidth: 1,
    },
  },
  ports: {
    groups: {
      group1: {
        attrs: {
          circle: {
            r: 6,
            magnet: true,
            stroke: '#31d0c6',
            fill: '#fff',
            strokeWidth: 2,
          },
        },
      },
    },
    items: [
      {
        id: 'port1',
        group: 'group1',
        attrs: {
          text: {
            // 标签选择器
            text: 'port1', // 标签文本
          },
        },
      },
      {
        id: 'port2',
        group: 'group1',
        attrs: {
          text: {
            // 标签选择器
            text: 'port2', // 标签文本
          },
        },
      },
    ],
  },
})

rect.addPort({
  id: 'port3',
  group: 'group1',
  attrs: {
    text: {
      // 标签选择器
      text: 'port3', // 标签文本
    },
  },
})
