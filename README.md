# Khrulenko Vitalii's Dewais test task

## [LINK TO APP PREVIEW](https://dewais-github-search.vercel.app/)

## Used technologies:

- HTML
- CSS
- JavaScript
- TypeScript
- React
  - hooks
  - functional components
- React Router
- Redux
  - toolkit
  - thunk
- Material UI
- Joi.dev (data validation)
- Octokit.js (fetching GitHub data, data types)

## Getting Started:

```
git clone {repository_url/ssh}
```

```
cd {repository_name}
```

```
npm install
```

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser

## UX description:

A responsive and scalable single-page application (SPA) that allows users to search for GitHub users by their username. The search query is performed by clicking on the search button or pressing the Enter key. The search result is a list of found users in the form of cards with basic information. Each card can be clicked to see more detailed information, which will open a new route. If no user was found with the entered username or if an error occurred, the user will be notified with an appropriate message. The loading process is accompanied by visual loaders during the search and skeletons when loading cards with detailed information about the user.

## Pay attention:

It's allowed to make up to 60 requests per hour. To be able to make more requests follow instructions from `src/common/api`
