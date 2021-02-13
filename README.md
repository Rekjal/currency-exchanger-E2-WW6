
# Currency Exchanger

##### Date: **02/12/2021**

#### By **_Salim Mayan_**

## Description

##### A web application where a user can type in an amount (in a currency of choice), choose FROM and TO currencies from the drop down, and see total amount in converted currency. The currency conversion is performed using the most recent exchange rate from ExchangeRate-API. Few other things that the application does is listed below...

- Users should be able to convert between 160 different types of currencies.
- If the API call results in an error, the application returns a notification
- If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist
- If both TO and FROM currencies are same, application displays an error message

- See below image of UI for the different scenario's described above
![Image of UI for 3 different age Selections](./src/assets/images/PrintScreenShot.png)

## Description

#### Further Exploration

| **Spec** |

```
Describe: Calculator.prototype.planetId()

Test: "It should return the "planetId" property incremented by 1 with each call"

Expect(Calculator.planetId.toEqual(0);

Describe: Calculator.prototype.addPlanet(agePlanetBased: 187, estLifeExp: 277 })

Test: "It should append a single object to "agePerPlanet()" property with each call"

Expect(Calculator.agePerPlanet.toEqual({ mercury: { agePlanetBased: 187, estLifeExp: 277 } });

Describe: Calculator.prototype.addAgeOnPlanets({ mercury: 0.24, venus: 0.62, earth: 1.00, mars: 1.88, jupiter: 11.86 }, { caucasian: 65, asian: 70, africanAmerican: 65, latino: 4 })

Test: "It should correctly call method "addAgeOnPlanets()" and return an object with schema shown below (calls "addPlanet()" method equal lenght of planet array"

Expect(Calculator.agePerPlanet).toEqual({ mercury: { agePlanetBased: 187, estLifeExp: 277 }, venus: { agePlanetBased: 72, estLifeExp: 111 }, earth: { agePlanetBased: 45, estLifeExp: 72 }, mars: { agePlanetBased: 23, estLifeExp: 41 }, jupiter: { agePlanetBased: 3, estLifeExp: 12 } });

```
## Running tests from terminal using Jest and webpack

-   Ensure sure you have Jest installed, else use  [this link](https://www.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/setting-up-jest)  to install it on your machine 
-   From main directory run  `$ npm run test`  to check if tests from  `__tests__`  directory pass or fail.
-   _(Note: this project has 100% line coverage for business logic with Jest)_

## Setup/Installation Requirements

1. Clone this repository.
2. To download node modules, run `npm install`
3. Create an '.env' FILE in your project root directory.
    * Register for free API key: Visit: https://www.exchangerate-api.com/  & enter register yourself to get a free key.
    * Once registration is complete, log in using the new credentials, add API key in .env file using syntax: "API_KEY=[Your API KEY]" (No double quotes and No brackets)
    * Add .env to .gitignore
4. To do a build and run application on a dev server, run 	`npm run start`

## Known Bugs


* No known bugs at this time.

## Technologies Used

* HTML

* CSS

* Bootstrap

* JS

* JQuery

* Jest

* Webpack

* Node

* npm

* Markdown

* Exchange Rate API


## Support and contact details


_Email no one with any questions, comments, or concerns._


### License


*{This software is licensed under the MIT license}*


Copyright (c) 2021 **_{Salim Mayan}_**