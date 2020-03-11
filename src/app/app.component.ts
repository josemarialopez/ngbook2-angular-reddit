import { Article } from './article/article.model';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];


  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }


  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) =>  b.votes - a.votes );
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value));
    this.resetInputs([title, link]);
    return false; 
  }

  resetInputs(inputs) {
    for (let input of inputs) {
      input.value = '';
    }
  }
}
