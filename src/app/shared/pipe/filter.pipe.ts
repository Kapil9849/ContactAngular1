import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], columnName:string[],searchText: string): any {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    let result:any;
    for(let i=0;i<columnName.length;i++){
         let filterresult= items.filter( it => {
             return it[columnName[i]].toLowerCase().includes(searchText) ;   
        });
        if(filterresult.length>0)
        {
          result=filterresult;
          break;
        }
      }
        return result;
  }
}