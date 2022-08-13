import {NgModule, ModuleWithProviders} from '@angular/core';
import { TransactionService } from './transaction.service';

@NgModule()
export class ServicesModule {
    static forRoot(): ModuleWithProviders{
        return{
            ngModule: ServicesModule,
            providers: [
                TransactionService
                
            ]
        }
    }
}