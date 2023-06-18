import { type TablerIconsProps } from '@tabler/icons-react'
import type React from 'react'

interface NavLinkInfo {
  label: React.ReactNode
  link: string
}

export type NavLinkProp = NavLinkInfo & {
  icon: React.FC<TablerIconsProps>
  links?: NavLinkInfo[]
  opened?: boolean
}
