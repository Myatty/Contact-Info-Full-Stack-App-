Contact Info Saver Overview

The Contact Info Saver is a full-stack web application designed to help users save and manage their contact information. 
The application features a backend built with Spring Boot, providing a RESTful API for managing contacts, 
and a frontend developed with React, offering an intuitive user interface for interacting with the contact data.

Features
  -Add Contacts: Users can add new contacts with details such as first name, last name, and email.
  
  -View Contacts: Users can view a list of all saved contacts.
  
  -Edit Contacts: Users can update existing contact information. (Not Sure)
  
  -Delete Contacts: Users can remove contacts from the list. (Not Sure)
  

Technologies Used

-Backend: Spring Boot, Spring Data JPA, H2 Database
-Frontend: React, Materialize CSS

Project Structure

Backend
-Contact: Represents a contact entity in the database.
-ContactRepository: Provides CRUD operations for managing contacts.
-DemoLoader: Initializes the database with sample data upon application startup.
Frontend
-Components: React components for displaying and managing contacts.
-Services: Functions to make API calls to the backend
