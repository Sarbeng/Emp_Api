<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  @vite('resources/css/app.css')
</head>
<body class="text-text">
    @include('landing.navbar')
    @include('landing.heroSection')
    @include('landing.services')
    @include('landing.aboutUs')
    @include('landing.pricing')
</body>
</html>
