const constants = require('../utils/constants');
const abiCode = require("../code/abiCode");
const byteCode = require("../code/byteCode");
const utils = require("../utils/utils");


async function deployContract(name, arguments = []) {
    const contract = new constants.WEB3_CLIENT.eth.Contract(abiCode[name]);
    const options = {
        data: '0x' + byteCode[name].object,
        arguments: arguments,
    };
    
    
    const web3Data = contract.deploy(options).encodeABI();
    const transaction = await constants.WEB3_CLIENT.eth.accounts.signTransaction({
        nonce: await utils.getNonce(constants.MICRO_CHAIN_ID, constants.USER.ADDRESS),
        chainId: constants.MICRO_CHAIN_ID,
        to: null,
        data: web3Data,
        value: null,
        gas: constants.GAS,
        gasPrice: constants.GAS_PRICE
    }, constants.USER.PRIVATE_KEY)

    const data = await utils.sendTransactionForContractUpload(constants.MICRO_CHAIN_ID, transaction.rawTransaction);
    console.log(data)
}

module.exports = deployContract;
