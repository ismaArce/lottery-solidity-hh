const { run } = require("hardhat")
const { modules } = require("web3")

const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Contract source code already verified")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
