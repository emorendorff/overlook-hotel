# The Overlook Hotel 

### Table of Contents
- [Overview](#overview)
- [Learning Goals](#learning-goals)
- [Contributors](#contributors)
- [Features](#features)
- [In Action](#in-action)
- [Instructions for Running Project Locally](#intructions-for-running-project-locally)
- [Future Iterations](#future-iterations)![recording (7)](https://user-images.githubusercontent.com/77934658/122323835-5a26df00-ceed-11eb-9f87-fdb1ac4dd8ad.gif)



## Overview
This app is a hotel management tool for hotel customers to manage room bookings and calculate their total bills. This was the final solo project for Mod 2 of [Turing](https://turing.edu/), built in 5 days. Guests may search rooms by date, view all previous bookings and the total amount spent, filter rooms by type, and even filter their stays between past, current and future. The app is completely function on screen readers and users may use tab only to use any features on the app.

## Learning Goals 
1. Make network requests to API endpoints to retrieve and manipulate data.
2. Making the application as accessible as possible.
3. Utilizing Sass to DRY up CSS.
4. Building strong test suites that tests happy/sad paths. 

-View the full spec [here](https://frontend.turing.edu/projects/overlook.html)

## Contributors
- Em Orendorff
- Lourdes Mendoza (Code Reviewer)
- Racheal Carroll
- Hannah Hudson (Project Manager)

## In Action 
![Login and Error Handling](https://user-images.githubusercontent.com/77934658/122324000-aa05a600-ceed-11eb-97e3-2e237392d761.gif)
![Check Availability and Book Room](https://user-images.githubusercontent.com/77934658/122324033-b7bb2b80-ceed-11eb-8d77-d16038ee96a1.gif)
![Filter By Room Type](https://user-images.githubusercontent.com/77934658/122324360-429c2600-ceee-11eb-97fd-53f54df4e1ee.gif)
![Filter Your Stays](https://user-images.githubusercontent.com/77934658/122324418-5a73aa00-ceee-11eb-913d-c77413f5908a.gif)
![Log Out Button](https://user-images.githubusercontent.com/77934658/122324450-68c1c600-ceee-11eb-823c-420cc576cd0f.gif)

## Instructions for Running Project Locally 
1. Clone down the [overlook hotel API](https://github.com/turingschool-examples/overlook-api).
2. `cd `into the directory. 
3. Then run: `npm install`
4. Run `npm start`. You should see `Overlook API is now running on http://localhost:3001 !`
6. cd out of that directory then clone down *this* repo
7. Install the library dependencies. Run: `npm install`
8. Run `npm start` in your terminal. Go to `http://localhost:8080/`
9. Enter `control + c` in your terminal to stop the server(s) at any time.
10. To login, you may use any username that starts with `customer` following a number of 1-50. For example, `customer23`, `customer 7` (Pick your own adventure!).
11. The password is `overlook2021`.

## Future Iterations 
- Focus more on responsive design, making app completely funtional on all screens
- Add manager class extension to work on DELETE requests 
- Pictures associated with each room type
- Additional error handling

## Technologies Used

- [![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)

- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)

- ![SASS](https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white)

- ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)

- ![Mocha](https://img.shields.io/badge/-mocha-%238D6748?&style=for-the-badge&logo=mocha&logoColor=white)

- ![Mocha](https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white)
