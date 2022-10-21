const axios = require("axios");
const {makeQuery} = require("./query");
const constants = require('./constants')

const getAbiCode = async (microChainId, contractAddress) => {
    const query = {
        microChainId: microChainId
    };
    const params = {
        contractAddress: contractAddress
    }
    const response = await axios.get(constants.API_GATEWAY + `/contract/address/${params.contractAddress}/abi-code?${makeQuery(query)}`);
    return response.data;
}

const getNonce = async (microChainId, address) => {
    const query = {
        microChainId: microChainId,
        address: address
    }
    const response = await axios.get(constants.API_GATEWAY + `/request/nonce?${makeQuery(query)}`);
    return response.data.nonce;
}

const sendRawTransaction = async (microChainId, rawTransaction) => {
    const query = {
        microChainId: microChainId,
    };
    const body = {
        pollingId: "cheolhwan",
        isReceiptTxResult: true,
        rawTransaction: rawTransaction
    }
    const response = await axios.post(constants.API_GATEWAY + `/request/transaction?${makeQuery(query)}`, body);
    return response.data;
}

const sendTransactionForContractUpload = async (microChainId, rawTransaction) => {
    const query = {
        microChainId: microChainId,
    };
    const body = {
        rawTransaction: rawTransaction
    }
    const response = await axios.post(`http://43.200.220.233:14991/v1/request/transaction/contract?${makeQuery(query)}`, body);
    return response.data;
}

const estimateGas = async (microChainId, body) => {
    const query = {
        microChainId: microChainId,
    };
    const response = await axios.post(constants.API_GATEWAY + `/request/estimate-gas?${makeQuery(query)}`, body);
    console.log(response.data);
    return response.data;
}

function hexToDecimal(number, returnType = 'number') {
    try {
        switch (returnType) {
            case "number":
                return constants.WEB3_CLIENT.utils.hexToNumber(number);
            case "string":
                return constants.WEB3_CLIENT.utils.hexToNumberString(number);
        }
    } catch (e) {
        console.log(e)
        return number;
    }
}

function decimalToHex(number) {
    return constants.WEB3_CLIENT.utils.fromDecimal(number);
}

module.exports = {
    getAbiCode,
    getNonce,
    sendRawTransaction,
    sendTransactionForContractUpload,
    estimateGas,
    hexToDecimal,
    decimalToHex,
}
