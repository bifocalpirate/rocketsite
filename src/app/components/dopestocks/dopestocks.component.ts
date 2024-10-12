import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { dopeStock } from '../../models/dopeStock.model';
import { CommonModule } from '@angular/common';
import { TradingService } from '../../services/trading.service';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { UtilityService } from '../../services/utility.service';
import { itemTransactedEvent } from '../../models/itemTransactedEvent';

@Component({
  selector: 'app-dopestocks',
  standalone: true,
  imports: [CommonModule, NgxSliderModule],
  templateUrl: './dopestocks.component.html',
  styleUrl: './dopestocks.component.css'
})
export class DopestocksComponent
{
  tradingService = inject(TradingService);
  utilityService = inject(UtilityService);

  basketItemName!: string;
  basketAvailable!: number;
  basketItemPrice!: number;
  basketCount = 1;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1
  }


  @Output()
  emitItemPurchased = new EventEmitter<itemTransactedEvent>;

  hidden = true;

  cancelClicked()
  {
    this.hidden = true;
  }

  showPurchaseFor(basketItemName: string, basketAvailable: number, basketItemPrice: number)
  {    
    this.basketItemName = basketItemName;
    this.options = { ...this.options, ceil: this.utilityService.clamp((this.tradingService.tradingSheet()?.cash || 0) / basketItemPrice, 0, basketAvailable) | 0 };
    this.basketAvailable = basketAvailable;
    this.basketItemPrice = basketItemPrice;
    this.hidden = false;
  }

  buyClicked()
  {    
    this.emitItemPurchased.emit({ name: this.basketItemName, price: this.basketItemPrice, quantity: this.basketCount })
    this.hidden = true;
  }
}
