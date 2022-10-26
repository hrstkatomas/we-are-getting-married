# we-are-getting-married

We will be getting married soon, so this is our wedding website

## What i want it to do

-   I would like it to inform everybody that we are getting married
-   I would like it to tell our story, maybe with some slide show
-   I would like it to inform about
    -   venue, with a map
    -   parking
    -   accomodation
    -   dining
    -   drinks
    -   about wedding gifts
    -   maybe dress code (if that's the case)
-   I would like it to allow guests to confirm their attendance:
    -   Im thinking registering with some out of the box solution
    -   Saving their confirmation (and plus ones) to database
    -   Saving their food preference
    -   Saving a letter, if they wish to write us a message
    -   Guests should be able to update their answers later
-   I would like it to have some hidden admin interface to see guest answers
    -   no need to authorize (no sensitive info), just hide it under some URL

## What i am NOT going to address

-   it does not have to be localized, czech language it is.
- I might not need tests, maybe Ill add some just to make my life easier

## How am i going to achieve it

-   I don't want to create no react component library, I'll just use some existing one
-   I would like it to be mostly server rendered, so next.js
-   Sorry, probably no jest tests
-   I would like to ship it quite fast to be sure production environment is working
-   Custom domains, `tomazuzkaseberou.cz`
    - domain nergistered at https://www.domena.cz/
-   Hosting at Vercel
-   Database at Railway

# I would like to learn new stuff

# How to run this locally

-   npx prisma db push
-   npm run dev
-   create [railway](railway.app) postgresQL database (note to myself: I logged in via my github account) and fill .env with URL

`.env` example: 
```shell
# Prisma
# DATABASE_URL=file:./db.sqlite
DATABASE_URL='...'

# Next Auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET='...'

# Next Auth Auth0 Provider
AUTH0_CLIENT_ID='...'
AUTH0_CLIENT_SECRET='...'
AUTH0_ISSUER='...'
```

# TODO:

-   add prettier for god's sake
