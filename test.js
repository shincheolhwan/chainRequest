const {WEB3_CLIENT: web3} = require('./utils/constants')

async function getRevertReason(txHash) {
    console.log(txHash)
    const tx = await web3.eth.getTransaction(txHash)
    console.log(tx)
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

getRevertReason('0x88f3d98940aa006c0ef11293db5f8f859c4a4f6298e5a642a6d9a2e21a445ddd');
