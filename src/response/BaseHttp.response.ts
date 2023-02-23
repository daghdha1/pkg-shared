import {HttpResponse} from "./HttpResponse.response";

export abstract class BaseHttpResponse {
 protected success(data: any, params?: {messages?: string | string[]}): HttpResponse {
  const response: HttpResponse = {
   data: data ? data : {},
  };
  if (params?.messages) {
   response.messages = Array.isArray(params.messages) ? params.messages : [params.messages];
  }
  return response;
 }
}
