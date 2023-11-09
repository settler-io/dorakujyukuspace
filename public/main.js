function getPromotionCodeFromUrlParamsAndSetCookie() {
  const searchParams = new URLSearchParams(window.location.search);
  const promotionCode = searchParams.get("prc");
  if (!promotionCode) {
    return;
  }

  document.cookie = `promotion_code=${promotionCode};domain=torecaswap.com`;
  console.log("cookie updated");
}

getPromotionCodeFromUrlParamsAndSetCookie();
