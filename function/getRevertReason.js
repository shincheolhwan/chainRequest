const constants = require("../utils/constants");

// 터널링 필요
async function getRevertReason(txHash){
    const tx = await constants.WEB3_CLIENT.eth.getTransaction(txHash)
    
    var result = await constants.WEB3_CLIENT.eth.call(tx, tx.blockNumber)
    
    result = result.startsWith('0x') ? result : `0x${result}`
    
    if (result && result.substr(138)) {
        
        const reason = constants.WEB3_CLIENT.utils.toAscii(result.substr(138))
        console.log('Revert reason:', reason)
        return reason;
    } else {
        console.log('Cannot get reason - No return value')
    }
}

module.exports = getRevertReason;
