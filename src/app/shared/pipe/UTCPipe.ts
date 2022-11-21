import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'local'
})
export class UTCtoLOCALPipe implements PipeTransform{
    transform(utcdate: string) {
        const x = new Date(utcdate)
        var y=x.toString();
        var date: Date = new Date(y.substring(0, 24));
        return date;
    }

 }