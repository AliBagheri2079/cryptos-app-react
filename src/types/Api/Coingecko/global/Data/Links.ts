type LinkRepos = {
  github: string[];
  bitbucket: unknown[];
};

type Links = {
  homepage: string[];
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier?: unknown;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: LinkRepos;
};

export type { LinkRepos, Links };
