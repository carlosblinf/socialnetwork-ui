# React + Typescript + SASS + Vite Social Network App

You can visit [Demo](https://react-vite-realworld.netlify.app/)

## Getting started

To get the app running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm run dev` to start the local server (this project Vite)


## Functionality overview

The example application is a social network inspired in some dribble designs and the most important apps.

<a href="https://dribbble.com/shots/18932669-Social-media-platfrom-Forumboard"><img src="https://cdn.dribbble.com/users/5324991/screenshots/18932669/media/01d21560329971cc5decc4afaaeae152.png" align="right" width="250px" /></a>
<a href="https://dribbble.com/shots/15327109-Social-Network-Web-Concept"><img src="https://cdn.dribbble.com/users/78806/screenshots/15327109/media/eec25a4fdba8566cecad66f70cab1a88.png" align="center" width="250px" /></a>

**General functionality:**

- Authenticate users via LocalStorage (login/signup pages + logout button on settings page)
- CRUD Posts (you can add images to created post) #### Another functions *Comming soom*
- CRUD Comments *Comming soom*
- Like and dislike posts
- Follow other users *Comming soom*

**The general page breakdown looks like this:**

- Home page (URL: /#/ )
    - List of tags
    - List of articles pulled from either Feed, Global, or by Tag
    - Pagination for list of articles
- Sign in/Sign up pages (URL: /#/login, /#/register )
    - (store the user in localStorage)
- Profile page (URL: /#/profile/:id )
    - Show basic user info
    - List of posts from the current user
    - Friends list
    - Photo list
- Friends page (URL: /#/friends )
- Photos page (URL: /#/photos )
- Videos page (URL: /#/videos )
- Settings page (URL: /#/settings )

<br />