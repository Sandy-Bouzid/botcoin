# Discord Bot

- **Hello There :**

<img src="/docs/screenshots/hello.png" alt="screenshot" style="width:300px;"/>

- **Poll :** 
    - in `commands/utility/poll.js` line 45, change emoji ID with yours

<img src="/docs/screenshots/poll.png" alt="screenshot" style="width:300px;"/>

- **Random Image :**
    - add an `images` folder in root projet with your images named `1.jpg`, `2.jpg`...
    -  in `commands/utility/random.js`, line 4 modify max variable with your number of images

<img src="/docs/screenshots/random.png" alt="screenshot" style="width:300px;"/>

- **RUN IN LOCAL :**
    -  in a `.env` file :
        - ``DISCORD_TOKEN=xxxxxxxx``
        - ``CLIENT_ID=xxxxxxxxxx``
    - deploy commands : `node .\deploy-commands.js`
    - run : `node index.js`

- **Add Bot to server :** 
    - In Discord Developper Portal
        - OAuth2
            - check BOT
            - pick rights
            - Copy URL
    - Paste URL in the browser