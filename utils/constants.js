const web3 = require("web3");
const axios = require("axios");
// const Web3Client = new web3();
const Web3Client = new web3('http://localhost:8545');

axios.defaults.headers.common['x-eq-ag-api-key'] = 'airckrz8tJi8qJEso_W600XSW_xk63o2MwplT2KSTh4';

module.exports = {
    MICRO_CHAIN_ID: 32,
    // USER: {
    //     ADDRESS: "0xcd486671F7E8A2Cd431647F5c22a6168F4b4933a",
    //     PRIVATE_KEY: "0xabbcaac53e3e48f881b7f10a809193dd2ff228d6a6581e41908c1008c4633e88"
    // },
    USER: {
        ADDRESS: "0x358c0027e9630bCe275c7127D0F6397e054d3760",
        PRIVATE_KEY: "0x4590ec7813f6bc9acfe312bc265a39f6741878a3ef716d5de9b9a870b75cbcae"
    },
    CONTRACT_ADDRESS: "0xB571AC756DbB2272B43A5C59a5c7f5D1295807A3",
    WEB3_CLIENT: Web3Client,
    // API_GATEWAY: 'http://43.200.220.233:13010/api/v2'
    API_GATEWAY: 'https://ag.dev.eqhub.eqbr.com/api/v2'
}
