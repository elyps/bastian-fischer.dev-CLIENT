import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

const baseUrl = 'http://localhost:8083/api/v1/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  /*getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(`${baseUrl}/all`, { params });
  }*/

  getAll(params: any): Observable<any> {
    return this.http.get<any>(`${baseUrl}/all`, { params });
  }

  get(id: any): Observable<Article> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    console.log('Data before sending:', data);
    return this.http.post(`${baseUrl}/add`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Article[]> {
    return this.http.get<Article[]>(`${baseUrl}?title=${title}`);
  }

  getArticleUrl(title: string | undefined) {
    return title?.replace(/ /g, '-');
  }

  getCommentsForArticle(articleId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${baseUrl}/${articleId}/comments`);
  }

}
