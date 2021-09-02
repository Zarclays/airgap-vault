import { AirGapWallet } from '@zarclays/zgap-coinlib-core'

import { Secret } from '../models/secret'

export function isSecretMigrated(secret: Secret): boolean {
  return secret.fingerprint && secret.wallets.every(isWalletMigrated)
}

export function isWalletMigrated(wallet: AirGapWallet): boolean {
  return !!wallet.masterFingerprint
}
