import { Component, OnInit } from '@angular/core';
import { Company } from './../_interfaces/company.model';
import { RepositoryService } from './../../shared/services/repository.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
