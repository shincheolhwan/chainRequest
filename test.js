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

getRevertReason('0x725b1b7692701ad7113b732fbbdb84bf5374bd569f37d94bd7984d521d35721a');
