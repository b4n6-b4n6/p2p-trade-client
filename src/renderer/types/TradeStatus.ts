export enum TradeStatus {
  AWAITING_PARTIES = 'AWAITING_PARTIES',
  AWAITING_XMR_SELLER_DEPOSIT = 'AWAITING_XMR_SELLER_DEPOSIT',
  AWAITING_XMR_BUYER_PAYMENT = 'AWAITING_XMR_BUYER_PAYMENT',
  AWAITING_SPEND_CONSENSUS = 'AWAITING_SPEND_CONSENSUS',
  FINALIZED = 'FINALIZED',
  //CANCELLED = 'CANCELLED',
}
