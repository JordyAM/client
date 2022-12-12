import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerApiService } from 'src/app/customer-api.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  customerList$!:Observable<any[]>;


  constructor(private service:CustomerApiService) { }

  ngOnInit(): void {
    this.customerList$ = this.service.getCustomerList();
  }

}
