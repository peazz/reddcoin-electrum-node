class Wallet {

  /**
   * Inits Wallet Object
   *
   * @since  0.0.1
   * @param  string seed
   * @param  string password
   * @param  string seedType - future compat with other seed types
   * @return object
   */
  constructor(seed, password){
    this.seed = seed;
    this.password = password;
  }

  /**
   * Genetate a valid mnemonic seed
   * @return string
   */
  generateMnemonicSeed(){
    this.seed = BIP39.mnemonic(BIP39WordlistEn, 128);
  }

  /**
   * Validates string as valid BIP39 Seed
   *
   * @param  string seed
   * @return boolean
   */
  validateMnemonicSeed(){
    return BIP39.check(BIP39WordlistEn, this.seed);
  }

  /**
   * Creates a wallet via Mnemonic seed
   * @return {[type]} [description]
   */
  createBip39Seed(){
    this.seed = BIP39.mnemonic2seed(this.seed, '');
    return;

  }

  /**
   * Create private and pub keys for requests
   */
  createWalletKeys(seed, password){

    var root             = new HierarchicalKey.seed(seed),
        rootXprv         = root.extendedPrivateKeyString(),
        rootDerivation   = getRootDerivation(),
        hkey             = new HierarchicalKey(rootXprv).derive(rootDerivation),
        masterPublicKey  = hkey.extendedPublicKeyString(),
        masterPrivateKey = hkey.extendedPrivateKeyString();
                                                                                                                     @formatter:on
    this.masterPublicKey = masterPublicKey;
    this.masterPrivateKey = masterPrivateKey;

  }

  /**
   * Create the wallet
   */
  buildFromKeys(){


    if(typeof this.publicKey === 'undefined' || typeof this.privateKey === 'undefined'){
      throw Error('Cannot build walet from keys without public and private keys.')
    }

    var masterPublicKey = this.publicKey;
    var masterPrivateKey = this.privateKey || false;

    //txBuilder = TxBuilder.create();

    var accountsToCreate = 1; // change this later

    var defaultAccount = {
        name             : '',
        type             : 'encrypted',
        isActive         : false,
        masterPublicKey  : publicKey,
        masterPrivateKey : privateKey
    };

    for(var i = 0; i < accountsToCreate; i++){
        // accounts.push(AccountFactory.account(i, defaultAccount, this.password));
    }
  }


  /**
   * Return current wallet as an
   * object
   *
   * @since  0.0.1
   * @return object
   */
  toObject(){}

}

exports = module.exports = Wallet;