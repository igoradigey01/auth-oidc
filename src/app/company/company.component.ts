import { Component, OnInit } from '@angular/core';
import { Company } from './../_interfaces/company.model';
import { RepositoryService } from './../shared/sevices/repository.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']

})
export class CompanyComponent implements OnInit {

  public companies?: Company[];


  constructor(
    private repository: RepositoryService
  ) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  public getCompanies = () => {
    const apiAddress: string = "api/Company";
    this.repository.getData(apiAddress)
    .subscribe(res => {
      this.companies = res as Company[];
    })
  }

}
