# Cat Trick

In my Seattle neighborhood of Ballard, sometimes cats will come up and greet me. Starting this summer, I began tracking that data on a Google Sheet. This website queries that Google Sheet and displays those cats. Meeting 3 cats in a single day is very rare. A Cat Trick. Sort of like how scoring 3 times in a hockey match is a Hat Trick. 😀

This project uses Astro as the framework.

[![Netlify Status](https://api.netlify.com/api/v1/badges/342a08c1-b93e-405f-8c0f-f259f8c0aed2/deploy-status)](https://app.netlify.com/sites/cat-trick/deploys)

I am using Zapier to trigger a site build on Netlify when the Google Form is submitted. This lets me use the Astro static site generation. Originally, I used the server-side option with the netlify adaptor, but it was too slow.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
