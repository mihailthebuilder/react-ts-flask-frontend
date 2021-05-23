# React-Flask challenge

## Problem 3

I use React for the front-end and `axios` to make the HTTP request to the back-end.

You can launch the front-end in local using `npm run start`

## Problem 4

See [this repo](https://github.com/mihailthebuilder/react-flask-challenge-2-and-4) for instructions on hosting the back-end.

### Hosting front-end in the cloud

I use [GitHub Pages](https://pages.github.com/) to host the front-end. I prefer keeping my front-end codebase separate from the back-end so that I don't have to push updates to the entire project every time I make changes to one side of the stack. I like using GitHub Pages because it's quick, simple and free.

Install [gh-pages](https://www.npmjs.com/package/gh-pages) npm package which makes it easy to do the deployment.

```bash
npm install gh-pages --save-dev
```

Add the `homepage` key in the main `package.json` object, with a value representing the location of your GitHub Pages deployment (in my case [this](https://mihailthebuilder.github.io/react-flask-challenge-3-and-4/))

Add the following key/value pairs inside the `scripts` key in `package.json`:

```json
{
  "scripts:" {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Now you can quickly deploy the project by running `npm run deploy`

On the GitHub repo, go to Settings > Pages and select the `gh-pages` branch to launch the site.
