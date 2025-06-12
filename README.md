# Blazor WebAssembly on GitHub Pages

It turns out compiling an ASP.NET Core Blazor WebAssembly project for static
hosting works perfectly fine. Considering I'm personally a lot more comfortable
in C# and Blazor than JavaScript/TypeScript, I had to investigate this further.
Thus, I created this little portfolio page on
[haakon8855.github.io](https://haakon8855.github.io) fully running on Blazor
with no JS! (Well, except for blazor.webassembly.js)

## Technologies

I tried to experiment with some new stuff this time:

- .NET 9
- Blazor WebAssembly
- Bulma CSS Framework with SASS preprocessor
- Bootstrap Icons (because its convenient)

## Project Structure

- `Web.Client/`: The main Blazor WebAssembly project, containing the
  application's UI logic and components.
  - `Pages/`: Blazor components tied to a route (individual pages)
  - `Models/`: Data models for deserialising JSON
  - `Layout/`: Blazor components for the website's layout (navbar, footer, etc.)
  - `wwwroot/`: The web root directory for static assets (HTML, compiled CSS,
    JavaScript, images and quest content).
    - `css/app.scss`: The main stylesheet source file, compiled by Sass.

## License

This project is licensed under the [MIT License](LICENSE)
