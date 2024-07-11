module.exports = {
  networks: {
    shasta: {
      privateKey: 'YOUR_PRIVATE_KEY',
      consume_user_resource_percent: 30,
      fee_limit: 1e9,
      fullHost: "https://api.shasta.trongrid.io",
      network_id: "*"
    }
  },
  solc: {
    version: '0.8.6'
  }
};
