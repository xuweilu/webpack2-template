import { fetchDataAsync } from "../utils";
import { API_URLS } from "../constants";

const API = {
  async fetchLeadersAsync() {
    console.log("fetchLeadersAsync API works.");
    try {
      // let leaders = (await fetchDataAsync(API_URLS.get("LEADERS"))).Items;
      // let cutlist = (await fetchDataAsync(API_URLS.get("CUTLIST"))).Items;
      const leaders = await fetchDataAsync(API_URLS.get("LEADERS"));
      const cutlist = await fetchDataAsync(API_URLS.get("CUTLIST"));
      return [...await leaders.Items, ...await cutlist.Items];
    } catch (error) {
      throw Error(error);
    }
  },
};

export default API;