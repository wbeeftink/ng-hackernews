import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { FeedItem } from '../interfaces/feed-item';
import { Item } from '../interfaces/item';
import { User } from '../interfaces/user';

export const API = 'https://node-hnapi.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getTopItems(page: number = 1): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`${API}/news?page=${page}`);
  }

  getNewItems(page: number = 1): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`${API}/newest?page=${page}`);
  }

  getShowItems(page: number = 1): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`${API}/show?page=${page}`);
  }

  getAskItems(page: number = 1): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`${API}/ask?page=${page}`);
  }

  getJobsItems(page: number = 1): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`${API}/jobs?page=${page}`);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${API}/item/${id}`);
  }

  getUser(name: string): Observable<User> {
    return this.http.get<User>(`${API}/user/${name}`);
  }
}
