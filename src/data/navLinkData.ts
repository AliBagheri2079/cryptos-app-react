import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFileAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconNotes,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';

import { type NavLinkProps } from '@/global/types/Prop/NavLink';

export const navLinkData: NavLinkProps[] = [
  {
    label: 'nav_link_1',
    link: '/home',
    icon: IconHome2,
  },
  {
    label: 'nav_link_2',
    link: '/dashboard',
    icon: IconGauge,
  },
  {
    label: 'nav_link_3',
    link: '/market-news',
    icon: IconNotes,
    items: [
      {
        label: 'nav_link_3_item_1',
        link: '/market-news/overview',
      },
      {
        label: 'nav_link_3_item_2',
        link: '/market-news/forecasts',
      },
      {
        label: 'nav_link_3_item_3',
        link: '/market-news/outlook',
      },
      {
        label: 'nav_link_3_item_4',
        link: '/market-news/real-time',
      },
    ],
  },
  {
    label: 'nav_link_4',
    link: '/releases',
    icon: IconCalendarStats,
    items: [
      {
        label: 'nav_link_4_item_1',
        link: '/releases/upcoming',
      },
      {
        label: 'nav_link_4_item_2',
        link: '/releases/previous',
      },
      {
        label: 'nav_link_4_item_3',
        link: '/releases/schedule',
      },
    ],
    opened: true,
  },
  {
    label: 'nav_link_5',
    link: '/analytics',
    icon: IconDeviceDesktopAnalytics,
  },
  {
    label: 'nav_link_6',
    link: '/contracts',
    icon: IconFileAnalytics,
  },
  {
    label: 'nav_link_7',
    link: '/settings',
    icon: IconSettings,
  },
  {
    label: 'nav_link_8',
    link: '/security',
    icon: IconFingerprint,
    items: [
      {
        label: 'nav_link_8_item_1',
        link: '/security/enable-2fa',
      },
      {
        label: 'nav_link_8_item_2',

        link: '/security/change-password',
      },
      {
        label: 'nav_link_8_item_3',

        link: '/security/recovery-codes',
      },
    ],
  },
  {
    label: 'nav_link_9',
    link: '/account',
    icon: IconUser,
  },
];
