export const CONTENT_TYPES = {
  APPLICATION_JSON: 'application/json',
  TEXT: 'plain/text',
};

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
};

class HTTPApi {
  constructor() {
    this.url = '';
    this.method = METHODS.GET;
    this.contentType = CONTENT_TYPES.TEXT;
    this.responseInit = {};
    this.inAction = false;
    this.isFetched = false;
  }

  setContentType(contentType) {
    this.contentType = contentType;
  }

  setResponseInit(responseInit) {
    this.responseInit = responseInit;
  }

  setMethod(method) {
    this.method = method;
  }

  async generateResponse(stream) {
    const response = new Response(stream, { ...this.responseInit, headers: { 'Content-Type': this.contentType } });
    let resultData = null;
    if (this.contentType === CONTENT_TYPES.APPLICATION_JSON) {
      resultData = await response.json();
    }
    if (this.contentType === CONTENT_TYPES.TEXT) {
      resultData = await response.text();
    }
    return resultData;
  }

  async readStream(reader) {
    return new ReadableStream({
      start(controller) {
        async function push() {
          const res = await reader.read().then(({done, value}) => {
            if (done) {
              controller.close();
              return;
            }
            controller.enqueue(value);
            push();
          });
        }

        push();
      },
    });
  }

  async fetch(url, method = METHODS.GET) {
    const _url = url ?? this.url;
    const _method = method ?? this.method;
    const result = await fetch(_url, { method: _method });
    if (result?.status !== 200) {
      return;
    }
    const reader = result.body.getReader();
    const stream = await this.readStream(reader);
    return await this.generateResponse(stream);
  }
}

// singletone
export const httpApi = new HTTPApi();