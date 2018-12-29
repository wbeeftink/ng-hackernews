import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService, API } from './api.service';
import { FeedItem } from '../interfaces/feed-item';
import { Item } from '../interfaces/item';

const mockItems: FeedItem[] = [{
  id: 1,
  title: 'Breaking news',
  points: 0,
  user: '',
  time: 0,
  time_ago: '',
  comments_count: 0,
  type: '',
  url: '',
  domain: ''
}, {
  id: 2,
  title: 'Just an update',
  points: 0,
  user: '',
  time: 0,
  time_ago: '',
  comments_count: 0,
  type: '',
  url: '',
  domain: ''
}];

const mockItem: Item = {
  id: 1,
  title: 'Some item',
  points: 0,
  user: '',
  time: 0,
  time_ago: '',
  content: '',
  deleted: false,
  dead: false,
  type: '',
  url: '',
  domain: '',
  comments: [],
  level: 0,
  comments_count: 0
};

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should get top items', inject([ApiService, HttpTestingController], (
    apiService: ApiService,
    httpMock: HttpTestingController
  ) => {
    apiService.getTopItems(1).subscribe(items => {
      expect(items).toEqual(mockItems);
      expect(items[0].id).toBe(1);
      expect(items[1].id).toBe(2);
    });

    const mockReq = httpMock.expectOne(`${API}/news?page=1`);
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
  }));

  it('should get item', inject([ApiService, HttpTestingController], (
    apiService: ApiService,
    httpMock: HttpTestingController
  ) => {
    apiService.getItem(mockItem.id).subscribe(item => {
      expect(item).toEqual(mockItem);
      expect(item.id).toBe(1);
      expect(item.title).toBe('Some item');
    });

    const mockReq = httpMock.expectOne(`${API}/item/${mockItem.id}`);
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
  }));
});
