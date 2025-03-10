import { Base } from '../common/base'
import { SVG } from './svg'
import { SVGSVGAttributes } from './types'

export class ContainerExtension<
  TSVGElement extends SVGElement,
> extends Base<TSVGElement> {
  nested<Attributes extends SVGSVGAttributes>(attrs?: Attributes) {
    return SVG.create(attrs).appendTo(this)
  }
}
