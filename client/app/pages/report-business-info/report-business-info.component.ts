import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-report-business-info',
  templateUrl: './report-business-info.component.html',
  styleUrls: ['./report-business-info.component.css']
})
export class ReportBusinessInfoComponent implements OnInit {
  
  reportForm: FormGroup;

  businessLocation = new FormControl('', [Validators.required]);
  businessType = new FormControl('', [Validators.required]);
  experience = new FormControl('', [Validators.required]);
  businessEntityType = new FormControl('', [Validators.required]);
  budget = new FormControl('', [Validators.required]);
  havePartners = new FormControl('', [Validators.required]);
  companyRegistered = new FormControl('', [Validators.required]);
  lookingInvestors = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);

  
  constructor(private formBuilder: FormBuilder) { }


    ngOnInit() {
      this.reportForm = this.formBuilder.group({
        businessLocation: this.businessLocation,
        businessType: this.businessType,
        experience: this.experience,
        businessEntityType: this.businessEntityType,
        budget: this.budget,
        havePartners: this.havePartners,
        companyRegistered: this.companyRegistered,
        lookingInvestors: this.lookingInvestors,
        email: this.email
      });
    }

  submitReport(){
    if(this.reportForm.valid){
          console.log("form Submitted Successfully");

    }
    else{
      console.log("Failed");
    }
  }


  }


