import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import{ LazyServiceModule} from './lazy-service.module'


@Injectable({
  providedIn: LazyServiceModule
})
export class EnvironmentUrlService {
  public urlAddress: string = environment.urlAddress;

  constructor() { }
}
