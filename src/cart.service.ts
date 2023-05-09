import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

 
  private rootURL:string= "http://localhost:4400/applicants";

  private renderer: Renderer2;
  private currentTheme: string = 'light-mode';


  constructor( private http:HttpClient,private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    
   }

   findAll=()=>{
    return this.http.get("http://localhost:4400/applicants");
  }
  findAll1=()=>{
    return this.http.get("http://localhost:4400/carts");
  }
  findAll2=()=>{
    return this.http.get("http://localhost:4400/newLeads");
  }
  find=()=>{
    return this.http.get("http://localhost:4400/renewal");
  }
  find2=()=>{
    return this.http.get("http://localhost:4400/expired");
  }
  cgprotectList=()=>{
  return this.http.get("http://localhost:4400/cgprotectlist")
 }
policyList=()=>{
  return this.http.get("http://localhost:4400/PolicyList")
}

  toggleTheme(): void {
    const theme = this.currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
    this.renderer.removeClass(document.body, this.currentTheme);
    this.renderer.addClass(document.body, theme);
    this.currentTheme = theme;
  }
  
  }
