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
   nav {font-size:18px }
   body {font-size: 14px; padding: 8px;background-color:#F7F8FA}
 </style>
 </head>
 <body>
  ${bodyHtml}
  <br><br><br><br><br><br>
 </body>
</html>
`;
