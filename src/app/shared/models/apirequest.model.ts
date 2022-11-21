// All Imports
import { APIMethod } from '../services/api.service';

/**
 * Model for handling parameters of http request
 */
interface INameToValueMap {
  [key: string]: any;
}

export class APIRequest {
  endpoint: string;
  method: APIMethod;
  private contentType: string;
  private keys: Array<string>;
  private values: Array<string>;
  private rawBody: any;
  private canHideSpinner: boolean = false;

  constructor(
    endpoint: string,
    method: APIMethod,
    canHideSpinner: boolean = false
  ) {
    this.endpoint = endpoint;
    this.method = method;
    this.keys = [];
    this.values = [];
    this.contentType = 'application/json';
    this.canHideSpinner = canHideSpinner;
  }

  addProperty(key: any, value: any) {
    this.keys.push(key);
    this.values.push(value);
  }

  addAll(data: any) {
    this.rawBody = data;
  }

  getRawBody() {
    return this.rawBody;
  }

  getBody(): any {
    const rawData: INameToValueMap = {};
    for (let index = 0; index < this.keys.length; index++) {
      rawData[this.keys[index]] = this.values[index];
    }

    return JSON.stringify(rawData);
  }

  getCanHideSpinner() {
    return this.canHideSpinner;
  }

  getContentType() {
    return this.contentType;
  }

  setContentType(contentType: string) {
    this.contentType = contentType;
  }

  DownloadFile(response: any, type:string,fileInfo:any,error?:string)
  {
    var filename:string='';
    if(type=='text/plain')
    {
      filename = (fileInfo.FileName.split('.'))[0] + '.txt';      
    }
    else{
      filename = (error == "Error") ? (fileInfo.FileName.split('.'))[0] + '.xlsx': fileInfo.FileName;
    }
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    const blob = new Blob([response], { type: type });
    const url = window.URL.createObjectURL(blob);
    a.href = url; a.download = filename; a.click();
    window.URL.revokeObjectURL(url);
  }
}
