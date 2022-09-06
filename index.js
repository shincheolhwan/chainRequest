const {call, transferCoin, deployContract} = require("./function");
const constants = require('./utils/constants');
const sendTransaction = require("./function/sendTransaction");
const {formatNetChainId} = require("./utils/eth_converter");
const abiCode = require('./code/abiCode')
async function index() {
    // example for call
    // await call('allowance', [constants.USER.ADDRESS, constants.USER.ADDRESS]);
    // await call('balanceOf', [constants.USER.ADDRESS]);
    // await call('decimals', []);
    // await call('name', []);
    // await call('symbol', []);
    // await call('totalSupply', []);
    //
    // example for transaction
    // await transferCoin('0x3AECa383504A107E2A7BF66C5d1cc2e04c24B4BB', 899370000000000);
    // await sendTransaction('transfer', ['0x2AEA5c174C993F386d8Fc5Dbd3E47C43D7f73483', "0x1158e460913d00000"]);

    // await deployContract('gatewayV1', [])

    const contract = new constants.WEB3_CLIENT.eth.Contract(abiCode.gateway);
    await deployContract('erc1967', [
        '0x8a9244a9fea9b988e0d79ad13bb5e1ad5e69b491',
        contract.methods['initialize'](formatNetChainId(1, 2023), ["0xbeFA429d57cD18b7F8A4d91A2da9AB4AF05d0FBe", "0x4ba0C2db9A26208b3bB1a50B01b16941c10D76db"], [], 0).encodeABI()
    ]);
}

index();
