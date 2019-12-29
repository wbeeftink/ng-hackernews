import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService, API } from './api.service';
import { FeedItem } from '../interfaces/feed-item';
import { Item } from '../interfaces/item';
import { User } from '../interfaces/user';

interface Type {
  type: string;
  serviceMethod: string;
  path: string;
}

const types: Type[] = [
  { type: 'top', serviceMethod: 'getTopItems', path: 'news' },
  { type: 'new', serviceMethod: 'getNewItems', path: 'newest' },
  { type: 'show', serviceMethod: 'getShowItems', path: 'show' },
  { type: 'ask', serviceMethod: 'getAskItems', path: 'ask' },
  { type: 'job', serviceMethod: 'getJobsItems', path: 'jobs' },
];

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
  domain: '',
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
  domain: '',
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
  comments_count: 0,
};

const mockUser: User = {
  created_time: 0,
  created: '',
  id: 'abc0123',
  karma: 0,
};

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  types.forEach(object => {
    it(`should get first page of ${object.type} items`, inject([ApiService, HttpTestingController], (
      apiService: ApiService,
      httpMock: HttpTestingController,
    ) => {
      apiService[object.serviceMethod]().subscribe(items => {
        expect(items).toEqual(mockItems);
        expect(items[0].id).toBe(1);
        expect(items[1].id).toBe(2);
      });

      const mockReq = httpMock.expectOne(`${API}/${object.path}?page=1`);
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
    }));
  });

  types.forEach(object => {
    it(`should get second page of ${object.type} items`, inject([ApiService, HttpTestingController], (
      apiService: ApiService,
      httpMock: HttpTestingController,
    ) => {
      apiService[object.serviceMethod](2).subscribe(items => {
        expect(items).toEqual(mockItems);
        expect(items[0].id).toBe(1);
        expect(items[1].id).toBe(2);
      });

      const mockReq = httpMock.expectOne(`${API}/${object.path}?page=2`);
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
    }));
  });

  it('should get item', inject([ApiService, HttpTestingController], (
    apiService: ApiService,
    httpMock: HttpTestingController,
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

  it('should get user', inject([ApiService, HttpTestingController], (
    apiService: ApiService,
    httpMock: HttpTestingController,
  ) => {
    apiService.getUser(mockUser.id).subscribe(item => {
      expect(item).toEqual(mockUser);
      expect(item.id).toBe(mockUser.id);
    });

    const mockReq = httpMock.expectOne(`${API}/user/${mockUser.id}`);
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
  }));
});
