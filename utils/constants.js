const web3 = require("web3");
const axios = require("axios");
const Web3Client = new web3('http://localhost:8545');
axios.defaults.headers.common['x-eq-ag-api-key'] = 'airckrz8tJi8qJEso_W600XSW_xk63o2MwplT2KSTh4';

module.exports = {
    MICRO_CHAIN_ID: 2023,
    USER: {
        ADDRESS: "0xcd486671F7E8A2Cd431647F5c22a6168F4b4933a",
        PRIVATE_KEY: "0xabbcaac53e3e48f881b7f10a809193dd2ff228d6a6581e41908c1008c4633e88"
    },
    CONTRACT_ADDRESS: "0x2d536c87a061bce9d96df8556216b93bea241064",
    WEB3_CLIENT: Web3Client,
    API_GATEWAY: 'http://43.200.220.233:13010/api/v2',
    GAS: "0x1c9c380",
    GAS_PRICE: "0x3B9ACA00"
}
