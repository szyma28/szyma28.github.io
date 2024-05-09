# Requirements

## User Needs

### User stories  <!-- Eryk Szymanski -->
* As a human with needs, I want to find a toilet near me so that i can relieve myself.
* As someone who forgot their wallet at home, I want to find a free public toilet near me so that i can use it without the need to pay for it.
* As a parent, I want a baby change accessible toilet to have a safe place where i can change my baby childs nappy.
* As a person with a disability, i need to find a accessible toilet so that i can relieve myslef while in a place that allowes me to do so with my disability.
* As a user, i want the app to guide me to the toilet on the maps so that I can be sure i get there properly and dont get lost along the way.
* As a occassional drinker, i want to find a toilet opened later at night so that I don't have to do it in the streets.

### Actors  <!-- Eryk Szymanski -->
* Pedestrians 
* Parents
* Drunk people
* People with disabilities

### Use Cases  <!-- Eryk Szymanski -->


 <!-- Eryk Szymanski -->
| USE-CASE UC1 | Find nearest Toilet |
| -------------------------------------- | ------------------- |
| **Description** | Show the user and the toilet on the map |
| **Actors** | Pedestrian |
| **Assumptions** | User agreed to share their location</td></tr>
| **Steps** | 1. Allow location services to find the user. 2. View the map with the user and toilets displayed on it |
| **Variations** | --- |
| **Non-functional** | --- |
| **Issues** | --- |
 <!-- Eryk Szymanski -->
| USE-CASE UC2 | Find a toilet with baby changing |
| -------------------------------------- | ------------------- |
| **Description** | Filter the toilets to ones with baby changing options |
| **Actors** | Parent |
| **Assumptions** | User agreed to share their location</td></tr>
| **Steps** | 1. Display toilets by type. 2. Filter the toilets (not implemented) |
| **Variations** | --- |
| **Non-functional** | --- |
| **Issues** | Filtering not implemented yet, displaying filtered toilets on the map has not been implemented yet |
 <!-- Eryk Szymanski -->
| USE-CASE UC3 | Provide directions to the nearest toilet |
| -------------------------------------- | ------------------- |
| **Description** | Show the user and the toilet on the map and guide them to it |
| **Actors** | Drunk person |
| **Assumptions** | User agreed to share their location</td></tr>
| **Steps** | Not implemented yet |
| **Variations** | --- |
| **Non-functional** | --- |
| **Issues** | Not implemented yet |


Use Cases
![Use Case 1](https://github.com/szyma28/szyma28.github.io/blob/main/docs/Images/UserCase1.png) <!-- Jovan -->
![Use Case 2](https://github.com/szyma28/szyma28.github.io/blob/main/docs/Images/UseCase2%20toilet%20finder.png)  <!-- Eryk Szymanski -->

<!-- Eryk Szymanski -->
## Software Requirements Specification<br>
### Functional requirements<br>
**FR1.1 The system should get permission to access user location via geolocation navigator <br>
**FR1.2 The system should query the database for public toilets from Open Data Bristol<br>
**FR1.3 The system should centre the map on the user location.<br>
**FR1.4 The system should add markers for each public toilet.<br>
**FR2.1 The system should differentiate between different types of toilets.<br>
**FR3.1 The system should guide the user to the toilet using map navigation.<br>



### Non-Functional Requirements

**NFR1.1 App needs to work on mobile for portability purposes.<br>  <!-- Jovan -->
**NFR1.2 Source code should always stay up to date and available on the github for maintainability purposes.<br> <!-- Eryk Szymanski -->
**NFR1.3 Should work on any browser.<br> <!-- Eryk Szymanski -->
**NFR1.4 When asked to find nearest toilets, app should display up to 5 toilets around the user.<br> <!-- Eryk Szymanski -->
**NFR1.5 The map should default to bristol if no location data is available.<br> <!-- Eryk Szymanski -->
**NFR2.1 Data should be up to date.<br> <!-- Eryk Szymanski -->

