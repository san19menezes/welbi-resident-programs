# Welbi Resident Programs

This project is created to display the list of programs and residents in the Welbi community.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

This project is also hosted on netlify : https://welbi-sanchia.netlify.app

## Completed Tasks

1. Programs page to view the list of resident programs. Integration with REST is done.
2. Residents page to view the list of residents in the community. Integration with REST is done.
3. When clicked on the program, you will be routed to the details page to view the program details and attendees.
4. Page to add a new program. Integration with REST is done.
5. Page to add a new resident. Integration with REST is done.
6. Basic HTML form validations.
7. Custom CSS styling.
8. Unit tests for program and resident cards.

## Design considerations

1. No external css library was used. The application has custom CSS styling. The Welbi website was used as a reference for color schemes and fonts.
2. Since the programs/{id} and residents/{id} API end points were non functional, react context was used to store the entire list of programs and residents.
3. Since the API end points did not support pagination, all the fetched results are shown on the screen.
4. The application is medium and large devide friendly.

## TO DO

1. Addition of a resident to a program(this also includes API integration).
2. Resident details page to display the details of each resident.
3. Mobile and tablet friendly(xs and sm devices).

## Improvements that can be done

1. Since the bearer token and email was constant, these details have been saved into the env file. Implemented a custom hook to save the details to local storage when authentication is considered in the future. The bearer token can be fetched on session timeout and used in API requests from the local storage.
2. Increased unit tests for better coverage.
3. Pagination for better use experience while displaying the programs and residents list.
4. Edit and delete program.
5. Edit and delete resident.
6. Sorting of programs and residents.
7. Filtering based on tags, facilitators, hobbies etc.
