import { Injectable, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { JwtService } from './jwt.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

@Injectable()
export class HttpService {

  public APP_NAME: string = 'Collaborate';

  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
    private snackbarService: SnackbarService
  ) {

  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${path}`, { params: params })
      .pipe(catchError(this.formatErrors.bind(this)));
  }

  post(path: string, body: any, httpOptions: any = {}): Observable<any> {
    return this.http.post(
      `${path}`, body, httpOptions
    ).pipe(catchError(this.formatErrors.bind(this)));
  }

  postFile(path: string, body: any): Observable<any> {
    return this.http.post(
      `${path}`, body, { responseType: 'blob' }
    ).pipe(catchError(this.formatErrors.bind(this)));
  }

  put(path: string, body: any): Observable<any> {
    return this.http.put(
      `${path}`, body
    ).pipe(catchError(this.formatErrors.bind(this)));
  }

  delete(path: string,): Observable<any> {
    return this.http.delete(
      `${path}`
    ).pipe(catchError(this.formatErrors.bind(this)));
  }

  requestError!: HttpErrorResponse;
  private formatErrors(error: HttpErrorResponse) {
    let errorMessage: string;

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.message || error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status} : ${error?.error?.message || error?.message || error?.statusText}`;
    }
    this.requestError = error.error;
    this.showError(errorMessage);
    return throwError(this.requestError);
  }

  showError(errorMessage: string = 'Unknown error') {
    // console.log('errorMessage', errorMessage);
    this.snackbarService.openSnackBar(errorMessage, 'Close', 'error-snackbar');
  }
}
