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

import type NavLinkProps from '@/types/Prop/NavLink';

export const navLinkData: NavLinkProps[] = [
  {
    label: 'nav_link_1',
    link: '/dashboard/home',
    icon: IconHome2,
  },
  {
    label: 'nav_link_2',
    link: '/dashboard/crypto',
    icon: IconBrandCoinbase,
  },
  {
    label: 'nav_link_3',
    link: '/dashboard/market-news',
    icon: IconNotes,
    items: [
      {
        label: 'nav_link_3_item_1',
        link: '/dashboard/market-news/overview',
      },
      {
        label: 'nav_link_3_item_2',
        link: '/dashboard/market-news/forecasts',
      },
      {
        label: 'nav_link_3_item_3',
        link: '/dashboard/market-news/outlook',
      },
      {
        label: 'nav_link_3_item_4',
        link: '/dashboard/market-news/real-time',
      },
    ],
  },
  {
    label: 'nav_link_4',
    link: '/dashboard/releases',
    icon: IconCalendarStats,
    items: [
      {
        label: 'nav_link_4_item_1',
        link: '/dashboard/releases/upcoming',
      },
      {
        label: 'nav_link_4_item_2',
        link: '/dashboard/releases/previous',
      },
      {
        label: 'nav_link_4_item_3',
        link: '/dashboard/releases/schedule',
      },
    ],
    opened: true,
  },
  {
    label: 'nav_link_5',
    link: '/dashboard/analytics',
    icon: IconDeviceDesktopAnalytics,
  },
  {
    label: 'nav_link_6',
    link: '/dashboard/contracts',
    icon: IconFileAnalytics,
  },
  {
    label: 'nav_link_7',
    link: '/dashboard/settings',
    icon: IconSettings,
  },
  {
    label: 'nav_link_8',
    link: '/dashboard/security',
    icon: IconFingerprint,
    items: [
      {
        label: 'nav_link_8_item_1',
        link: '/dashboard/security/enable-2fa',
      },
      {
        label: 'nav_link_8_item_2',

        link: '/dashboard/security/change-password',
      },
      {
        label: 'nav_link_8_item_3',

        link: '/dashboard/security/recovery-codes',
      },
    ],
  },
  {
    label: 'nav_link_9',
    link: '/dashboard/account',
    icon: IconUser,
  },
];
