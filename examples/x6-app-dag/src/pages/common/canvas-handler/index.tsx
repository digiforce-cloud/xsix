import React from 'react'
import { Popover } from 'antd'
import {
  CompressOutlined,
  OneToOneOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons'
import classNames from 'classnames'
import styles from './index.less'

interface Props {
  className?: string
  onZoomIn: () => void
  onZoomOut: () => void
  onFitContent: () => void
  onRealContent: () => void
}

export const CanvasHandler: React.FC<Props> = (props) => {
  const { className, onZoomIn, onZoomOut, onFitContent, onRealContent } = props

  return (
    <ul className={classNames(styles.handler, className)}>
      <Popover
        overlayClassName={styles.popover}
        content="Zoom In"
        placement="left"
      >
        <li onClick={onZoomIn} className={styles.item}>
          <ZoomInOutlined />
        </li>
      </Popover>
      <Popover
        overlayClassName={styles.popover}
        content="Zoom Out"
        placement="left"
      >
        <li onClick={onZoomOut} className={styles.item}>
          <ZoomOutOutlined />
        </li>
      </Popover>
      <Popover
        overlayClassName={styles.popover}
        content="Actual Size"
        placement="left"
      >
        <li onClick={onRealContent} className={styles.item}>
          <OneToOneOutlined />
        </li>
      </Popover>
      <Popover
        overlayClassName={styles.popover}
        content="Fit To Content"
        placement="left"
      >
        <li onClick={onFitContent} className={styles.item}>
          <CompressOutlined />
        </li>
      </Popover>
    </ul>
  )
}
