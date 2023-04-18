# Faust Auth Example

1. Clone this repo
2. Copy `.env.local.sample` and name the new copy `.env.local`
3. In that new copy, update the `NEXT_PUBLIC_WORDPRESS_URL` and `FAUST_SECRET_KEY` variables with the respective values from your own WP install (make sure that WP install has the Faust plugin installed and activated).
4. Uncomment the `FAUST_SECRET_KEY` line in the `.env.local`
5. Run `npm install`, `npm run generate`, and `npm run dev` in that order.
6. Visit `http://localhost:3000/example` (or whatever port your local app is running on). Click the "Login" button and if necessary, login to WordPress. You should then find yourself back on `/example` but instead of a "Login" link, you should see your username and any blog posts associated with that user.
