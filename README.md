# GarageForum

This project was generated with Angular and Redux.

### Aim
Create Angular project e.g. –>   garagetechforum

**Header**
- Home
- Blog
    - Create blog (open blog post form)
- Contact us
- Forums
    - List all blogs in table

***Home*** :<br>
When user clicks on home, Need to create cards for blogs
- 3-4 cards in one row starting 2nd half of the screen.
- Card should be clickable
- Sample design below 

***Blog Post Form***

*Form Fields:*
- blogTitle -- mandatory
- blogContent -- mandatory
- blogCategory 
- blogTag
- blogAuthor -- mandatory
- blogPostDate -- mandatory

*Form Submission:* 
- Once we submit form, blue success card should be flashed. Should be reusable in multiple forms.
- Redirect to home after successful submission.
- If any error comes from server orange card should be flashed. Should be reusable across application.

***Card Design sample***:<br>
*Card Filter*:
Filter card functionality with title, category, or tag.


*Card clicks*:
When user clicks on card. it should open the details in form used to submit it.

*Likes*:
Add a likes counter and keep on adding if user hits it.

*Comment*:
Add an addition array inside current array.
```
{
    Blogtitle,
    Id,
    Comment:[ 
        {
            Date:,
            Comment:,
            commentBy:
        },
    ]
}
```

**Blog posts : To learn http CRUD**

https://jsonplaceholder.typicode.com/guide/

Use this link to use get api for post and display in tabular format with mat-table
Use angular httpclient module.



### Technologies:

- Latest version of angular.
- Redux for state management
- Bootstrap
- Responsive design
- Should not have any inline style

