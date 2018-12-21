# nes-auth-blog

![nes-auth-blog showcase](server/assets/img/nes-catalog-showcase.gif "nes-auth-blog showcase")

A static blog with fun Nintendo-themed user authentication built with [Hexo](https://hexo.io/), [Koa](https://github.com/koajs/koa), and [NESS.css](https://github.com/nostalgic-css/NES.css). It is generated and powered by Node.js.

### About

nes-auth-blog uses Hexo with a customized [aath](https://github.com/lewis-geek/hexo-theme-Aath) theme to render your markdown files into a static blog. It then runs a lightning-fast Koa server with static user authentication to serve the blog.

It is intended as a private blog for sharing internal or personal documentation across a small group of people via Markdown as the preferred storage medium, which is already very popular with developers and simple to use and write with.

It leverages the use of Git for keeping track of changes in authorship of blog posts and publications, and for easy deployment. 

### Setup

1. Clone the repo.
2. Place your markdown `.md` files (blog posts) in the `source/_posts` directory.
3. Add your authorized users to the array in the `server/users.json` file in the `{ "name": "user", "password": "pword" }` format.

### Running

To run an instance of nes-auth-blog simply run the `npm install` and `npm start` commands in the root of the repository directory and open a browser window to `http://localhost:3000/`.

The default credentials to access the blog are username `admin` and password `root`. **Please remember to remove the default credentials before deploying to secure your blog**.

### Configuration

You can configure two environment variables at deployment time or at development time with [dotenv](https://github.com/motdotla/dotenv):
* `SESSION_SECRET` - the key used to encrypt and store the session cookie on the client-side
* `PORT` - the port number for the server

To use and configure your own or another theme, please view the Hexo documentation.

### Image Credits

* [Super Mario](https://unsplash.com/photos/YkfQ7XTRyEc) Photo by zengxiao lin on Unsplash
* [Power up](https://unsplash.com/photos/hQ4BQ3wdHsQ) Photo by Geeky Shots on Unsplash
