import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmRawTransaction, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js"
import { airdrop } from "../airdrop";
import { showBalance } from "../show-balance";

export const transferSol = async (from: Keypair, to: PublicKey, amount: number) => {
    const connection = new Connection("http://127.0.0.1:8899", "confirmed")
    const transaction = new Transaction();

    const instruction = SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: LAMPORTS_PER_SOL * amount
    })

    transaction.add(instruction);
    await sendAndConfirmTransaction(connection, transaction, [
        from
    ])
    console.log("Done!");
}

// Creating KeyPair
const secret = Uint8Array.from([28, 251, 187, 44, 10, 26, 131, 33, 9, 97, 61, 68, 109, 247, 76, 91, 26, 77, 178, 189, 15, 131, 127, 198, 75, 222, 253, 111, 218, 92, 1, 36, 210, 210, 151, 233, 93, 67, 61, 3, 55, 107, 212, 5, 236, 6, 1, 58, 35, 80, 44, 187, 46, 153, 41, 234, 92, 147, 125, 12, 192, 60, 226, 171])
const fromKeypair = Keypair.fromSecretKey(secret)
const toPublicKey = new PublicKey("7B6sQdQ8YW2qLUBwpt7JRzVumZc4FvBWT8YjxmJqVM9w");

(async () => {
    // await airdrop(fromKeypair.publicKey, 4);
    const initBalance = await showBalance(fromKeypair.publicKey)
    console.log(`Initial Balance of from wallet is ${initBalance}`);

    const initBalanceto = await showBalance(toPublicKey)
    console.log(`Initial Balance of to wallet is ${initBalanceto}`);

    await transferSol(fromKeypair, toPublicKey, 2);

    const initBalance2 = await showBalance(fromKeypair.publicKey)
    console.log(`Initial Balance of from wallet is ${initBalance2}`);

    const initBalanceto2 = await showBalance(toPublicKey)
    console.log(`Initial Balance of to wallet is ${initBalanceto2}`);
})()