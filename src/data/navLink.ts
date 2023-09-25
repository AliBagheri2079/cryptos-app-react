import {
  IconBrandCoinbase,
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFileAnalytics,
  IconFingerprint,
  IconHome2,
  IconNotes,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';

import type { NavLinkProp } from '@/types/Prop';

const navLinkData: NavLinkProp[] = [
  {
    label: 'navLink_1',
    link: '/home',
    icon: IconHome2,
  },
  {
    label: 'navLink_2',
    link: '/cryptos',
    icon: IconBrandCoinbase,
  },
  {
    label: 'navLink_3',
    link: '/market-news',
    icon: IconNotes,
    items: [
      {
        label: 'navLink_3_Item_1',
        link: '/market-news/overview',
      },
      {
        label: 'navLink_3_Item_2',
        link: '/market-news/forecasts',
      },
      {
        label: 'navLink_3_Item_3',
        link: '/market-news/outlook',
      },
      {
        label: 'navLink_3_Item_4',
        link: '/market-news/real-time',
      },
    ],
  },
  {
    label: 'navLink_4',
    link: '/releases',
    icon: IconCalendarStats,
    items: [
      {
        label: 'navLink_4_Item_1',
        link: '/releases/upcoming',
      },
      {
        label: 'navLink_4_Item_2',
        link: '/releases/previous',
      },
      {
        label: 'navLink_4_Item_3',
        link: '/releases/schedule',
      },
    ],
    opened: true,
  },
  {
    label: 'navLink_5',
    link: '/analytics',
    icon: IconDeviceDesktopAnalytics,
  },
  {
    label: 'navLink_6',
    link: '/contracts',
    icon: IconFileAnalytics,
  },
  {
    label: 'navLink_7',
    link: '/settings',
    icon: IconSettings,
  },
  {
    label: 'navLink_8',
    link: '/security',
    icon: IconFingerprint,
    items: [
      {
        label: 'navLink_8_Item_1',
        link: '/security/enable-2fa',
      },
      {
        label: 'navLink_8_Item_2',
        link: '/security/change-password',
      },
      {
        label: 'navLink_8_Item_3',
        link: '/security/recovery-codes',
      },
    ],
  },
  {
    label: 'navLink_9',
    link: '/account',
    icon: IconUser,
  },
];

export { navLinkData };
