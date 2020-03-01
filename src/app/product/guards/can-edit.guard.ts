import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanEditGuard implements CanActivate {
  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean|UrlTree>|boolean{
    console.log("can Edit guard",state.url);
    console.log("P id",next.params['id']);
    return window.confirm("Do you want to edit");
  }
}
