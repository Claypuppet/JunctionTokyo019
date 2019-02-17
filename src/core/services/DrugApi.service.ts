import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/internal/Observable';

export interface ISearchResponse {
  query: string;
  suggestions: [];
}


@Injectable({
  providedIn: "root"
})
export class DrugApiService {
  private baseUrl = 'https://iterar-mapi-us.p.rapidapi.com/api/';

  constructor(private http: HttpClient) {
  }

  public searchDrugs(input: string): Observable<ISearchResponse> {
    const url = this.baseUrl + "autocomplete";
    return this.http.get<ISearchResponse>(url, {headers: this.apiHeaders, params: {query: input}});
  }

  public getActiveIngredients(drug: string): any {
    const url = this.baseUrl + drug + "/substances.json";
    return this.http.get<any>(url, {headers: this.apiHeaders});
  }

  public getDoses(drug: string): any {
    const url = this.baseUrl + drug + "/doses.json";
    return this.http.get<any>(url, {headers: this.apiHeaders});
  }

  private get apiHeaders(): any {
    return {
      "X-RapidAPI-Key": "d18d84006cmsh404865c0a044e37p1a8037jsn317de1042bc3"
    }
  }
}
