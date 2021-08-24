"use strict";(self.webpackChunkvet_frontend=self.webpackChunkvet_frontend||[]).push([[436],{9115:(T,Z,r)=>{r.d(Z,{C:()=>g});var l=r(7573),a=r(7716),p=r(1841);let g=(()=>{class t{constructor(s){this.http=s}getOwners(){return this.http.get(`${l.cG}/owners/getAll`)}getById(s){return this.http.get(`${l.cG}/owners/getById/${s}`)}createOwner(s){return this.http.post(`${l.cG}/owners/create`,s)}updateOwner(s){return this.http.put(`${l.cG}/owners/update/${s.id}`,s)}removeOwner(s){return this.http.delete(`${l.cG}/owners/delete/${s}`)}}return t.\u0275fac=function(s){return new(s||t)(a.LFG(p.eN))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},4716:(T,Z,r)=>{r.d(Z,{z:()=>g});var l=r(7716),a=r(2238),p=r(1095);let g=(()=>{class t{constructor(s){this.dialogRef=s}ngOnInit(){}submit(){this.dialogRef.close(!0)}}return t.\u0275fac=function(s){return new(s||t)(l.Y36(a.so))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-confirmation-dialog"]],decls:10,vars:0,consts:[["mat-dialog-title",""],["mat-dialog-actions","",1,"d-flex","justify-content-between"],["mat-button","","mat-dialog-close",""],["mat-button","","color","warn",3,"click"]],template:function(s,d){1&s&&(l.TgZ(0,"h1",0),l._uU(1,"Confirm your action!"),l.qZA(),l.TgZ(2,"div"),l.TgZ(3,"p"),l._uU(4,"Are you sure you want to continue ?"),l.qZA(),l.qZA(),l.TgZ(5,"div",1),l.TgZ(6,"button",2),l._uU(7,"Cancel"),l.qZA(),l.TgZ(8,"button",3),l.NdJ("click",function(){return d.submit()}),l._uU(9,"Continue"),l.qZA(),l.qZA())},directives:[a.uh,a.H8,p.lW,a.ZT],styles:[""]}),t})()},1436:(T,Z,r)=>{r.d(Z,{K:()=>ht});var l=r(4716),a=r(3679),p=r(2238),g=r(4209),t=r(7716),u=r(5207),s=r(8295),d=r(9983),h=r(3220),B=r(8583),$=r(7539),G=r(1095),R=r(2178);function j(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," BirthDay is required "),t.qZA())}function L(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Field is required "),t.qZA())}function W(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Species is required "),t.qZA())}function z(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Full name is required "),t.qZA())}function K(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Country is required "),t.qZA())}function H(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," City is required "),t.qZA())}function X(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Street is required "),t.qZA())}function V(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Zip code is required "),t.qZA())}function tt(e,i){1&e&&(t.TgZ(0,"mat-dialog-actions"),t._UZ(1,"mat-progress-bar",22),t.qZA())}let P=(()=>{class e extends g.n{constructor(o,n,m,c){super(),this.fb=o,this.dialogRef=n,this.data=m,this.animalsService=c}ngOnInit(){var o,n,m,c,_,v,A,C,b,D,y,q,I,U,N,w,x,O,k,F,E,Y,M,S,J,Q;this.addressForm=this.fb.group({country:[null===(c=null===(m=null===(n=null===(o=this.data)||void 0===o?void 0:o.animal)||void 0===n?void 0:n.owner)||void 0===m?void 0:m.address)||void 0===c?void 0:c.country,a.kI.required],city:[null===(C=null===(A=null===(v=null===(_=this.data)||void 0===_?void 0:_.animal)||void 0===v?void 0:v.owner)||void 0===A?void 0:A.address)||void 0===C?void 0:C.city,a.kI.required],street:[null===(q=null===(y=null===(D=null===(b=this.data)||void 0===b?void 0:b.animal)||void 0===D?void 0:D.owner)||void 0===y?void 0:y.address)||void 0===q?void 0:q.street,a.kI.required],zipCode:[null===(w=null===(N=null===(U=null===(I=this.data)||void 0===I?void 0:I.animal)||void 0===U?void 0:U.owner)||void 0===N?void 0:N.address)||void 0===w?void 0:w.zipCode,a.kI.required]}),this.speciesForm=this.fb.group({label:[null===(k=null===(O=null===(x=this.data)||void 0===x?void 0:x.animal)||void 0===O?void 0:O.species)||void 0===k?void 0:k.label,a.kI.required]}),this.ownerForm=this.fb.group({fullName:[null===(Y=null===(E=null===(F=this.data)||void 0===F?void 0:F.animal)||void 0===E?void 0:E.owner)||void 0===Y?void 0:Y.fullName,a.kI.compose([a.kI.required,a.kI.minLength(3)])],address:this.addressForm}),this.form=this.fb.group({birthDay:[null===(S=null===(M=this.data)||void 0===M?void 0:M.animal)||void 0===S?void 0:S.birthDay,a.kI.required],vaccinated:[null===(Q=null===(J=this.data)||void 0===J?void 0:J.animal)||void 0===Q?void 0:Q.vaccinated],owner:this.ownerForm,species:this.speciesForm})}submit(){var o,n;this.form.valid&&(this.isLoading=!0,this.subscriptions.sink=((null===(o=this.data)||void 0===o?void 0:o.animal)?this.animalsService.updateAnimal(Object.assign(Object.assign({},null===(n=this.data)||void 0===n?void 0:n.animal),this.form.value)):this.animalsService.createAnimal(this.form.value)).subscribe(m=>{this.dialogRef.close(m)}))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.qu),t.Y36(p.so),t.Y36(p.WI),t.Y36(u.u))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-animal-dialog"]],features:[t.qOj],decls:65,vars:18,consts:[["mat-dialog-title",""],[3,"formGroup"],[1,"col-6"],["appearance","fill",1,"w-100"],["matInput","","formControlName","birthDay",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],[4,"ngIf"],[1,"col-6","mb-3"],["formControlName","vaccinated",1,"example-margin"],[1,"container-fluid","p-0"],[1,"row"],["matInput","","formControlName","label"],[1,"container-fluid","mb-4","p-0"],["matInput","","formControlName","fullName"],["matInput","","formControlName","country"],["matInput","","formControlName","city"],["matInput","","formControlName","street"],["matInput","","formControlName","zipCode"],["mat-dialog-actions",""],["mat-button","","type","button","color","primary",3,"disabled","click"],["mat-button","","mat-dialog-close",""],["mode","indeterminate"]],template:function(o,n){if(1&o&&(t.TgZ(0,"h1",0),t._uU(1),t.qZA(),t.TgZ(2,"form",1),t.TgZ(3,"div",2),t.TgZ(4,"mat-form-field",3),t.TgZ(5,"mat-label"),t._uU(6,"Enter birthDay"),t.qZA(),t._UZ(7,"input",4),t._UZ(8,"mat-datepicker-toggle",5),t._UZ(9,"mat-datepicker",null,6),t.YNc(11,j,2,0,"mat-error",7),t.qZA(),t.qZA(),t.TgZ(12,"div",8),t.TgZ(13,"mat-checkbox",9),t._uU(14,"Vaccinated"),t.qZA(),t.YNc(15,L,2,0,"mat-error",7),t.qZA(),t.TgZ(16,"div",1),t.TgZ(17,"div",10),t.TgZ(18,"div",11),t.TgZ(19,"div",2),t.TgZ(20,"mat-form-field",3),t.TgZ(21,"mat-label"),t._uU(22,"Enter species"),t.qZA(),t._UZ(23,"input",12),t.YNc(24,W,2,0,"mat-error",7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",1),t.TgZ(26,"div",13),t.TgZ(27,"div",11),t.TgZ(28,"div",2),t.TgZ(29,"mat-form-field",3),t.TgZ(30,"mat-label"),t._uU(31,"Enter your full name"),t.qZA(),t._UZ(32,"input",14),t.YNc(33,z,2,0,"mat-error",7),t.qZA(),t.qZA(),t.TgZ(34,"div",1),t.TgZ(35,"div",2),t.TgZ(36,"mat-form-field",3),t.TgZ(37,"mat-label"),t._uU(38,"Enter your country"),t.qZA(),t._UZ(39,"input",15),t.YNc(40,K,2,0,"mat-error",7),t.qZA(),t.qZA(),t.TgZ(41,"div",2),t.TgZ(42,"mat-form-field",3),t.TgZ(43,"mat-label"),t._uU(44,"Enter your city"),t.qZA(),t._UZ(45,"input",16),t.YNc(46,H,2,0,"mat-error",7),t.qZA(),t.qZA(),t.TgZ(47,"div",2),t.TgZ(48,"mat-form-field",3),t.TgZ(49,"mat-label"),t._uU(50,"Enter your street"),t.qZA(),t._UZ(51,"input",17),t.YNc(52,X,2,0,"mat-error",7),t.qZA(),t.qZA(),t.TgZ(53,"div",2),t.TgZ(54,"mat-form-field",3),t.TgZ(55,"mat-label"),t._uU(56,"Enter your Zip code"),t.qZA(),t._UZ(57,"input",18),t.YNc(58,V,2,0,"mat-error",7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(59,"div",19),t.TgZ(60,"button",20),t.NdJ("click",function(){return n.submit()}),t._uU(61),t.qZA(),t.TgZ(62,"button",21),t._uU(63,"Cancel"),t.qZA(),t.qZA(),t.YNc(64,tt,2,0,"mat-dialog-actions",7),t.qZA(),t.qZA()),2&o){const m=t.MAs(10);t.xp6(1),t.hij("",n.data.animal?"Update":"Create new"," Animal"),t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(5),t.Q6J("matDatepicker",m),t.xp6(1),t.Q6J("for",m),t.xp6(3),t.Q6J("ngIf",null==n.form.controls.birthDay||null==n.form.controls.birthDay.errors?null:n.form.controls.birthDay.errors.required),t.xp6(4),t.Q6J("ngIf",null==n.form.controls.vaccinated||null==n.form.controls.vaccinated.errors?null:n.form.controls.vaccinated.errors.required),t.xp6(1),t.Q6J("formGroup",n.speciesForm),t.xp6(8),t.Q6J("ngIf",null==n.speciesForm.controls.label||null==n.speciesForm.controls.label.errors?null:n.speciesForm.controls.label.errors.required),t.xp6(1),t.Q6J("formGroup",n.ownerForm),t.xp6(8),t.Q6J("ngIf",null==n.ownerForm.controls.fullName||null==n.ownerForm.controls.fullName.errors?null:n.ownerForm.controls.fullName.errors.required),t.xp6(1),t.Q6J("formGroup",n.addressForm),t.xp6(6),t.Q6J("ngIf",null==n.addressForm.controls.country||null==n.addressForm.controls.country.errors?null:n.addressForm.controls.country.errors.required),t.xp6(6),t.Q6J("ngIf",null==n.addressForm.controls.city||null==n.addressForm.controls.city.errors?null:n.addressForm.controls.city.errors.required),t.xp6(6),t.Q6J("ngIf",null==n.addressForm.controls.street||null==n.addressForm.controls.street.errors?null:n.addressForm.controls.street.errors.required),t.xp6(6),t.Q6J("ngIf",null==n.addressForm.controls.zipCode||null==n.addressForm.controls.zipCode.errors?null:n.addressForm.controls.zipCode.errors.required),t.xp6(2),t.Q6J("disabled",!n.form.valid),t.xp6(1),t.hij(" ",n.data.animal?"Update":"Create"," "),t.xp6(3),t.Q6J("ngIf",n.isLoading)}},directives:[p.uh,a._Y,a.JL,a.sg,s.KE,s.hX,d.Nt,a.Fj,h.hl,a.JJ,a.u,h.nW,s.R9,h.Mq,B.O5,$.oG,p.H8,G.lW,p.ZT,s.TO,R.pW],styles:[""]}),e})();var et=r(9115),f=r(2789),nt=r(6627);function ot(e,i){1&e&&(t.TgZ(0,"th",15),t._uU(1," Id"),t.qZA())}function it(e,i){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.hij(" ",o.id," ")}}function rt(e,i){1&e&&(t.TgZ(0,"th",15),t._uU(1," Species"),t.qZA())}function at(e,i){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.hij(" ",null==o||null==o.species?null:o.species.label," ")}}function lt(e,i){1&e&&(t.TgZ(0,"th",15),t._uU(1," BirthDay"),t.qZA())}function st(e,i){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,null==o?null:o.birthDay,"MMM d, y")," ")}}function mt(e,i){1&e&&(t.TgZ(0,"th",15),t._uU(1," Owner"),t.qZA())}function dt(e,i){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.hij(" ",null==o||null==o.owner?null:o.owner.fullName," ")}}function ct(e,i){1&e&&(t.TgZ(0,"th",15),t._uU(1," TrackingId"),t.qZA())}function ut(e,i){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.hij(" ",null==o?null:o.trackingId," ")}}function pt(e,i){1&e&&(t.TgZ(0,"th",15),t._uU(1," Vaccinated"),t.qZA())}function _t(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"td",16),t.TgZ(1,"mat-checkbox",17),t.NdJ("ngModelChange",function(m){return t.CHM(o).$implicit.vaccinated=m}),t.qZA(),t.qZA()}if(2&e){const o=i.$implicit;t.xp6(1),t.Q6J("ngModel",o.vaccinated)}}function ft(e,i){1&e&&(t.TgZ(0,"th",15),t._uU(1," Actions"),t.qZA())}function gt(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"td",16),t.TgZ(1,"div",13),t.TgZ(2,"button",18),t.NdJ("click",function(){const c=t.CHM(o).$implicit;return t.oxw().edit(c)}),t.TgZ(3,"mat-icon"),t._uU(4,"edit"),t.qZA(),t.qZA(),t.TgZ(5,"button",18),t.NdJ("click",function(){const c=t.CHM(o).$implicit;return t.oxw().remove(c)}),t.TgZ(6,"mat-icon"),t._uU(7,"delete"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}}function Zt(e,i){1&e&&t._UZ(0,"tr",19)}function vt(e,i){1&e&&t._UZ(0,"tr",20)}let ht=(()=>{class e extends g.n{constructor(o,n,m){super(),this.matDialog=o,this.animalsService=n,this.ownersService=m}ngOnInit(){}edit(o){o.ownerId&&(this.subscriptions.sink=this.ownersService.getById(o.ownerId).subscribe(n=>{o.owner=n;const m=this.matDialog.open(P,{width:"600px",data:{animal:o}});this.subscriptions.sink=m.afterClosed().subscribe(c=>{if(c){const _=this.list.find(v=>v.id===o.id);_&&(this.list.splice(this.list.indexOf(_),1,c),this.list=[...this.list])}})}))}create(){const o=this.matDialog.open(P,{width:"600px",data:{}});this.subscriptions.sink=o.afterClosed().subscribe(n=>{n&&(this.list.unshift(n),this.list=[...this.list])})}remove(o){const n=this.matDialog.open(l.z);this.subscriptions.sink=n.afterClosed().subscribe(m=>{m&&(this.subscriptions.sink=this.animalsService.removeAnimal(o.id).subscribe(c=>{this.list=this.list.filter(_=>_.id!==c.id)}))})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.uw),t.Y36(u.u),t.Y36(et.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-table"]],inputs:{list:"list",displayedColumns:"displayedColumns"},features:[t.qOj],decls:29,vars:3,consts:[["mat-table","",1,"mat-elevation-z8","w-100",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","species"],["matColumnDef","birthDay"],["matColumnDef","owner"],["matColumnDef","trackingId"],["matColumnDef","vaccinated"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"container-fluid","d-flex","justify-content-end"],[1,"example-button-container","mt-3"],["mat-mini-fab","","color","primary",3,"click"],["mat-header-cell",""],["mat-cell",""],["disabled","",1,"example-margin",3,"ngModel","ngModelChange"],["mat-icon-button","","aria-label","Delete post",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,n){1&o&&(t.TgZ(0,"table",0),t.ynx(1,1),t.YNc(2,ot,2,0,"th",2),t.YNc(3,it,2,1,"td",3),t.BQk(),t.ynx(4,4),t.YNc(5,rt,2,0,"th",2),t.YNc(6,at,2,1,"td",3),t.BQk(),t.ynx(7,5),t.YNc(8,lt,2,0,"th",2),t.YNc(9,st,3,4,"td",3),t.BQk(),t.ynx(10,6),t.YNc(11,mt,2,0,"th",2),t.YNc(12,dt,2,1,"td",3),t.BQk(),t.ynx(13,7),t.YNc(14,ct,2,0,"th",2),t.YNc(15,ut,2,1,"td",3),t.BQk(),t.ynx(16,8),t.YNc(17,pt,2,0,"th",2),t.YNc(18,_t,2,1,"td",3),t.BQk(),t.ynx(19,9),t.YNc(20,ft,2,0,"th",2),t.YNc(21,gt,8,0,"td",3),t.BQk(),t.YNc(22,Zt,1,0,"tr",10),t.YNc(23,vt,1,0,"tr",11),t.qZA(),t.TgZ(24,"div",12),t.TgZ(25,"div",13),t.TgZ(26,"button",14),t.NdJ("click",function(){return n.create()}),t.TgZ(27,"mat-icon"),t._uU(28,"add"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.Q6J("dataSource",n.list),t.xp6(22),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns))},directives:[f.BZ,f.w1,f.fO,f.Dz,f.as,f.nj,G.lW,nt.Hw,f.ge,f.ev,$.oG,a.JJ,a.On,f.XQ,f.Gk],pipes:[B.uU],styles:[""]}),e})()},5207:(T,Z,r)=>{r.d(Z,{u:()=>t});var l=r(5917),a=r(7573),p=r(7716),g=r(1841);let t=(()=>{class u{constructor(d){this.http=d}getAnimals(){return this.http.get(`${a.cG}/animals/getAll`)}getAnimalById(d){return this.http.get(`${a.cG}/animals/getById/${d}`)}createAnimal(d){return this.http.post(`${a.cG}/animals/create`,d)}updateAnimal(d){return this.http.put(`${a.cG}/animals/update/${d.id}`,d)}removeAnimal(d){return this.http.delete(`${a.cG}/animals/delete/${d}`)}getWilds(){return(0,l.of)([{id:"1",birthDay:(new Date).toISOString(),species:{label:"First"},vaccinated:!0,trackingId:10},{id:"2",birthDay:(new Date).toISOString(),species:{label:"Second"},vaccinated:!1,trackingId:20},{id:"3",birthDay:(new Date).toISOString(),species:{label:"Third"},vaccinated:!0,trackingId:30},{id:"4",birthDay:(new Date).toISOString(),species:{label:"First!"},vaccinated:!0,trackingId:40},{id:"5",birthDay:(new Date).toISOString(),species:{label:"Second!"},vaccinated:!1,trackingId:50},{id:"6",birthDay:(new Date).toISOString(),species:{label:"Third!"},vaccinated:!0,trackingId:60}])}}return u.\u0275fac=function(d){return new(d||u)(p.LFG(g.eN))},u.\u0275prov=p.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);