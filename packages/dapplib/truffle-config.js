require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift response tortoise come good process metal genuine'; 
let testAccounts = [
"0x353ea4497231034c297b5b00d31eb9a9ea6d60da71e8f4c8127f995305afa065",
"0x4b645bf8b742e987a2e8f2751de5ca700976738ea84c5e0d2558b88fac119aa9",
"0x34b8a7400e23013e68a4227af13abba4163b5fad0ee709dbfc60f845b5b0b338",
"0x131f6abdcec5d3df2bfcd2c398bd950a5c63eb2e72b7e1b7144340ec7f20cf75",
"0xad0b4ac5f245e50e34d41d6a36212d2dc42aabe5dd22c59e660ad4132ca62c2b",
"0x2b26e61318b71a0526f4bd8a5a1e3fb7785cb881d0581d46f10186beb50c2cc8",
"0xcdb67befdf8304ec953c8186819c7165daf743d8b9268c7572a7381bc706b7fc",
"0x4800dfd2dafa0127683685e869e442abfd5d83ec8063bb941a44727416c41970",
"0x0a6e5ba20aea1e0e94f481886fe76649ee10918e5e5631baeab9686ff0ad3ccf",
"0x37567c13ba900afeb78e0a3ac58378f77b9a7947d345d94e3010375de622716e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

