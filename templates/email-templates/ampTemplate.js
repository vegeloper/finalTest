//Code
const AMPTemplate = (userHTML) => {
  return `
    <!doctype html>
    <html ⚡4email data-css-strict>
      <head>
        <meta charset="utf-8">
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" 
        src="https://cdn.ampproject.org/v0/amp-anim-0.1.js">
        </script>
        <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script>
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <style amp-custom>
            h1 {
                color: #EB5E28;
                text-align: center;
            }
          	h4 {
            	  color: #143351  ;
              	text-align: center;
            }
            p {
                color: #000002;
                text-align: center;
            }
        </style>
      </head>
      <body>
        <amp-anim height="300" src=
        "https://i.imgur.com/tITHy2j.gif"
            alt="an animation showing a repetitive non-resulting action."
            >
        </amp-anim>
        <h1>You Did It!</h1>
        <h4>The test message is shown here:</h4>
        <p>${userHTML}</p>
        <amp-carousel width="500"
        height="380"
        layout="responsive"
        type="slides"
        controls>
        <amp-img src="https://quotefancy.com/media/wallpaper/3840x2160/19370-Thomas-A-Edison-Quote-Our-greatest-weakness-lies-in-giving-up-The.jpg"
          alt="A quote from Thomas Edison: our greatest weakness lies in giving up."
          width="500"
          height="380">
        </amp-img>
        <amp-img src="https://quotefancy.com/media/wallpaper/3840x2160/390206-Thomas-A-Edison-Quote-Our-greatest-weakness-lies-in-giving-up.jpg"
          alt="A quote from Thomas Edison: our greatest weakness lies in giving up."
          width="500"
          height="380">
        </amp-img>
        <amp-img src="https://quotefancy.com/media/wallpaper/3840x2160/390207-Thomas-A-Edison-Quote-Our-greatest-weakness-lies-in-giving-up.jpg"
          alt="A quote from Thomas Edison: our greatest weakness lies in giving up."
          width="500"
          height="380">
        </amp-img>
      </amp-carousel>
            
      </body>
    </html>
  `;
};

module.exports = { AMPTemplate };
