import{_a as o,n as s,na as c,p as a}from"./chunk-OEJ43FKK.js";var h=(()=>{let e=class e{constructor(t,r){this.http=t,this.auth=r}Get(t,r){return this.http.get("/overc-idmaster-service/product/"+t+"?subProductId="+r+"&companyId="+this.auth.companyId+"&languageId="+this.auth.languageId)}Create(t){return this.http.post("/overc-idmaster-service/product",t)}CreateBulk(t){return this.http.post("/overc-idmaster-service/product/create/list",t)}Update(t){return this.http.patch("/overc-idmaster-service/product/"+t.productId+"?subProductId="+t.subProductId+"&companyId="+this.auth.companyId+"&languageId="+this.auth.languageId,t)}UpdateBulk(t){return this.http.patch("/overc-idmaster-service/product/update/list",t)}Delete(t,r){return this.http.delete("/overc-idmaster-service/product/"+t+"?subProductId="+r+"&companyId="+this.auth.companyId+"&languageId="+this.auth.languageId)}DeleteBulk(t){return this.http.post("/overc-idmaster-service/product/delete/list",t)}search(t){return this.http.post("/overc-idmaster-service/product/find",t)}};e.\u0275fac=function(r){return new(r||e)(a(c),a(o))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{h as a};