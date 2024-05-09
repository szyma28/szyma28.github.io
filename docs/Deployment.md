# Deployment

## Release Notes


## Version 0.9.1

Current system version supports displaying the toilet database based on the dependancy of Bristol Open Data API, and displaying them on the map based on the MapBox dependancy. Filtering the toilets (UC2) and navigation to target (UC3) has not been properly implemented yet due to time and manpower constraint.

Tools used: 

Visual Studio code - HTML, CSS and JavaScript

Draw.io - Diagrams


![Deployment diagram](https://github.com/szyma28/szyma28.github.io/blob/3ce9a3fb54c4d45f5898ee01b9ed133bd9aecda2/docs/Images/UML%20DEPLOYMENT.png)

# User guide
# Use Case 1
User land on the welcome page.
![UC10](https://github.com/szyma28/szyma28.github.io/blob/dfca93e6d50a7aa9af6bfda3eaeea2e46e02b84c/docs/Images/UC1STEP0.png)

After pressing "Find nearest toilet" user is brought to another webpage, to allow user location services to find the user location, pressing the "Find me on the map" is mandatory.
![UC11](https://github.com/szyma28/szyma28.github.io/blob/49f3ea7eb8ac8d0118f763227c6b76770936d4f5/docs/Images/UC1STEP1.png)

A map is displayed with the red bubble centered representing the user.
![UC12](https://github.com/szyma28/szyma28.github.io/blob/49f3ea7eb8ac8d0118f763227c6b76770936d4f5/docs/Images/UC1STEP2.png)

When looking around the map the user can see the location of all the free public toilets in Bristol, represented by the blue bubbles.
![UC13](https://github.com/szyma28/szyma28.github.io/blob/49f3ea7eb8ac8d0118f763227c6b76770936d4f5/docs/Images/UC1STEP3.png)


# Use Case 2

When the "Find by Type" button is pressed, the user is taken to a database of all the toilets, segmented into sections of different types of toilets. 
![UC21](https://github.com/szyma28/szyma28.github.io/blob/49f3ea7eb8ac8d0118f763227c6b76770936d4f5/docs/Images/UC2STEP1.png)

Filtering the results to display only what the user wants and displaying only those filtered toilets on the map is yet to be implemented in a later version.
