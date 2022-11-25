import { IndexedTx, StargateClient } from "@cosmjs/stargate"
import { Tx } from "cosmjs-types/cosmos/tx/v1beta1/tx"

const rpc = "rpc.sentry-01.theta-testnet.polypore.xyz:26657"

const runAll = async(): Promise<void> => {
    console.log("TODO")
    const client = await StargateClient.connect(rpc)
    console.log("With client, chain id:", await client.getChainId(), ", height:", await client.getHeight())

    console.log(
        "Alice balances:",
        await client.getAllBalances("cosmos1ykt8lw86us7d93de4gqr4pg0z3ujse6vjjtx3y"), // <-- replace with your generated address
    )
    const faucetTx: IndexedTx = (await client.getTx(
        "465156F8512B25CB806AF59EE36ACBC84779066BFE331DC954E819BA98BAC0B8",
    ))!

    console.log("Faucet Tx:", faucetTx)

    const decodedTx: Tx = Tx.decode(faucetTx.tx)
    console.log("DecodedTx:", decodedTx)
    console.log("Decoded messages:", decodedTx.body!.messages)

}


runAll()
