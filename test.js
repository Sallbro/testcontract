// test.js
const secureEthContracts = require('./index');

const sampleContractCode = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MySmartContract {
    // Contract code goes here
    function doSomething() public {
        // Sample function
    }
    function estimateGasFee() public view returns (uint256) {
        // Function for gas fee estimation
        uint256 gasBefore = gasleft();
        // ... your contract logic ...
        uint256 gasUsed = gasBefore - gasleft();
        return gasUsed;
    }
}
`;

secureEthContracts.analyzeContract(sampleContractCode);
