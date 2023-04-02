# nes-auth-blog

![nes-auth-blog showcase](server/assets/img/nes-catalog-showcase.gif "nes-auth-blog showcase")

A static blog with fun Nintendo-themed user authentication built with [Hexo](https://hexo.io/), [Koa](https://github.com/koajs/koa), and [NESS.css](https://github.com/nostalgic-css/NES.css). It is generated and powered by Node.js.

### About

nes-auth-blog uses Hexo with a customized [aath](https://github.com/lewis-geek/hexo-theme-Aath) theme to render your markdown files into a static blog. It then runs a lightning-fast Koa server with static user authentication to serve the blog.

It is intended as a private, simple, lightweight, and zero-configuration blog for sharing internal or personal documentation across a small group of people via Markdown - beloved by developers the world over - as the preferred writing medium.

It leverages the use of Git for keeping track of changes in authorship of blog posts and publications, and for easy deployment. 

### Setup

1. Clone the repo.
2. Create, edit, and place your markdown `.md` files (blog posts) in the `source/_posts` directory.
3. Add your authorized users to the array in the `server/users.json` file as a `{ "name": "user", "password": "pword" }` object.

### Running

To run an instance of nes-auth-blog simply run the `npm install` and `npm start` commands in the root of the repository directory and open a browser window to `http://localhost:3000/`.

The default credentials to access the blog are username `admin` and password `root`. **Please remember to remove the default credentials before deploying to secure your blog**.

### Configuration

To configure your blog title and other information, open and [edit](https://hexo.io/docs/configuration) your `_config.yml` file.

For more Hexo-specific configuration please refer to the Hexo [documentation](https://hexo.io/docs/).

You can configure two environment variables at deployment time or at development time with [dotenv](https://github.com/motdotla/dotenv):
* `SESSION_SECRET` - the key used to encrypt and store the session cookie on the client-side
* `PORT` - the port number for the server

You are encouraged to make this project your own by customizing the server authentication styles under `server` with a framework like [PSone.css](https://github.com/98mprice/PSone.css) and with a [different](https://hexo.io/themes/) Hexo theme.

### Image Credits

* [Super Mario](https://unsplash.com/photos/YkfQ7XTRyEc) Photo by zengxiao lin on Unsplash
* [Power up](https://unsplash.com/photos/hQ4BQ3wdHsQ) Photo by Geeky Shots on Unsplash

### License

MIT License

Copyright (c) 2018 Damián Adams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
