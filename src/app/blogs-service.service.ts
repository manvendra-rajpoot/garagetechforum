import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsServiceService {

  constructor() { }

  blogData:any = [
    {
      author: "Manvendra Rajpoot",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi consequatur, explicabo ipsam vel, autem laborum molestiae reiciendis ullam iure ab? Accusamus rerum placeat neque quis in. Officia, atque aspernatur! Aliquam tempore nobis sunt dolorem iste totam debitis error ab perferendis nihil magnam qui repellat, dicta, maiores pariatur ullam minima?",
      postCategory: "abc",
      postDate: Date.now(),
      title: "This is Title1",
      likes: 0,
      comments: []
    },
    {
      author: "Joey Tribbiani",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi consequatur, explicabo ipsam vel, autem laborum molestiae reiciendis ullam iure ab? Accusamus rerum placeat neque quis in. Officia, atque aspernatur! Aliquam tempore nobis sunt dolorem iste totam debitis error ab perferendis nihil magnam qui repellat, dicta, maiores pariatur ullam minima?",
      postCategory: "abc",
      postDate: Date.now(),
      title: "This is Title2",
      likes: 0,
      comments: []
    },
    {
      author: "Chandler M. Bing",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi consequatur, explicabo ipsam vel, autem laborum molestiae reiciendis ullam iure ab? Accusamus rerum placeat neque quis in. Officia, atque aspernatur! Aliquam tempore nobis sunt dolorem iste totam debitis error ab perferendis nihil magnam qui repellat, dicta, maiores pariatur ullam minima?",
      postCategory: "abc",
      postDate: Date.now(),
      title: "This is Title3",
      likes: 0,
      comments: []
    },
    {
      author: "Rachel Green",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi consequatur, explicabo ipsam vel, autem laborum molestiae reiciendis ullam iure ab? Accusamus rerum placeat neque quis in. Officia, atque aspernatur! Aliquam tempore nobis sunt dolorem iste totam debitis error ab perferendis nihil magnam qui repellat, dicta, maiores pariatur ullam minima?",
      postCategory: "abc",
      postDate: Date.now(),
      title: "This is Title4",
      likes: 0,
      comments: []
    },
    {
      author: "Monica Geller",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi consequatur, explicabo ipsam vel, autem laborum molestiae reiciendis ullam iure ab? Accusamus rerum placeat neque quis in. Officia, atque aspernatur! Aliquam tempore nobis sunt dolorem iste totam debitis error ab perferendis nihil magnam qui repellat, dicta, maiores pariatur ullam minima?",
      postCategory: "abc",
      postDate: Date.now(),
      title: "This is Title5",
      likes: 0,
      comments: []
    },
    {
      author: "Gunther G.",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi consequatur, explicabo ipsam vel, autem laborum molestiae reiciendis ullam iure ab? Accusamus rerum placeat neque quis in. Officia, atque aspernatur! Aliquam tempore nobis sunt dolorem iste totam debitis error ab perferendis nihil magnam qui repellat, dicta, maiores pariatur ullam minima?",
      postCategory: "abc",
      postDate: Date.now(),
      title: "This is Title6",
      likes: 0,
      comments: []
    }
  ]
}
