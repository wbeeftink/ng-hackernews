# NgHackernews

[![Netlify Status](https://api.netlify.com/api/v1/badges/f4251935-6957-41b1-8402-2c0e0432098d/deploy-status)](https://app.netlify.com/sites/ng-hackernews/deploys)

![NgHackernews](https://raw.githubusercontent.com/wbeeftink/ng-hackernews/master/src/assets/icons/icon-192x192.png)

This project is yet another Hackernews clone using the [Hacker News (unofficial) API](https://github.com/cheeaun/node-hnapi). I was heavily inpsired by [vue-hackernews-2.0](https://vue-hn.now.sh/). I created this project to learn Angular and will use it in the future to test new features. It shows the feeds from [Hackernews](https://news.ycombinator.com/) (Top, New, Show, Ask & Jobs) in a more readable fashion and is also suitable for mobile devices. It uses [Angular Material](https://material.angular.io/) for the UI layer.

## Features

Some of the features I implemented so far:

- Usable UI using Angular Material
- Responsiveness
- Progressive web app features
- Speed - it's fast!
- Offline capabilities (although limited)
- Hosted and CI with [Netlify](https://www.netlify.com/)
- Error logging with [Sentry](https://sentry.io/welcome/)

There are several features I have on my wishlisht which I might or might not implement. I will add features when I have time or a real life use case for which I will use this project as test case.

## Benchmarks

There's (always) room for improvement but with basic features the project scores 100/100 for PWA features in Lighthouse. My next area of focus should be performance. Especially third party content and critical CSS.

![Lighthouse](https://i.imgur.com/HNCriHu.png)

## Credits

- [Evan You](https://github.com/yyx990803) for creating [vue-hackernews-2.0](https://vue-hn.now.sh/)
- [Lim Chee Aun](https://github.com/cheeaun) for creating [Hacker News (unofficial) API](https://github.com/cheeaun/node-hnapi)
- Many others for sharing their Hackernews clones at [HNPWA](https://hnpwa.com/)

## License

MIT
