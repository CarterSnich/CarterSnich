<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title style="display: none">CarterSnich</title>
    <style>
      * {
        font-family: monospace;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <h1>CarterSnich's repo <small>{{ `[${repos.length}]` }}</small></h1>
      <ul>
        <li v-for="repo in repos">
          <a :href="repo.html_url">{{ repo.name }}</a>
          <span v-if="repo.description"> - {{ repo.description }}</span>
        </li>
      </ul>
    </div>
    <script src="vue.global.js"></script>
    <script src="script.js"></script>
  </body>
</html>
