// Import web3
const web3 =  require("@solana/web3.js");

(async () => {
  // Connect to cluster
  console.log(web3.clusterApiUrl('devnet'))
  const connection = new web3.Connection(
    web3.clusterApiUrl('devnet'),
    'confirmed',
  );
  // Testing if connection is stable
  console.log(connection.getEpochInfo())


    // Generate a new random public key for sending wallet
    const from = web3.Keypair.generate();
    const airdropSignature = await connection.requestAirdrop(
      from.publicKey,
      web3.LAMPORTS_PER_SOL,
    );
    await connection.confirmTransaction(airdropSignature);
  
    // Generate a new random public key for recieving wallet
    const to = web3.Keypair.generate();
  
    // Add transfer instruction to transaction
    const transaction = new web3.Transaction().add(
      web3.SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to.publicKey,
        lamports: web3.LAMPORTS_PER_SOL / 100,
      }),
    );
  
    // Sign transaction, broadcast, and confirm
    const signature = await web3.sendAndConfirmTransaction(
      connection,
      transaction,
      [from],
    );

    /*
    Transaction 
    */
    console.log('FROM_PK', from.publicKey);
    console.log('TO_PK', to.publicKey);
    console.log('SIGNATURE', signature);

})();
