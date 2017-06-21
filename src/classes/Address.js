class Address {
  constructor(){

    let _transactions = []; // private data

    let this.getTransaction = function(id){
      return typeof _transactions[id] !== 'undefined' ? _transactions[id] : [];
    }

    let this.addTransaction = function(tx){
      _transactions[tx.id] = tx
    }

    this.confirmed = 0;
    this.unconfirmed = 0;
    this.name  = 0;
    this.isUsed = false;
    this.isChange = false;
    this.address = 0;
    this.accountIndex = false;

  }

}