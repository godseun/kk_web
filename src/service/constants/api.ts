export const API_BASE_URL = (() => {
  const hostname = window && window.location && window.location.hostname;

  let backendHost;
  if (hostname.includes("kiikey")) backendHost = "https://www.kiikey.com/api";
  else backendHost = `http://${hostname}:3000/api`;

  return backendHost;
})();

export const USER_ACCOUNT_URL = "/user/account.php";
export const USER_ORDER_URL = "/user/order.php";

export const AD_URL = "/ads.php";

export const ORDER_JBG_URL = "/order/shopJbg.php";
export const ORDER_SHOP_URL = "/order/shop.php";

export const ORDER_PAYRESULT_URL = "/order/payResult.php";
export const ORDER_PAYREQUEST_URL = "/order/payRequest.php";

const USER_AGENT = window && window.navigator && window.navigator.userAgent;

export const IS_KIIKEY_APP = USER_AGENT.includes("KIIKEY_");
export const IS_ANDROID = USER_AGENT.includes("KIIKEY_ANDROID");
export const IS_IOS = USER_AGENT.includes("KIIKEY_IOS");
