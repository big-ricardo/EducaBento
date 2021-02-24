interface GetHtmlProps {
  title: string;
  thumbnail_bg?: string;
}

export function getHtml({
  title,
  thumbnail_bg = '#121214'
}: GetHtmlProps) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Thumbnail</title>

     <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap&family=Philosopher:wght@400;700" rel="stylesheet" />
    <style>
      body {
        margin: 0;
        font-family: Roboto, sans-serif;
        color: #FFF;
        background: #121214;
        background-image:
          radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%),
          radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%);
        background-size: 100px 100px;
        height: 100vh;
      }

      #wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      svg {
        height: 40px;
        margin-top: 80px;
      }

      h1 {
        font-size: 90px;
        line-height: 80px;
        font-family: 'Lobster', sans-serif;
        max-width: 80%;
      }

      h2 {
        font-size: 30px;
        line-height: 80px;
        position: absolute;
        font-family: 'Philosopher', sans-serif;
        bottom: 20px;
        max-width: 80%;
      }
    </style>
  </head>
  <body>
    <div id="wrapper">
      <h1>${title}</h1>

     <h2>Educação Bento</h2>
    </div>
  </body>
  </html>`
}
