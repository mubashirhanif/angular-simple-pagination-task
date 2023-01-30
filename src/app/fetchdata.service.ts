import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FetchdataService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getPaginatedData(offset: Number, limit: Number) {
    // your code here
    // See pagination example https://github.com/typicode/json-server#paginate here for the API.
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
