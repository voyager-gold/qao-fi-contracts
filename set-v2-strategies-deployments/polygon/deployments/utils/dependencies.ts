
export default {
  // TOKENS
  // Sources:
  // https://docs.matic.network/docs/develop/network-details/mapped-tokens/
  // https://mapper.matic.today/
  USDC: {
    1: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", // This is diff than master: multiple USDCs?
    5: "0x98339D8C260052B7ad81c28c16C0b98420f2B46a",
    137: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // OK
    80001: "0x6D4dd09982853F08d9966aC3cA4Eb5885F16f2b2",
  },
  WETH: {
    1: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    5: "0x60D4dB9b534EF9260a88b0BED6c486fe13E604Fc",
    137: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", // OK
    80001: "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa",
  },
  WMATIC: {
    137: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", // OK
  },
  WBTC: {
    1: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    5: "0x008eD7F6DC65Be87f448dF0F39390824ede6897b",
    137: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", // OK
    80001: "0x36dEB57A9e440F9cd0eE6BCC5Cd2928130B8F279",
  },
  DAI: {
    1: "0x6b175474e89094c44da98b954eedeac495271d0f",
    5: "0x6311344B50D2077BF9804d376EA4C2cEDcB75C1f",
    137: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", // OK
    80001: "0x8Cab8846eE3eF1Cb5b71e87b8997DA8B24640981",
  },
  SUSHI: {
    1: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    137: "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a", // OK
  },
  QUICK: {
    137: "0x831753DD7087CaC61aB5644b308642cc1c33Dc13", // OK
    80001: "0xE4897CBE8023F58537b1818316434C4022650660",
  },

  // Sources: https://analytics-polygon.sushi.com/
  WETH_DAI_SUSHI_PAIR: {
    1: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",
    137: "0x6FF62bfb8c12109E8000935A6De54daD83a4f39f",
    80001: "0x9677a04FCE763638d7dC9a1dbaAA2132ab9B1b6f",
  },
  WETH_WBTC_SUSHI_PAIR: {
    1: "0xBb2b8038a1640196FbE3e38816F3e67Cba72D940",
    137: "0xE62Ec2e799305E0D367b0Cc3ee2CdA135bF89816",
    80001: "0x9457eb337e6f11794282DeD9f2eAb9e25A422b28",
  },

  // Exchanges

  // Source: https://dev.sushi.com/sushiswap/contracts
  SUSHISWAP_ROUTER: {
    1: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
    5: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    137: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    80001: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  },

  SUSHISWAP_FACTORY: {
    1: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
    5: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    137: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    80001: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
  },

  // Source: https://github.com/QuickSwap/quickswap-core
  QUICKSWAP_ROUTER: {
    137: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
    80001: "0xD0957774870Ce6DCB2e6150F4Cf1204aDDCf62DF", // Self-deployed
  },
  QUICKSWAP_FACTORY: {
    137: "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32",
    80001: "0x88dEA849369Bd64163a950Fd25e22727BF5AaCD4", // Self-deployed
  },

  // External protocols
  // Aave V2
  AAVE_LENDING_POOL_ADDRESSES_PROVIDER: {
    137: "0xd05e3E715d945B59290df0ae8eF85c1BdB684744",
    80001: "0x178113104fEcbcD7fF8669a0150721e231F0FD4B",
  },
  AAVE_PROTOCOL_DATA_PROVIDER: {
    137: "0x7551b5D2763519d4e37e8B81929D336De671d46d",
    80001: "0xFA3bD19110d986c5e5E9DD5F69362d05035D045B",
  },

  // Duplicate addresses everywhere
  ZERO_EX_EXCHANGE: {
    1: "0xDef1C0ded9bec7F1a1670819833240f027b25EfF",
    5: "0xDef1C0ded9bec7F1a1670819833240f027b25EfF",
    137: "0xDef1C0ded9bec7F1a1670819833240f027b25EfF",
    80001: "0xDef1C0ded9bec7F1a1670819833240f027b25EfF",
  },

  // Chainlink Oracles

  // Ethereum: https://docs.chain.link/docs/ethereum-addresses/
  // Polygon:  https://docs.chain.link/docs/matic-addresses/
  //
  // These are USD oracles returning 8 decimals
  DAI_CHAINLINK_ORACLE: {
    1: "0x8B3C45a4D2A1DC46FA457397C187712EC71989e6",
    5: "0x2890830E40CB2E1e82245b359491a8F8E7560a4b",
    50: "0xFC539A559e170f848323e19dfD66007520510085",
    137: "0xFC539A559e170f848323e19dfD66007520510085",
    80001: "0x0FCAa9c899EC5A91eBc3D5Dd869De833b06fB046",
  },
  USDC_CHAINLINK_ORACLE: {
    1: "0x7561E6D8301cDac56787E203b06E98427a36B1e0",
    5: "0x7970AC597e74829DECe89AFCCE608eb716cAc8cC",
    50: "0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7",
    137: "0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7",
    80001: "0x572dDec9087154dC5dfBB1546Bb62713147e0Ab0",
  },
  BTC_CHAINLINK_ORACLE: {
    1: "0x2492fa9b6A1Eb35823e14A4420D3E975e2492cAB",
    5: "0x46c2f93470d9367792806f199E5Fc8d1896F16E1",
    50: "0xDE31F8bFBD8c84b5360CFACCa3539B938dd78ae6",
    137: "0xDE31F8bFBD8c84b5360CFACCa3539B938dd78ae6",
    80001: "0xDE31F8bFBD8c84b5360CFACCa3539B938dd78ae6", // Doesn't actually exist
  },
  ETH_CHAINLINK_ORACLE: {
    1: "0xba1e06B6140F90C9d01267C3dFbE3E2445860d0D",
    5: "0xE2cFc870edFb863beF5057ed19cb8F904C84100C",
    50: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
    137: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
    80001: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
  },
  USDT_CHAINLINK_ORACLE:  {
    1: "0x3E7d1eAB13ad0104d2750B8863b489D65364e32D",
    5: "0x2ca5A90D34cA333661083F89D831f757A9A50148",
    50: "0x0A6513e40db6EB1b165753AD52E80663aeA50545",
    137: "0x0A6513e40db6EB1b165753AD52E80663aeA50545",
    80001: "0x92C09849638959196E976289418e5973CC96d645",
  },

  // Admin

  MULTI_SIG_OWNER: {
    137: "0xd07ad2E6abb1198e9908f88f854bEE6F9a81b40E",
  },
  HUMAN_FRIENDLY_NAMES: {
    1: "main-net",
    5: "goerli",
    50: "test-rpc",
    137: "polygon-mainnet",
    80001: "polygon-mumbai",
  },
} as any;

export const DEPENDENCY = {
  // Tokens
  AAVE: "AAVE",
  SNX: "SNX",
  LEND: "LEND",
  COMP: "COMP",
  MKR: "MKR",
  LRC: "LRC",
  BAL: "BAL",
  YFI: "YFI",
  DAI: "DAI",
  UNI: "UNI",
  WBTC: "WBTC",
  WETH: "WETH",
  MATIC: "MATIC",
  USDC: "USDC",
  SUSHI: "SUSHI",
  QUICK: "QUICK",

  // External Protocols
  WETH_DAI_SUSHI_PAIR: "WETH_DAI_SUSHI_PAIR",
  WETH_DAI_SUSHI_STAKING_REWARD: "WETH_DAI_SUSHI_STAKING_REWARD",
  WETH_WBTC_SUSHI_PAIR: "WETH_WBTC_SUSHI_PAIR",
  WETH_WBTC_SUSHI_STAKING_REWARD: "WETH_WBTC_SUSHI_STAKING_REWARD",
  ZERO_EX_EXCHANGE: "ZERO_EX_EXCHANGE",
  AAVE_LENDING_POOL_ADDRESSES_PROVIDER: "AAVE_LENDING_POOL_ADDRESSES_PROVIDER",
  AAVE_PROTOCOL_DATA_PROVIDER: "AAVE_PROTOCOL_DATA_PROVIDER",

  // Oracles
  ETH_ORACLE_PROXY: "ETH_ORACLE_PROXY",
  DAI_ORACLE_PROXY: "DAI_ORACLE_PROXY",
  BTC_ORACLE_PROXY: "BTC_ORACLE_PROXY",
  USDC_ORACLE_PROXY: "USDC_ORACLE_PROXY",

  // Chainlink Oracles
  DAI_CHAINLINK_ORACLE: "DAI_CHAINLINK_ORACLE",
  USDC_CHAINLINK_ORACLE: "USDC_CHAINLINK_ORACLE",
  BTC_CHAINLINK_ORACLE: "BTC_CHAINLINK_ORACLE",
  ETH_CHAINLINK_ORACLE: "ETH_CHAINLINK_ORACLE",
  USDT_CHAINLINK_ORACLE: "USDT_CHAINLINK_ORACLE",

  // Exchanges
  SUSHISWAP_ROUTER: "SUSHISWAP_ROUTER",
  SUSHISWAP_FACTORY: "SUSHISWAP_FACTORY",

  QUICKSWAP_ROUTER: "QUICKSWAP_ROUTER",
  QUICKSWAP_FACTORY: "QUICKSWAP_FACTORY",

  // Admin
  MULTI_SIG_OWNER: "MULTI_SIG_OWNER",

  // System Contracts
  CONTROLLER: "Controller",
  BASIC_ISSUANCE_MODULE: "BasicIssuanceModule",
  NAV_ISSUANCE_MODULE: "NavIssuanceModule",
  SET_TOKEN_CREATOR: "SetTokenCreator",
};
