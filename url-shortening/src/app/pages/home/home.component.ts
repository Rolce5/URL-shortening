import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  url!: string;
  errorMessage!: string;
  shortenedLinks: ShortenedLink[] = [];

  constructor(private http: HttpClient) {}

  submitForm() {
    if (!this.url) {
      this.errorMessage = 'Please enter a URL';
      return;
    }

    this.http.post<any>('https://api.shrtlnk.dev/shorten', { url: this.url })
      .subscribe(
        response => {
          this.shortenedLinks.unshift(response);
          this.url = '';
          this.errorMessage = '';
        },
        error => {
          this.errorMessage = 'Error occurred while shortening the URL';
        }
      );
  }

  copyToClipboard(text: string) {
    // Implement copy to clipboard functionality
  }
}

interface ShortenedLink {
  originalUrl: string;
  shortenedUrl: string;
}