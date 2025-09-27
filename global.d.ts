declare global {
  interface Window {

  }

  interface Error {
    data ?: any
    message : string
  }
}

export {};
