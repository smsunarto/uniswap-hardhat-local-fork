const hre = require("hardhat");
const { BigNumber } = require("ethers");

async function main() {
    const abi = [
        // Read-Only Functions
        "function balanceOf(address owner) view returns (uint256)",
        "function decimals() view returns (uint8)",
        "function symbol() view returns (string)",

        // Authenticated Functions
        "function transfer(address to, uint amount) returns (boolean)",

        // Events
        "event Transfer(address indexed from, address indexed to, uint amount)",
    ];

    const provider = new ethers.providers.JsonRpcProvider();

    await provider.send("hardhat_impersonateAccount", [
        "0x0ec9e8aA56E0425B60DEe347c8EFbaD959579D0F",
    ]);

    const signer = await provider.getSigner(
        "0x0ec9e8aA56E0425B60DEe347c8EFbaD959579D0F"
    );

    const uniToken = new ethers.Contract(
        "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
        abi,
        signer
    );

    const tx = await uniToken.transfer(
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        BigNumber.from("11000000000000000000000000")
    );

    console.log(tx);

    console.log(
        (
            await uniToken.balanceOf(
                "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
            )
        ).toString()
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
