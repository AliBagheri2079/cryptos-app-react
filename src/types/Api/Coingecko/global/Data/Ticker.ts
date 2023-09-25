type TickerMarket = {
  name: string;
  identifier: string;
  has_trading_incentive: boolean;
};

type TickerConverted = {
  btc: number;
  eth: number;
  usd: number;
};

type Ticker = {
  base: string;
  target: string;
  market: TickerMarket;
  last: number;
  volume: number;
  converted_last: TickerConverted;
  converted_volume: TickerConverted;
  trust_score: string;
  bid_ask_spread_percentage: number;
  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;
  is_anomaly: boolean;
  is_stale: boolean;
  trade_url?: string;
  token_info_url?: any;
  coin_id: string;
  target_coin_id?: string;
};

export type { TickerMarket, TickerConverted, Ticker };
