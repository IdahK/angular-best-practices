import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service';
import { SharedModule } from '../shared/shared.module';
import { FilterClassesService } from './filter-classes.service';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  imports: [RouterModule, CommonModule, SharedModule],
  exports: [CatalogComponent],
  declarations: [CatalogComponent, OrderByPipe],
  providers: [CatalogRepositoryService, FilterClassesService],
})
export class CatalogModule {}
