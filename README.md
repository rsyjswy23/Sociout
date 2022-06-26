![Sociout-logos_transparent](https://user-images.githubusercontent.com/101481587/175834520-2435f458-d5ae-4a0c-b653-d7d96cb59f68.png)
# [Sociout](https://sociout-hui.netlify.app/)
Sociout is a social media app (Pinterest clone). Please try to explore it: https://sociout-hui.netlify.app/

## Features
__Sociout supports the following features:__

-:white_check_mark: Login & Logout using Google account,

-:white_check_mark: Upload pins, Download pins, Save pins to user's collection,

-:white_check_mark: View pin detail (including title, category, sourceURL, postedBy user, comments),

-:white_check_mark: Search pins with typed-in search term or selected categories,

-:white_check_mark: View user profile (including pins that user created and saved),

-:white_check_mark: Leave comments on pins,


## Tech Stack:
Sociout is built with:
- frontend: React, Redux, Tailwind CSS, 
- backend: Node.js, Express, Sanity

## Implementation:

backend:
- Step 1: Setup server, connected DB, defined schema

frontend:
- Step 2: Setup frontend React, TailwindCSS

- Step 3: Implemented OAuth2.0 Google API & created React Login componenet. 

- Step 4: Connected frontend and backend, stored OAuth user profile to DB. User login info will be 1)stored at localStorage to check if user is currently logged in and (2) stored at DB to display user profile.

- Step 5: Added Home, Sidebar, Navbar componenets. 
    - Home: Sidebar + Navbar + Pin components.  
    - Sidebar: display categories + UserProfile component. 
    - Navbar: Search + CreatePin components.

- Step 6: Added Feed, Pins, MansonryLayout components.
    - Feed: Query from DB and display pics in MansonryLayout if user picked categories, if not, fetch random pics from DB to display.
    - Pins: display all pins.
    - MansonryLayout: adjust numbers of cols to display on screen based on pic pixel.

- Step 7: Added Pin component. Each Pin supports features: Save, Download, Redirect to PinDetail. 

- Step 8: Added CreatePin component. It allows user upload pin if the image type is correct & all required fields are filled. 

- Step 9: Added PinDetail component & DB query to fetch pin details and related pins in the same category of current pin. 

- Step 10: Add Search component & DB query to fetch pins with given searchTerm and pins from all categories when searchTerm is not specified.

- Step 11: deployed to Netlify: https://sociout-hui.netlify.app

