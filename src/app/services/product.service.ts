import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  loadproduct(category_name):Observable<Product>{
    return this.http.post<Product>('http://localhost/API/PROJECT/amsler_tool/product/loadproduct.php',{category_name})
  }
}
