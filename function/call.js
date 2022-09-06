const constants = require('../utils/constants');
const utils = require('../utils/utils');
const axios = require("axios");
const {makeQuery} = require("../utils/query");

async function call(functionName, data) {
    const abiCode = await utils.getAbiCode(constants.MICRO_CHAIN_ID, constants.CONTRACT_ADDRESS);
    const contract = new constants.WEB3_CLIENT.eth.Contract(abiCode);
    
    const query = {
        microChainId: constants.MICRO_CHAIN_ID,
        to: constants.CONTRACT_ADDRESS,
        data: contract.methods[functionName](...data).encodeABI()
    }
    
    const response = await axios.get(constants.API_GATEWAY + `/request/call?${makeQuery(query)}`)
    console.log(response.data);
    return response.data;
}

module.exports = call;
