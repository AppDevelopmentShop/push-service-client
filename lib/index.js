'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const requestPromise = require("request-promise-native");
class Client {
    constructor(options) {
        this.host = 'localhost';
        this.token = null;
        if (options) {
            this.initialize(options);
        }
    }
    initialize(options) {
        if (!options.host.includes('http')) {
            options.host = `http://${options.host}`;
        }
        this.host = options.host;
        this.host = `${this.host}:${options.port}`;
        if (options.token) {
            this.token = options.token;
        }
    }
    async getHostInfo() {
        return requestPromise({
            method: 'GET',
            uri: `${this.host}/api/`
        });
    }
    async send(userToken, data) {
        if (typeof data !== 'object') {
            throw Error('Push service send: data must be an object!');
        }
        Object.keys(data).forEach(key => {
            if (typeof key !== 'string') {
                throw Error('Push service send: data fields must be only string type!');
            }
        });
        return requestPromise({
            method: 'POST',
            uri: `${this.host}/api/users/${userToken}/notifications`,
            json: true,
            body: data
        });
    }
    async register(userToken, firebaseToken) {
        return requestPromise({
            method: 'POST',
            uri: `${this.host}/api/users/${userToken}/tokens`,
            json: true,
            body: {
                token: firebaseToken
            }
        });
    }
    async unregister(userToken, firebaseToken) {
        return requestPromise({
            method: 'DELETE',
            uri: `${this.host}/api/users/${userToken}/tokens/${firebaseToken}`,
            json: true
        });
    }
    createClient(options) {
        return new Client(options);
    }
}
exports.default = new Client(null);
