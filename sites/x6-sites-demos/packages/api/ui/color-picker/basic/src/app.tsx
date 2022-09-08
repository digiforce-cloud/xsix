import React from 'react'
import { ColorPicker } from '@digiforce-cloud/x6-react-components'
import '@digiforce-cloud/x6-react-components/es/color-picker/style/index.css'

export default class Example extends React.PureComponent {
  render() {
    return (
      <div style={{ padding: 24, height: 400 }}>
        <div style={{ width: 120 }}>
          <ColorPicker color="#333333" />
        </div>
      </div>
    )
  }
}
