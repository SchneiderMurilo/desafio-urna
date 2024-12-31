import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrnaService {
  private apiUrl = 'http://localhost:8000/api/urna';

  constructor(private http: HttpClient) {}

  sendVote(voteData: any): Observable<any> {
    const token = localStorage.getItem('jwt_token');
    const headers =
      { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` };
    return this.http.post(this.apiUrl, voteData, { headers });
  }

}
