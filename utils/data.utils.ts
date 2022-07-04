/**
 * @param url
 * getData receives an url of string
 *  uses fetch on the url
 *  and return response converted to json which we know to be a Promise
 *  <T> represent a generic we expect to return from API call
 */
export const getData =  async <T>(url:string) : Promise<T> => {
    const response = await fetch(url)
    return await response.json()
}