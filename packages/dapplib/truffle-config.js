require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun foot dance release noble pudding coral light army gauge'; 
let testAccounts = [
"0x8748fadfa2b87a1968242cf76dd982f0c62e24439384b23e885a3c3cd19d9527",
"0x4f862fbbb1967929393954d5ec6ba934dffd6f437f4b13bd07a8831153c98c67",
"0xedcecad3d41591d35530d7ab9d3cf2cafbd8755ed44f6f465e4d27881d8769f2",
"0xd3e4ef6541fbac10ede2be99d69e5f23b947b3bc0cf972fd66e56e25d34876e7",
"0xe25ab2af8791fba3d51fe7ff177bc23bd9fd1ac1c6cadc78c50bc66c72fc0fb6",
"0xc91fa6f81e2a9c1df877c6a2fda5940f6a35d23ba028920da525ecdb1b099a02",
"0xad7675fc9c2336cedc048a03ae452c7cdad6722dea8870ee87868d4e10ef727d",
"0xdcaef440580f82d3745a0aa5b05a7cd767eb6f7976097be1824c51ef68c4eb4d",
"0x5d5252fb67e4223c01bd574a615445cf195359378346f47b1d14a583314e7274",
"0x44853c72e984432df716a2b015f6577efc5758d0d24c0730b28c9d26de622931"
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

