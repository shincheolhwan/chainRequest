const constants = require("../utils/constants");
const utils = require("../utils/utils");

async function sendTransaction(functionName, transactionData) {
    const abiCode = await utils.getAbiCode(constants.MICRO_CHAIN_ID, constants.CONTRACT_ADDRESS);
    const contract = new constants.WEB3_CLIENT.eth.Contract(abiCode);
    
    const transaction = await constants.WEB3_CLIENT.eth.accounts.signTransaction({
        nonce: await utils.getNonce(constants.MICRO_CHAIN_ID, constants.USER.ADDRESS),
        chainId: constants.MICRO_CHAIN_ID,
        to: constants.CONTRACT_ADDRESS,
        data: contract.methods[functionName](...transactionData).encodeABI(),
        value: null,
        gas: constants.GAS,
        gasPrice: constants.GAS_PRICE,
    }, constants.USER.PRIVATE_KEY);
    
    const data = await utils.sendRawTransaction(constants.MICRO_CHAIN_ID, transaction.rawTransaction);
    console.log(data);
    return data;
}

module.exports = sendTransaction;
