import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BLOG_ENTRIES, BlogEntry } from '../../data/blog-entries';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {
  entries = BLOG_ENTRIES.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  selectedEntry: BlogEntry | null = null;
  safeContent: SafeHtml | null = null;

  constructor(private sanitizer: DomSanitizer) {
    this.selectedEntry = this.entries[0]; // auto-load latest
    this.updateContent();
  }

  openEntry(entry: BlogEntry) {
    this.selectedEntry = entry;
    this.updateContent();
  }

  updateContent() {
    if (this.selectedEntry) {
      this.safeContent = this.sanitizer.bypassSecurityTrustHtml(
        this.selectedEntry.content
      );
    }
  }
}
