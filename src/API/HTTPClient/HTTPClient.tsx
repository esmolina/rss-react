export class HttpClientMethods {
  public get = async (url: string): Promise<Response> => {
    const response = await fetch(url, {});

    return response;
  };
}

export const HttpClient = new HttpClientMethods();
