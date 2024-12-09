## Description of the app
JobJourney is a job offer tracking webapp designed to help users organize and manage their job search process more effectively. With a clean and intuitive interface, users can view, create, edit, and delete job offers while keeping track of essential details such as job title, company, location, salary, description, and hiring manager.

This webapp simplifies the job search by offering features like a searchable job list and a clear overview of opportunities, enabling users to focus on their applications and deadlines with ease. Perfect for individuals looking to stay organized and proactive in their career journey.


## How to use the app

Before using the app, ensure that you have the following installed on your system:

Python: Version 3.x or later [Download Python](https://www.python.org/downloads/)

Node.js: Version 14.x or later [Download Node.js](https://nodejs.org/en/download/prebuilt-installer/current)


## Installation

First, check again the correct installation of python. Open your
terminal and run `python --version`. Check for correct
installation of Node.js by running `node -v` and `npm -v`.

Then, open the terminal in the **backend** folder. Run
the command `pip install -r requirements.txt`. This will install
packages needed for the app.

_Note: this installation guide is for Windows. 
When using a Mac, replace `python` with `python3`
and `pip` with `pip3`_

Open another terminal window in the **frontend** folder.
From here, run `npm install`.

## Start the app
Open a terminal window in the **backend** folder and run
`python main.py`.

_Note: For Mac users, replace `python` with `python3`._

Keep the terminal open. Open another terminal instance
in the **frontend** folder. From here, run `npm run dev`.
You should now be presented with a link to localhost
(http://localhost:5173/). Here, you can interact with the app.

## Environment and libraries

### Development Environment

Backend: The backend is developed using Python with the Flask library for routing and API management. Additional dependencies are listed in the requirements.txt file.

Frontend: The frontend is built using React, a JavaScript library for building user interfaces, and Vite for a fast development environment.

### Libraries Used:
Backend: Flask, Flask-Cors

Frontend: React, React-DOM, styled-components

Operating System: The app was developed and tested both on MacOS 15.1 and Windows 10. It should also work on other operating systems with the correct environment setup. There should be no difference in using Intel or Apple silicon for Mac users.


## Usage of the app

This version features two placeholder entries for the user
to familiarize themselves with the workings of the app.

The job offers are displayed in a table. The user is
able to sort by some of the fields by clicking the
buttons located near the headers. The default sort order
is ascending, but by clicking the button once more,
the order is changed to descending. 

On the side of each row are two buttons, Edit and Delete.
Neither of those actions is reversible, caution is advised.
For editing, the changes apply only after submitting
the form by clicking on the **Update** button.
For deletion, only a click is enough.

There is also a filtering function. In this version
of the app, the search is applied only to the **Title**
of the job offer. The filtering searches the text 
of the title for the substring supplied by the user.

Last is the **Create** function. The interface is the same
as for updating, but in this case, all fields are left blank.


### _Closing notes on accessibility_

_This demo is set up to run on your machine and be
accessible only from it. For the advanced user, there
is a small guide in the `main.py` file that enables
hosting the app locally to all devices on your network._