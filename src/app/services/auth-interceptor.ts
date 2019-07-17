import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';

/**
 * A middlewire used for put jwt into requests
 */

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getToken();
    const request = req.clone({
      headers: req.headers.set('authorization', 'Bearer ' + token)
      // setHeaders: {
      //   'Authorization': `Bearer ${token}`
      // }
    });
    // console.log(request.headers);
    return next.handle(request);
  }
}
