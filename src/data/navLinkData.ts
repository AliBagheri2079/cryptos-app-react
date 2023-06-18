import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFileAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconNotes,
  IconSettings,
  IconUser
} from '@tabler/icons-react'

import { type NavLinkProp } from '@/global/types/NavLinkProp'

export const navLinkData: NavLinkProp[] = [
  { label: 'Home', link: '/home', icon: IconHome2 },
  { label: 'Dashboard', link: '/dashboard', icon: IconGauge },
  {
    label: 'Market news',
    link: '/market-news',
    icon: IconNotes,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' }
    ]
  },
  {
    label: 'Releases',
    link: '/',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' }
    ],
    opened: true
  },
  {
    label: 'Analytics',
    link: '/',
    icon: IconDeviceDesktopAnalytics
  },
  {
    label: 'Contracts',
    link: '/',
    icon: IconFileAnalytics
  },
  { label: 'Account', link: '/', icon: IconUser },
  {
    label: 'Settings',
    link: '/',
    icon: IconSettings
  },
  {
    label: 'Security',
    link: '/',
    icon: IconFingerprint,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' }
    ]
  }
]
