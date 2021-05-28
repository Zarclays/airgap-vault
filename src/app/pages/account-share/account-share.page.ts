import { IACMessageDefinitionObject } from '@airgap/coinlib-core'
import { Component } from '@angular/core'

import { NavigationService } from '../../services/navigation/navigation.service'

import { ErrorCategory, handleErrorLocal } from './../../services/error-handler/error-handler.service'

@Component({
  selector: 'airgap-account-share',
  templateUrl: './account-share.page.html',
  styleUrls: ['./account-share.page.scss']
})
export class AccountSharePage {
  public interactionUrl: IACMessageDefinitionObject
  public splits: string[] = []

  constructor(private readonly navigationService: NavigationService) {
    this.interactionUrl = this.navigationService.getState().interactionUrl
  }

  public done(): void {
    this.navigationService.routeToAccountsTab().catch(handleErrorLocal(ErrorCategory.IONIC_NAVIGATION))
  }
}
