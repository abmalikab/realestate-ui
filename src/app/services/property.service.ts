import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:8080/api/properties/featured';

  constructor(private http: HttpClient) {}

  getFeaturedProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.apiUrl);
  }
}
