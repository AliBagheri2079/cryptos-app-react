import { type Resource } from 'i18next';

//* translation catalog
// TODO: change item to cammel case convention
// TODO: change to lowercase values
export const resources: Resource = {
  en: {
    translation: {
      // * Brand Titles
      brand_title_1: 'Supper',
      brand_title_2: 'app',

      // * Nav link data
      nav_link_1: 'Home',
      nav_link_2: 'Crypto',
      nav_link_3: 'Market news',
      nav_link_3_item_1: 'Overview',
      nav_link_3_item_2: 'Forecasts',
      nav_link_3_item_3: 'Outlook',
      nav_link_3_item_4: 'Real time',
      nav_link_4: 'Releases',
      nav_link_4_item_1: 'Upcoming releases',
      nav_link_4_item_2: 'Previous releases',
      nav_link_4_item_3: 'Releases schedule',
      nav_link_5: 'Analytics',
      nav_link_6: 'Contracts',
      nav_link_7: 'Settings',
      nav_link_8: 'Security',
      nav_link_8_item_1: 'Enable 2FA',
      nav_link_8_item_2: 'Change password',
      nav_link_8_item_3: 'Recovery codes',
      nav_link_9: 'Account',
      nav_link_last: 'Logout',

      // * User avatar item data
      user_avatar_item_1: 'Settings',
      user_avatar_item_1_option_1: 'Account settings',
      user_avatar_item_1_option_2: 'Change account',
      user_avatar_item_1_option_3: 'Logout',
      user_avatar_item_2: 'Danger zone',
      user_avatar_item_2_option_1: 'Delete account',

      // * Crypto Table Header Columns
      cryptoTableHeaderColumn_1: 'Coin Info',
      cryptoTableHeaderColumn_2: 'Market Cap',
      cryptoTableHeaderColumn_3: 'Current Price',
      cryptoTableHeaderColumn_4: 'Sparkline in last week',
      cryptoTableHeaderColumn_5: 'Last Updated',

      // * Crypto Table Search Values
      cryptoTableSearchControler: 'see coin items',
      cryptoTableSearchPlaceholder: 'search in crypto items',
      cryptoTableSearchNotFound: 'nothing found ...',

      // * Crypto Table Order Values
      cryptoTableOrderPlaceholder: 'Pick one',
      cryptoTableOrderNotFound: 'No options',

      // * Coin Info Table Header Columns
      coinInfoTableHeaderColumn_1: 'current price',
      coinInfoTableHeaderColumn_2: 'price change 24h',
      coinInfoTableHeaderColumn_3: 'highest price 24h',
      coinInfoTableHeaderColumn_4: 'lowest price 24h',
      coinInfoTableHeaderColumn_5: 'market cap rank',
      coinInfoTableHeaderColumn_6: 'market cap',
      coinInfoTableHeaderColumn_7: 'total volume',
      coinInfoTableHeaderColumn_8: 'last updated',
      coinInfoTableHeaderColumn_9: 'coingecko score',
      coinInfoTableHeaderColumn_10: 'developer score',
      coinInfoTableHeaderColumn_11: 'community score',
    },
  },
  fa: {
    translation: {
      // * عنوان های سایت
      brand_title_1: 'سوپر',
      brand_title_2: 'اپلیکیشن',

      // * داده های لینک
      nav_link_1: 'خانه',
      nav_link_2: 'ارز دیجیتال',
      nav_link_3: 'اخبار',
      nav_link_3_item_1: 'مطالعه',
      nav_link_3_item_2: 'شنیده ها',
      nav_link_3_item_3: 'دیدگاه',
      nav_link_3_item_4: 'در لحظه',
      nav_link_4: 'بازنشر',
      nav_link_4_item_1: 'بازنشر جدید',
      nav_link_4_item_2: 'بازنشر قدیمی',
      nav_link_4_item_3: 'بازنشر گذشته',
      nav_link_5: 'بررسی',
      nav_link_6: 'داد و ستد',
      nav_link_7: 'تنظیمات',
      nav_link_8: 'امنیت',
      nav_link_8_item_1: 'تایید 2 مرحله ای',
      nav_link_8_item_2: 'تغییر رمز عبور',
      nav_link_8_item_3: 'کد بازیابی',
      nav_link_9: 'حساب کاربری',
      nav_link_last: 'خروج',

      // * داده های گزینه های کاربر
      user_avatar_item_1: 'تنظیمات',
      user_avatar_item_1_option_1: 'تنظیمات حساب',
      user_avatar_item_1_option_2: 'تغییر حساب',
      user_avatar_item_1_option_3: 'خروج',
      user_avatar_item_2: 'بخش خطرناک',
      user_avatar_item_2_option_1: 'حذف اکانت',

      // * عنوان های جدول ارزهای دیجیتال
      cryptoTableHeaderColumn_1: 'اطلاعات ارز',
      cryptoTableHeaderColumn_2: 'ارزش بازار',
      cryptoTableHeaderColumn_3: 'قیمت فعلی',
      cryptoTableHeaderColumn_4: 'وضعیت هفته گذشته',
      cryptoTableHeaderColumn_5: 'آخرین بروزرسانی',

      // * مقدارهای جستجوی جدول ارزهای دیجیتال
      cryptoTableSearchControler: 'جستجو کردن',
      cryptoTableSearchPlaceholder: 'جستجوی ارز دیجیتال',
      cryptoTableSearchNotFound: 'گزینه ای وجود ندارد',

      //  * مقدارهای تغییرات جدول ارزهای دیجیتال
      cryptoTableOrderPlaceholder: 'گزینه ای را انتخاب کن',
      cryptoTableOrderNotFound: 'گزینه ای وجود ندارد',

      // * عنوان های جدول ارز دیجیتال
      coinInfoTableHeaderColumn_1: 'قیمت فعلی',
      coinInfoTableHeaderColumn_2: 'تغییر یک روزه',
      coinInfoTableHeaderColumn_3: 'بیشترین مقدار رروز',
      coinInfoTableHeaderColumn_4: 'کمترین مقدار روز',
      coinInfoTableHeaderColumn_5: 'جایگاه ارزش بازاری',
      coinInfoTableHeaderColumn_6: 'ارزش بازار',
      coinInfoTableHeaderColumn_7: 'ارزش کل',
      coinInfoTableHeaderColumn_8: 'آخرین بروزرسانی',
      coinInfoTableHeaderColumn_9: 'امتیاز سایت',
      coinInfoTableHeaderColumn_10: 'امتیاز کدنویس ها',
      coinInfoTableHeaderColumn_11: 'امتیاز مردمی',
    },
  },
};
