import { NgModule } from '@angular/core';
import { BnNgSearchComponent } from './bn-ng-search.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
  ],
  declarations: [BnNgSearchComponent, SearchPipe],
  exports: [SearchPipe]
})
export class BnNgSearchModule { }
