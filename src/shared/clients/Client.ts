export class Client {
    constructor() {}

    private static async fetch(
        method: string,
        url: string,
        params: any[] = [],
        headers: any[] = []
    ) {
        console.log(`Do fetch or something here based on ${method}`);
        return {};
    }

    public async get(url) {
        return await Client.fetch("get", url);
    }

    public async post(url, params) {
        return await Client.fetch("post", url, params);
    }
}
