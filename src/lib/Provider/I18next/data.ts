import { type Resource } from 'i18next';

//* translation catalog
const resources: Resource = {
  en: {
    translation: {
      //* Brand titles
      brandTitle_1: 'crypto',
      brandTitle_2: 'app',

      //* Navlink data
      navLink_1: 'home',
      navLink_2: 'cryptos',
      navLink_3: 'market news',
      navLink_3_Item_1: 'overview',
      navLink_3_Item_2: 'forecasts',
      navLink_3_Item_3: 'outlook',
      navLink_3_Item_4: 'real time',
      navLink_4: 'releases',
      navLink_4_Item_1: 'upcoming releases',
      navLink_4_Item_2: 'previous releases',
      navLink_4_Item_3: 'releases schedule',
      navLink_5: 'analytics',
      navLink_6: 'contracts',
      navLink_7: 'settings',
      navLink_8: 'security',
      navLink_8_Item_1: 'enable 2FA',
      navLink_8_Item_2: 'change password',
      navLink_8_Item_3: 'recovery codes',
      navLink_9: 'account',
      navLink_Last: 'logout',

      //* User avatar item data
      userAvatarItem_1: 'settings',
      userAvatarItem_1_Option_1: 'account settings',
      userAvatarItem_1_Option_2: 'change account',
      userAvatarItem_1_Option_3: 'logout',
      userAvatarItem_2: 'danger zone',
      userAvatarItem_2_Option_1: 'delete account',

      //* Cryptos table columns
      cryptosTableColumn_1: 'coin info',
      cryptosTableColumn_2: 'market Cap',
      cryptosTableColumn_3: 'current Price',
      cryptosTableColumn_4: 'sparkline in last week',
      cryptosTableColumn_5: 'last Updated',

      //* Cryptos search values
      cryptosSearchPlaceholder: 'search in cryptos item',

      //* Cryptos order values
      cryptosOrderPlaceholder: 'pick one',
      cryptosOrderNotFound: 'no options',

      //* Coin header items
      coinItem_1: 'current price',
      coinItem_2: 'price change 24h',
      coinItem_3: 'highest price 24h',
      coinItem_4: 'lowest price 24h',
      coinItem_5: 'market cap rank',
      coinItem_6: 'market cap',
      coinItem_7: 'total volume',
      coinItem_8: 'coingecko score',
      coinItem_9: 'developer score',
      coinItem_10: 'community score',

      //* Coin detail items
      coinDetail: 'coin detail',
      coinDetailLabel_1: 'show more',
      coinDetailLabel_2: 'hide',

      //* Redirect page title
      redirectTitle: 'redirect to main page...',

      //* Notfound page title
      notfoundTitle: 'go home page',
    },
  },
  fa: {
    translation: {
      //* عنوان های سایت
      brandTitle_1: 'اپلیکیشن',
      brandTitle_2: 'ارزدیجیتال',

      //* داده های لینک
      navLink_1: 'خانه',
      navLink_2: 'ارزهای دیجیتال',
      navLink_3: 'اخبار',
      navLink_3_Item_1: 'مطالعه',
      navLink_3_Item_2: 'شنیده ها',
      navLink_3_Item_3: 'دیدگاه',
      navLink_3_Item_4: 'در لحظه',
      navLink_4: 'بازنشر',
      navLink_4_Item_1: 'بازنشر جدید',
      navLink_4_Item_2: 'بازنشر قدیمی',
      navLink_4_Item_3: 'بازنشر گذشته',
      navLink_5: 'بررسی',
      navLink_6: 'داد و ستد',
      navLink_7: 'تنظیمات',
      navLink_8: 'امنیت',
      navLink_8_Item_1: 'تایید 2 مرحله ای',
      navLink_8_Item_2: 'تغییر رمز عبور',
      navLink_8_Item_3: 'کد بازیابی',
      navLink_9: 'حساب کاربری',
      navLink_Last: 'خروج',

      //* داده های گزینه های کاربر
      userAvatarItem_1: 'تنظیمات',
      userAvatarItem_1_Option_1: 'تنظیمات حساب',
      userAvatarItem_1_Option_2: 'تغییر حساب',
      userAvatarItem_1_Option_3: 'خروج',
      userAvatarItem_2: 'بخش خطرناک',
      userAvatarItem_2_Option_1: 'حذف اکانت',

      //* عنوان های جدول ارزهای دیجیتال
      cryptosTableColumn_1: 'اطلاعات ارز',
      cryptosTableColumn_2: 'ارزش بازار',
      cryptosTableColumn_3: 'قیمت فعلی',
      cryptosTableColumn_4: 'وضعیت هفته گذشته',
      cryptosTableColumn_5: 'آخرین بروزرسانی',

      //* مقدارهای جستجوی ارزهای دیجیتال
      cryptosSearchPlaceholder: 'جستجوی ارزهای دیجیتال',

      //* مقدارهای تغییرات ارزهای دیجیتال
      cryptosOrderPlaceholder: 'گزینه ای را انتخاب کن',
      cryptosOrderNotFound: 'گزینه ای وجود ندارد',

      //* عنوان های ارز دیجیتال
      coinItem_1: 'قیمت فعلی',
      coinItem_2: 'تغییر یک روزه',
      coinItem_3: 'بیشترین مقدار رروز',
      coinItem_4: 'کمترین مقدار روز',
      coinItem_5: 'جایگاه ارزش بازاری',
      coinItem_6: 'ارزش بازار',
      coinItem_7: 'ارزش کل',
      coinItem_8: 'امتیاز سایت',
      coinItem_9: 'امتیاز کدنویس ها',
      coinItem_10: 'امتیاز مردمی',

      //* گزینه های جزییات ارز دیجیتال
      coinDetail: 'جزییات ارز',
      coinDetailLabel_1: 'نمایش بیشتر',
      coinDetailLabel_2: 'مخفی',

      //* عنوان صفحه بازگشتی
      redirectTitle: 'بازگشت به صفحه اصلی...',

      //* عنوان صفحه ناموجود
      notfoundTitle: 'برو صفحه اصلی',
    },
  },
};

export { resources };
