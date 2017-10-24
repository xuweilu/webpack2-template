import "whatwg-fetch";
import fetchJsonp from "fetch-jsonp";
import { API_HEADERS } from "./constants";

export const fetchDataAsync = async url => (fetch(url, {
  method: "GET",
  headers: API_HEADERS,
  credentials: "include",
}).then(response => response.json()));

export const fetchJsonpDataAsync = async url => (fetchJsonp(url, {
  headers: API_HEADERS,
}).then(response => response.json()));
