import { Component, EventEmitter, inject, Output } from '@angular/core';
import { dopeTrenchStockItem } from '../../models/dopeTrenchStockItem.model';
import { TradingService } from '../../services/trading.service';
import { CommonModule } from '@angular/common';
import { itemTransactedEvent } from '../../models/itemTransactedEvent';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { UtilityService } from '../../services/utility.service';


@Component({
  selector: 'app-dopetrenchcoat',
  standalone: true,
  imports: [CommonModule, NgxSliderModule],
  templateUrl: './dopetrenchcoat.component.html',
  styleUrl: './dopetrenchcoat.component.css'
})
export class DopetrenchcoatComponent
{
  hidden = true;
  basketItemName = '';
  basketCount = 0;
  basketPrice = 0;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1
  }

  utilityService = inject(UtilityService);
  tradingService = inject(TradingService);

  @Output()
  emitItemSold = new EventEmitter<itemTransactedEvent>;

  placeSaleOrder($event: itemTransactedEvent)
  {
    this.emitItemSold.emit($event);
  }
  cancelClicked()
  {
    this.hidden = !this.hidden;
  }
  sellClicked()
  {
    this.emitItemSold.emit({ name: this.basketItemName, price: this.basketPrice, quantity: this.basketCount })
    this.hidden = true;
  }
  showSellFor(basketItemName: string, basketCount: number)
  {
    console.log(basketItemName);
    this.basketPrice = this.tradingService.getStockPrice(basketItemName) ?? 0;
    this.options = { ...this.options, ceil: basketCount };
    this.basketItemName = basketItemName;
    this.hidden = false;
  }
}
