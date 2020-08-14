import { Client } from "./Client";

export class ServiceClient extends Client {
    public async getServiceSpecificStuff() {
        return await this.get("/api/hello");
    }
}
