export default {
  REQUEST_LEADERS: "request leaders",
  RECEIVE_LEADERS: "receive leaders",
};

// domain: https://tool.dev-ibd.com/mobileapi/
// research domain: https://research.dev-ibd.com/
export const API_DOMAIN = typeof document.global !== "undefined" ? document.global.lbMobileAPIDomain : "";
export const RESEARCH_DOMAIN = typeof document.global !== "undefined" ? document.global.researchDomain : "";

export const API_HEADERS = {
  "Content-Type": "application/json",
};

export const API_URLS = new Map([
  ["LEADERS", `${API_DOMAIN}la/leaders`],
]);
