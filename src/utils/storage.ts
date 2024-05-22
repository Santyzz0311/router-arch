export const setItemInLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const clearItemInLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}