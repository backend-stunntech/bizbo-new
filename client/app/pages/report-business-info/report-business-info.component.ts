import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' 
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


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

  
  constructor(private formBuilder: FormBuilder, private router: Router) { }


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
      console.log("Form Submitted Successfully");
      console.log(this.reportForm.value);
      this.reportForm.reset();
      this.router.navigate(['report-business-info']);

    }
    else{
      console.log("Form invalid");
    }
  }

  }


