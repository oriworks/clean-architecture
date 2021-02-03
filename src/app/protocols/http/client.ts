export interface HttpGetClient<Response> {
  execute: (url: string) => Promise<Response>
}
