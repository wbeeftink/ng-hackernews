import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { FeedItem } from '../interfaces/feed-item';
import { Item } from '../interfaces/item';
import { User } from '../interfaces/user';

const TOP_API: string = 'https://api.hnpwa.com/v0/news';
const NEW_API: string = 'https://api.hnpwa.com/v0/newest';
const ASK_API: string = '	https://api.hnpwa.com/v0/ask';
const SHOW_API: string = '	https://api.hnpwa.com/v0/show';
const JOBS_API: string = 'https://api.hnpwa.com/v0/jobs';
const ITEM_API: string = 'https://api.hnpwa.com/v0/item';
const USER_API: string = 'https://api.hnpwa.com/v0/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getTopItems(page: number = 1): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`${TOP_API}/${page}.json`);
  }

  getNewItems(page: number = 1): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`${NEW_API}/${page}.json`);
  }

  getShowItems(page: number = 1): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`${SHOW_API}/${page}.json`);
  }

  getAskItems(page: number = 1): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`${ASK_API}/${page}.json`);
  }

  getJobsItems(page: number = 1): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`${JOBS_API}/${page}.json`);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${ITEM_API}/${id}.json`);
  }

  getUser(name: number): Observable<User> {
    return this.http.get<User>(`${USER_API}/${name}.json`);
  }
}
