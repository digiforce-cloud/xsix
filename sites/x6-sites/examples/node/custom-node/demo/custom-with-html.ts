import { Graph } from '@digiforce-cloud/x6'

const graph = new Graph({
  container: document.getElementById('container'),
  grid: true,
})

// 使用文档：https://x6.antv.vision/zh/docs/tutorial/advanced/react#%E6%B8%B2%E6%9F%93-html-%E8%8A%82%E7%82%B9

const source = graph.addNode({
  shape: 'html',
  x: 120,
  y: 50,
  width: 120,
  height: 50,
  html: () => {
    const wrap = document.createElement('div')
    wrap.style.width = '100%'
    wrap.style.height = '100%'
    wrap.style.display = 'flex'
    wrap.style.alignItems = 'center'
    wrap.style.justifyContent = 'center'
    wrap.style.border = '2px solid #9254de'
    wrap.style.background = '#efdbff'
    wrap.style.borderRadius = '4px'
    wrap.innerText = 'Hello'
    return wrap
  },
})

const wrap = document.createElement('div')
wrap.style.width = '100%'
wrap.style.height = '100%'
wrap.style.display = 'flex'
wrap.style.alignItems = 'center'
wrap.style.justifyContent = 'center'
wrap.style.background = '#ffd591'
wrap.style.border = '2px solid #ffa940'
wrap.style.borderRadius = '4px'
wrap.innerText = 'World'

const target = graph.addNode({
  shape: 'html',
  x: 320,
  y: 260,
  width: 120,
  height: 50,
  html: wrap,
})

graph.addEdge({
  source,
  target,
})
