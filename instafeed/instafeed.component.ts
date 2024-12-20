// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-instafeed',
//   templateUrl: './instafeed.component.html',
//   styleUrls: ['./instafeed.component.css']
// })
// export class InstafeedComponent {
// }
// src/app/components/instafeed/instafeed.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instafeed',
  templateUrl: './instafeed.component.html',
  styleUrls: ['./instafeed.component.css']
})
export class InstafeedComponent implements OnInit {
  username: string = 'your_username';

  // Define posts property with some mock data
  posts: Array<{ username: string; imageUrl: string }> = [
    { username: 'user1', imageUrl: 'https://via.placeholder.com/500' },
    { username: 'user2', imageUrl: 'https://via.placeholder.com/500' },
    { username: 'user3', imageUrl: 'https://via.placeholder.com/500' },
  ];

  constructor() { }

  ngOnInit(): void { }
}

// src/app/components/feed/feed.component.ts
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-feed',
//   templateUrl: './feed.component.html',
//   styleUrls: ['./feed.component.css']
// })
// export class FeedComponent implements OnInit {
//   username: string = 'your_username';
//   posts: Array<{ username: string; imageUrl: string }> = [
//     { username: 'user1', imageUrl: 'https://via.placeholder.com/500' },
//     { username: 'user2', imageUrl: 'https://via.placeholder.com/500' },
//     { username: 'user3', imageUrl: 'https://via.placeholder.com/500' },
//   ];

//   constructor() { }

//   ngOnInit(): void { }
// }
