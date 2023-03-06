# StudentFuze

A full stack JavaScript application for educators who want to manage Student Study Teams meeting notes. 

## Why I Built This

As a former educator, I wanted to build an application that I wish I had access to back when I had attended SST meetings for students. 

## Technologies Used

- React.js
- Webpack
- Node.js
- Material UI
- HTML5
- CSS3
- PostgreSQL
- AWS E2 (with dokku)

## Live Deployment

Check out the application live at [https://student-fuze.lisanguyen.dev/](https://student-fuze.lisanguyen.dev/)

## Features

- Users can add a new student
- Users can search for a student using their name
- Users can search for a student using their student ID number
- Users can edit student's demographic information
- Users can delete a student
- Users can create an entry for notes for a student
- Users can edit an entry for notes for a student
- Users can delete an entry for notes for a student

## Stretch Features

- Users can add/edit/delete student's photographs
- Users can create an account and log into their account

## Preview
![chrome_8u8Uy8KM0B](https://user-images.githubusercontent.com/109618931/223215461-7c5c3ed2-1123-4ad7-a3dd-cc972c8a89ef.gif)


## Development
### System Requirements
- Node.js 10 or higher
- NPM 6 or higher
- PostgreSQL
### Getting Started
1. Clone the repository.
```
git clone https://github.com/lisa-t-nguyen/final-project.git
cd final-project
```
2. Install all dependencies with NPM.
```
npm install
```
3. Make a copy of the provided ```env.example``` file. Name your copy ```.env```. Change the ```DATABASE_URL``` to ```studentData```.
```
cp .env.example .env
```
4. Import the example database to PostgreSQL.
```
sudo service postgresql start
createdb studentData
npm run db:import
```
5. To view the database in your browser, use pgweb.
```
pgweb --db=studentData
```
6. Start the project. Once running, you can view the application by opening [http:/localhost:3000](http:/localhost:3000) in your browser.
```
npm run dev
```




