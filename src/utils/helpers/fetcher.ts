const fetcher = async (
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> =>
  await fetch(input, init).then(async res => await res.json());

export { fetcher };
