const {WEB3_CLIENT: web3} = require('./utils/constants')

async function getRevertReason(txHash) {
    const tx = await web3.eth.getTransaction(txHash)

    try {
        var result = await web3.eth.call(tx, tx.blockNumber)
    } catch (e) {
        console.log(e);
        return false;
    }

    console.log(2);
    result = result.startsWith('0x') ? result : `0x${result}`
    if (result && result.substr(138)) {
        console.log(3);
        const reason = web3.utils.toAscii(result.substr(138))
        console.log(4);
        console.log('Revert reason:', reason)
        return reason
    } else {
        console.log('Cannot get reason - No return value')
    }
}

getRevertReason('0x92c9388f0d9fe078ba733cabee753de96bc9367a96f416c2d9d34a68e76ff756');
