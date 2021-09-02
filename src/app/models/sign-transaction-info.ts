import { AirGapWallet, IACMessageDefinitionObjectV3 } from '@zarclays/zgap-coinlib-core'

export interface SignTransactionInfo {
  wallet: AirGapWallet
  signTransactionRequest: IACMessageDefinitionObjectV3
}
