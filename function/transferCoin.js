const constants = require('../utils/constants');
const utils = require('../utils/utils');

async function transferCoin(to, amount) {
    const transaction = await constants.WEB3_CLIENT.eth.accounts.signTransaction({
        nonce: await utils.getNonce(constants.MICRO_CHAIN_ID, constants.USER.ADDRESS),
        chainId: constants.MICRO_CHAIN_ID,
        to: to,
        data: null,
        value: utils.decimalToHex(amount),
        gas: constants.GAS,
        gasPrice: constants.GAS_PRICE,
    }, constants.USER.PRIVATE_KEY);
    
    const data = await utils.sendRawTransaction(constants.MICRO_CHAIN_ID, transaction.rawTransaction);
    console.log(data);
    return data;
}


module.exports = transferCoin;
