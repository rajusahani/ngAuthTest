 
 import { HTTP_INTERCEPTORS,HttpEvent } from '@angular/common/http'; 
 import { finalize, tap } from 'rxjs/operators';  
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpHandler,HttpRequest} from '@angular/common/http';
import { NgxSpinnerService} from "ngx-spinner"; 

@Injectable({
    providedIn: 'root'
  })
export class ApiSpinnerInterceptor implements HttpInterceptor{
    
    private count: number = 0;
     
    constructor(private spinner: NgxSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let finished = true;

       setTimeout(() => {
       if (finished) {
            this.spinner.show();
            console.log('loading...');
        }
       }, 1000);

        this.count++;
        return next.handle(req)
            .pipe ( tap (
                    event => console.log(event),
<<<<<<< HEAD
                    error => console.log( error )
                ), finalize(() => {
                    finished = false;
=======
                    //error => console.log( error )
                ), finalize(() => {
                    finished = true;
>>>>>>> ec4642fb2ce4cee70f807891c7b0e7916dce7846
                    this.count--;                  
                    if ( this.count == 0 ) this.spinner.hide ();
                })
            );
    }
}
export const ApiSpinnerInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ApiSpinnerInterceptor, multi: true }
  ];