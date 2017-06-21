class Transaction {

  constructor( wallet ){
    this.wallet = wallet;
  }


  createRaw(){

  }

  /**
   * Creates a bew transaction
   * @return boolean
   */
  create(amount, to, utxos, addresses, priKeys){

  }

  /**
   * Get a specific Transactions
   * @return obj
   */
  get(){}

  /**
   * Get all transactions for wallet
   * @return array
   */
  getAll(){}


  fortmatUtxos(utxos, addresses){

  }

}

exports = module.exports = Transaction;