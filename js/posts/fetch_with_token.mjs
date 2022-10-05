import { authorization } from "../API_URLs_export.mjs"

export function headers() {
    return {
        "content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${authorization}`
    }
}

export async function fetchWithToken(url, options) {
    return fetch(url, {
        ...options,
        headers: headers()
    })

}