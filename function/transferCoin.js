const constants = require('../utils/constants');
const utils = require('../utils/utils');

async function transferCoin(to, amount, microChainId = constants.MICRO_CHAIN_ID) {
    const transaction = await constants.WEB3_CLIENT.eth.accounts.signTransaction({
        nonce: await utils.getNonce(microChainId, constants.USER.ADDRESS),
        chainId: microChainId,
        to: to,
        data: null,
        value: utils.decimalToHex(amount),
        gas: await utils.estimateGas(microChainId, constants.USER.ADDRESS, to, await utils.getGasPrice(microChainId), utils.decimalToHex(amount), null),
        gasPrice: await utils.getGasPrice(microChainId),
    }, constants.USER.PRIVATE_KEY);
    
    const data = await utils.sendRawTransaction(microChainId, transaction.rawTransaction);
    console.log(data);
    return data;
}


module.exports = transferCoin;
