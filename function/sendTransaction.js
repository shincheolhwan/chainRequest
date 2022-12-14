const constants = require("../utils/constants");
const utils = require("../utils/utils");

async function sendTransaction(functionName, transactionData) {
    const abiCode = await utils.getAbiCode(constants.MICRO_CHAIN_ID, constants.CONTRACT_ADDRESS);
    const contract = new constants.WEB3_CLIENT.eth.Contract(abiCode);
    const web3Data = contract.methods[functionName](...transactionData).encodeABI();
    
    const transaction = await constants.WEB3_CLIENT.eth.accounts.signTransaction({
        nonce: await utils.getNonce(constants.MICRO_CHAIN_ID, constants.USER.ADDRESS),
        chainId: constants.MICRO_CHAIN_ID,
        to: constants.CONTRACT_ADDRESS,
        data: web3Data,
        value: null,
        gas: await utils.estimateGas(constants.MICRO_CHAIN_ID, constants.USER.ADDRESS, constants.CONTRACT_ADDRESS, await utils.getGasPrice(constants.MICRO_CHAIN_ID), null, web3Data),
        gasPrice: await utils.getGasPrice(constants.MICRO_CHAIN_ID),
    }, constants.USER.PRIVATE_KEY);

    // console.log(transaction);
    const data = await utils.sendRawTransaction(constants.MICRO_CHAIN_ID, transaction.rawTransaction);
    console.log(data);
    return data;
}

module.exports = sendTransaction;
