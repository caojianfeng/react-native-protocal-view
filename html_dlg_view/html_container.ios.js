
export const createHtml = bodyHtml => `
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>
   <style>
   nav {font-size:2.5rem }
   body {font-size: 2.0rem; padding: 3rem;background-color:#F7F8FA}
 </style>
 </head>
 <body>
   ${bodyHtml}
   <br><br><br><br><br><br>
</body>
</html>
`;
