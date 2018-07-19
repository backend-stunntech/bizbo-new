import { Component, OnInit } from '@angular/core';
import { Provider } from '../../shared/service-provider.model'

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.css']
})
export class ServiceProvidersComponent implements OnInit {
  Accountant = [
    new Provider('./assets/images/service-provider-1.png','Jason Abbott','Brooklyn'),
    new Provider('./assets/images/service-provider-2.png','Dollie Green','Warsaw, Poland'),
    new Provider('./assets/images/service-provider-3.png','Bryan Pratt','Stockholm, Sweden'),
    new Provider('./assets/images/service-provider-4.png','Sally Castillo','Brooklyn'),
    new Provider('./assets/images/service-provider-5.png','Bryan Pratt','Stockholm, Sweden'),
    new Provider('./assets/images/service-provider-6.png','Victor Castro','Potland, OR')
    
  ];
  Software_Developer = [
    new Provider('./assets/images/service-provider-6.png','Victor Castro','Potland, OR'),
    new Provider('./assets/images/service-provider-5.png','Bryan Pratt','Stockholm, Sweden'),
    new Provider('./assets/images/service-provider-4.png','Sally Castillo','Brooklyn'),
    new Provider('./assets/images/service-provider-3.png','Bryan Pratt','Stockholm, Sweden'),
    new Provider('./assets/images/service-provider-2.png','Dollie Green','Warsaw, Poland'),
    new Provider('./assets/images/service-provider-1.png','Jason Abbott','Brooklyn'),

  ];
  Sales_Consultant = [
    new Provider('./assets/images/service-provider-1.png','Jason Abbott','Brooklyn'),
    new Provider('./assets/images/service-provider-3.png','Dollie Green','Warsaw, Poland'),
    new Provider('./assets/images/service-provider-5.png','Bryan Pratt','Stockholm, Sweden'),
    new Provider('./assets/images/service-provider-7.png','Sally Castillo','Brooklyn'),
    new Provider('./assets/images/service-provider-9.png','Sally Castillo','Stockholm, Sweden'),
    new Provider('./assets/images/service-provider-11.png','Victor Castro','Potland, OR')
    
  ];
  Banker = [
    new Provider('./assets/images/service-provider-2.png','Jason Abbott','Brooklyn'),
    new Provider('./assets/images/service-provider-4.png','Dollie Green','Warsaw, Poland'),
    new Provider('./assets/images/service-provider-6.png','Bryan Pratt','Stockholm, Sweden'),
    new Provider('./assets/images/service-provider-8.png','Sally Castillo','Brooklyn'),
    new Provider('./assets/images/service-provider-10.png','Bryan Pratt','Stockholm, Sweden'),
    new Provider('./assets/images/service-provider-1.png','Victor Castro','Potland, OR')
    
  ];
  Management_Consultant = [
    new Provider('./assets/images/service-provider-10.png','Jason Abbott','Brooklyn'),
    new Provider('./assets/images/service-provider-9.png','Dollie Green','Warsaw, Poland'),
    new Provider('./assets/images/service-provider-3.png','Bryan Pratt','Stockholm, Sweden'),
    new Provider('./assets/images/service-provider-7.png','Sally Castillo','Brooklyn'),
    new Provider('./assets/images/service-provider-5.png','Bryan Pratt','Stockholm, Sweden'),
    new Provider('./assets/images/service-provider-11.png','Victor Castro','Potland, OR')
    
  ];
  providers : Provider[];

  ProvidersCategory = ['Accountant','Software Developer','Sales Consultant','Banker','Management Consultant'];
  
  constructor() { 
    this.providers= this.Accountant;
  }

  ngOnInit() {}
  selectProviderCategory(selector: String){
    if(selector=='Accountant') {
      this.providers = this.Accountant;
      console.log('Accountant');
      
    }
    if(selector=='Software Developer') {
      this.providers = this.Software_Developer;
      console.log('Software Developer');
      
    }
    if(selector=='Sales Consultant') {
      this.providers = this.Sales_Consultant;
      console.log('Sales Consultant');
    }
    if(selector=='Banker') {
      this.providers = this.Banker;
      console.log('Banker');
    }
    if(selector=='Management Consultant') {
      this.providers = this.Management_Consultant;
      console.log('Management Consultant');
      
    }
  }

}
