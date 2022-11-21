import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {map} from 'rxjs/operators';
import { APIRequest } from 'src/app/shared/models/apirequest.model';
import { APIMethod, ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class uploadedFileservice {

  constructor( private apiservice: ApiService) {
  }

  GetDataTemplates(): Observable<any[]>  {
    const apiRequest: APIRequest = new APIRequest('/posts', APIMethod.GET);
    return this.apiservice.executeAPI(apiRequest).pipe(
      map((result) => {
        return result;
      })
    );
  }



}