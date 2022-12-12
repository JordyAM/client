import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  readonly customerAPIUrl = "https://localhost:7113/api";

  constructor(private http:HttpClient) { }

  getCustomerList():Observable<any[]> {
    return this.http.get<any>(this.customerAPIUrl + '/Customers');
  }

  getCustomerId(id:number|string){
    return this.http.get(this.customerAPIUrl + `/Customers/${id}`);
  }

  addCustomer(data:any) {
    return this.http.post(this.customerAPIUrl+ '/Customers', data);
  }

  updateCustomer(id:number|string, data:any){
    return this.http.put(this.customerAPIUrl + `/Customers/${id}`, data);
  }

  deleteCustomer(id:number|string){
    return this.http.delete(this.customerAPIUrl + `/Customers/${id}`);
  }
}
