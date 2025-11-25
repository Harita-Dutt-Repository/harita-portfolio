export interface BlogEntry {
    date: string;       // "2025-11-15"
    title: string;      // "What I learned today"
    content: string;    // full blog text
  }
  
  export const BLOG_ENTRIES: BlogEntry[] = [
    {
        date: "2025-11-17",
        title: "Debugging My Portfolio",
        content: `
          <h3>Today’s Progress</h3>
          <p>I implemented header behavior and blog content layout.</p>
      
          <h3>Blog I took Inspiration from</h3>
          <img src="assets/blog/angular_blogging.png" />
      
          <h3>How Routing Works in Angular 20</h3>
          <img src="assets/blog/angular_routing.png" />
      
          <p>It now works perfectly!</p>
        `
      },
    {
        date: "2025-11-16",
        title: "My Angular Journey Today",
        content: `
          <h3>What I Learned</h3>
          <p>Today I solved standalone component issues and improved my blog system.</p>
      
          <h3>Screenshot</h3>
          <img src="assets/blog/angular_20.png" alt="Angular 20 screenshot" />
      
          <p>
            This screenshot helped me understand how Angular 20 standalone routing works.
          </p>
        `
      },
    {
      date: "2025-11-15",
      title: "My Angular Realization Day",
      content: `
        Today I solved standalone component routing issues and
        dynamic header behavior. I learned how Angular 20 works
        with @if and standalone modules...
      `
    },
    {
      date: "2025-11-14",
      title: "Understanding Standalone Routing",
      content: `
        Today I understood provideRouter, routes array, and
        how NavigationEnd events work in Angular 20...
      `
    },
    {
      date: "2025-11-13",
      title: "Created the Portfolio Structure",
      content: `
        Created folder structure and planned blog, about,
        contact, and project pages...
      `
    }
  ];
  