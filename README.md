# BugTracker

## Install

### Prerequisites

BugTracker is written in React.
To run the technical test you have to have Node and NPM installed.

1. Download the source from GitHub at:
   <https://github.com/andypandyi/BugTracker>

2. Move to the cloned repository folder

3. Install all the required packages with the NPM command
   `npm install`


### Run

Gulp has been used to bundle and transform the React JSX code.
The gulpfile.js file supplied should setup all the necessary steps to copy the source files to the dist output folder.

To run, simply type `gulp`
NB - NPM will install gulp as part of the overall install.
However, it if hasn't altered the system path, Gulp can be found in `node_modules\.bin\gulp.exe`


## Overview

BugTracker is my implementation for the Aire Logic Technical test.
I chose to write the client-side requirements in React.
I've used it before .. not extensively .. but it's been a fun challenge to code up.
Because I've not programmed it extensively before .. it did take a little longer than perhaps it would had I had years of 
experience and lots of example libraries/components.

All the same .. I did it enjoy it very much and I'm pretty happy with the result.


## Limitations

The requirements document stated that whilst not time limited, a sample time of 3-4 hours should be aimed for.
In all honesty (and lightheartedly) .. I think God would struggle at 3-4 hours but to an extent that might be down to interpretation of the requirements
The test stated that not all requirements were required up front and could be tackled in an agile manner.
As a result, I focused on getting the app to a well programmed state which was workable, reliable and easy to use.

Having already hit through the time constraints, I decided not to tackle saving the data to a database.
Further, there are APIs running through the application but instead of connecting to a service and then do a database, the Bug and People APIs are mocked.
As a result .. the application is still usable and users can be added and bugs saved.
However, the data is held only in state and refreshing the application will lose all the mocked data.


## Improvements

The application works well but given the time constraints, unsurprisingly, some improvements could be made.
As mentioned, the application does not connect up to a real API and database.
My choice for these would have been WebApi plus either Entity Framework or a NoSQL db.
The architecture of the program means it would be very easy to slot this new API and database in without disturbing any existing code.

Other improvement would have been to make the Javascript and React elements testable.
This should always be the case but in this circumstance time constraints prevented this.

Finally .. an issue with Gulp and Babel prevented me from writing the javascript code in ES6/2015.
So .. in this case .. ES5 was used to code up the React pages and also the gulp driving code.
Conversion to ES6/2015 should be relatively straightforward


