interface OptionsType {
    host: string;
    port: number;
    token?: string;
}
declare class Client {
    private host;
    private token;
    constructor(options: OptionsType | null);
    initialize(options: OptionsType): void;
    getHostInfo(): Promise<any>;
    send(userToken: string, data: object): Promise<any>;
    register(userToken: string, firebaseToken: string): Promise<any>;
    unregister(userToken: string, firebaseToken: string): Promise<any>;
    createClient(options: OptionsType): Client;
}
declare const _default: Client;
export default _default;
8
