import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIRequest } from '../models/apirequest.model';
import { map, catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { of, throwError } from 'rxjs';
import { constants } from '../constants-enums/constants';
export enum APIMethod {
  GET,
  POST,
  PUT,
  DELETE,
  POST_FILE,
}

/**
 * Service for manage API executions like GET, POST, PUT, DELETE, GET FILE USING POST METHOD.
 * [Injectable description] -> Annotation to indicate that service will be injectale in application.
 */

@Injectable()
export class ApiService {
  //variable declaration
  private baseURl: string = constants.BASE_API_ENDPOINT;
  headers: HttpHeaders;
  /**
   * Constructor for ApiService.
   * @param {Http} public apiExecuter [HTTP client to execute methods like GET, POST, PUT, DELETE]
   */
  constructor(
    public apiExecuter: HttpClient,
  ) {
    this.headers = new HttpHeaders();
  }


  executeAPI(apiRequest: APIRequest, fileEvent?: boolean) {

    this.populateHeaders(apiRequest.getContentType());
    switch (apiRequest.method) {
      case APIMethod.GET:
        debugger
        return this.apiExecuter
          .get(this.baseURl + apiRequest.endpoint)
          .pipe(
            map((res) => this.handleResponse(res)),
            catchError((data) => {
              return throwError(data);
            })           
          );

      case APIMethod.POST:
        return this.apiExecuter
          .post(this.baseURl + apiRequest.endpoint, apiRequest.getRawBody(), {
            headers: this.headers,
          })
          .pipe(
            map((res) => this.handleResponse(res)),
            catchError((data) => {
              return throwError(data);
            })
          );

      case APIMethod.PUT:
        return this.apiExecuter
          .put(this.baseURl + apiRequest.endpoint, apiRequest.getRawBody(), {
            headers: this.headers,
          })
          .pipe(
            map((res) => this.handleResponse(res)),
            catchError((data) => {
            return throwError(data);
            })
          );

      case APIMethod.DELETE:
        return this.apiExecuter
          .delete(this.baseURl + apiRequest.endpoint, { headers: this.headers })
          .pipe(
            map((res) => this.handleResponse(res)),
            catchError((data) => {
              return throwError(data);
            })
          );

      case APIMethod.POST_FILE:
        return this.apiExecuter
          .post(this.baseURl + apiRequest.endpoint, apiRequest.getRawBody(), {
            responseType: "blob",
            headers: new HttpHeaders().append("Content-Type", "application/json")
          })
          .pipe(
            map((res) => this.handleResponse(res)),
            catchError((data) => {
              return throwError(data);
            })
          );
    }
  }

  populateHeaders(contentType: string) {
    this.headers.set('Content-Type', contentType);
  }

  handleResponse(res: any) {
    const parseResponse = res;
    return res;
  }
  handleUnauthorizedError(err:any){

}
  handleInterServerError(data:any):boolean
  {
    if (data != null && data.status===500)
    {
      return true;
    }

    return false;
  }
  triggerLog(e: KeyboardEvent) {
      e.preventDefault();
      e.stopImmediatePropagation();
  }
}
