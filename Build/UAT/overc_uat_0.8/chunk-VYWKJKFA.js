import{_a as o,n as a,na as s,p as c}from"./chunk-OEJ43FKK.js";var h=(()=>{let e=class e{constructor(t,r){this.http=t,this.auth=r}Get(t,r){return this.http.get("/overc-idmaster-service/subProduct/"+t+"?subProductValue="+r+"&companyId="+this.auth.companyId+"&languageId="+this.auth.languageId)}Create(t){return this.http.post("/overc-idmaster-service/subProduct",t)}CreateBulk(t){return this.http.post("/overc-idmaster-service/subProduct/create/list",t)}Update(t){return this.http.patch("/overc-idmaster-service/subProduct/"+t.subProductId+"?subProductValue="+t.subProductValue+"&companyId="+this.auth.companyId+"&languageId="+this.auth.languageId,t)}UpdateBulk(t){return this.http.patch("/overc-idmaster-service/subProduct/update/list",t)}Delete(t,r){return this.http.delete("/overc-idmaster-service/subProduct/"+t+"?subProductValue="+r+"&companyId="+this.auth.companyId+"&languageId="+this.auth.languageId)}DeleteBulk(t){return this.http.post("/overc-idmaster-service/subProduct/delete/list",t)}search(t){return this.http.post("/overc-idmaster-service/subProduct/find",t)}};e.\u0275fac=function(r){return new(r||e)(c(s),c(o))},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var m=(()=>{let e=class e{constructor(t,r){this.http=t,this.auth=r}Get(){}Create(t){return this.http.post("/overc-idmaster-service/province",t)}Update(t){return this.http.patch("/overc-idmaster-service/province/"+t.provinceId+"?companyId="+this.auth.companyId+"&countryId="+t.countryId+"&languageId="+this.auth.languageId,t)}Delete(t){return this.http.delete("/overc-idmaster-service/province/"+t.provinceId+"?companyId="+this.auth.companyId+"&countryId="+t.countryId+"&languageId="+this.auth.languageId)}search(t){return this.http.post("/overc-idmaster-service/province/find",t)}};e.\u0275fac=function(r){return new(r||e)(c(s),c(o))},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var l=(()=>{let e=class e{constructor(t,r){this.http=t,this.auth=r}Get(t){return this.http.get("/overc-idmaster-service/city/"+t)}Create(t){return this.http.post("/overc-idmaster-service/city",t)}Update(t){return this.http.patch("/overc-idmaster-service/city/"+t.cityId+"?languageId="+this.auth.languageId+"&companyId="+this.auth.companyId+"&countryId="+t.countryId+"&provinceId="+t.provinceId+"&districtId="+t.districtId,t)}Delete(t){return this.http.delete("/overc-idmaster-service/city/"+t.cityId+"?languageId="+this.auth.languageId+"&companyId="+this.auth.companyId+"&countryId="+t.countryId+"&provinceId="+t.provinceId+"&districtId="+t.districtId)}search(t){return this.http.post("/overc-idmaster-service/city/find",t)}};e.\u0275fac=function(r){return new(r||e)(c(s),c(o))},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var f=(()=>{let e=class e{constructor(t,r){this.http=t,this.auth=r}Get(t){return this.http.get("/overc-idmaster-service/country/"+t)}Create(t){return this.http.post("/overc-idmaster-service/country",t)}Update(t){return this.http.patch("/overc-idmaster-service/country/"+t.countryId+"?languageId="+this.auth.languageId+"&companyId="+this.auth.companyId,t)}Delete(t){return this.http.delete("/overc-idmaster-service/country/"+t+"?languageId="+this.auth.languageId+"&companyId="+this.auth.companyId)}search(t){return this.http.post("/overc-idmaster-service/country/find",t)}};e.\u0275fac=function(r){return new(r||e)(c(s),c(o))},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{h as a,m as b,l as c,f as d};
