import { LegacyWallet } from './legacy-wallet';
const bitcoin = require('bitcoinjs-lib');

export class WatchOnlyWallet extends LegacyWallet {
  constructor() {
    super();
    this.type = 'watchOnly';
  }

  getTypeReadable() {
    return 'Watch-only';
  }

  allowSend() {
    return false;
  }

  getAddress() {
    return this.secret;
  }

  createTx(utxos, amount, fee, toAddress, memo) {
    throw new Error('Not supported');
  }

  valid() {
    try {
      bitcoin.address.toOutputScript(this.getAddress());
      return true;
    } catch (e) {
      return false;
    }
  }
}
