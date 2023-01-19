import { authorization } from "../API_URLs_export.mjs";

export function headers() {
  return {
    "content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${authorization}`,
  };
}

/**
 * this function fetches using the auth Token
 * @param {string} url {API url}
 * @param {object} options {...options, headers()}
 * @returns {Function} fetch fetch(url, {
        ...options,
        headers: headers()
    }); 
 */
export async function fetchWithToken(url, options) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
