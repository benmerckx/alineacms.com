import styler from '@alinea/styler'
import {HStack, Icon, VStack} from 'alinea/ui'
import {IcRoundCheck} from 'alinea/ui/icons/IcRoundCheck'
import {IcRoundOpenInNew} from 'alinea/ui/icons/IcRoundOpenInNew'
import screenshot from '@/assets/vetra.png'
import {Button} from '@/layout/Button'
import {Image} from '@/layout/Image'
import {WebTypo} from '@/layout/WebTypo'
import css from './TemplateBlock.module.scss'

const styles = styler(css)

export function TemplateBlock() {
  return (
    <div className={styles.root()}>
      <div className={styles.root.illustration()}>
        <Image
          {...screenshot}
          alt="Vetra screenshot"
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.root.screenshot()}
        />
      </div>

      <VStack gap={16}>
        <WebTypo>
          <WebTypo.H2>Get started with a template</WebTypo.H2>
          <WebTypo.P>
            Vetra is a ready-made template for Alinea built in Next.js.
            <br /> Designed to help you get started quickly with a production
            ready CMS.
          </WebTypo.P>
          <ul className={styles.root.list()}>
            <li className={styles.root.list.item()}>
              <Icon icon={IcRoundCheck} />
              Beautiful blog with archive
            </li>
            <li className={styles.root.list.item()}>
              <Icon icon={IcRoundCheck} />
              Includes categories and authors
            </li>
            <li className={styles.root.list.item()}>
              <Icon icon={IcRoundCheck} />
              With contact page, about page
            </li>
          </ul>
        </WebTypo>
        <HStack gap={16} center>
          <Button
            href="https://github.com/alineacms/template-vetra"
            target="_blank"
          >
            Check it out on GitHub
          </Button>
          <WebTypo.Link href="https://vetra.alineacms.com/" target="_blank">
            <HStack gap={8} center>
              <span>See the demo</span>
              <Icon icon={IcRoundOpenInNew} />
            </HStack>
          </WebTypo.Link>
        </HStack>
      </VStack>
    </div>
  )
}
