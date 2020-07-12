<div style="display:flex;align-items: center;width: 200px"><img src="/public/logo192.png" alt="logo" width="75px" height="75px"><h1 style="font-size: 1.9rem;margin-left: 0.3em">UK Today</h1></div>

> A clone of the USA Today news website, with a feed from UK news sources

Check out the [deployed site](https://uktoday.netlify.app/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/e718b205-761c-4569-bdd6-89e775c917e8/deploy-status)](https://app.netlify.com/sites/uktoday/deploys)

## Technology

-   React
-   TypeScript
-   [News API](https://newsapi.org/)
-   Styling - _SCSS_

## Running Locally

As the News API is too expensive for this project to run outside of development, the project should be run locally to display the complete product

-   Clone the repository
-   At the root of the project, create a `.env.local` file and add the following information:

```
    REACT_APP_API_URL=https://newsapi.org/v2/
    REACT_APP_API_KEY=YOUR_NEWSAPI_KEY
```

-   Run `npm install` and `npm run start`
-   The site will be hosted at [http:localhost:3000](http://localhost:3000)

## UI Screenshots

### Phone

![iPhone screenshot](/screenshots/uktoday-iphone.png)

### Tablet

![iPad screenshot](/screenshots/uktoday-ipad.png)
