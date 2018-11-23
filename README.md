# DJ Iggy Website

[![N|Solid](https://i.imgur.com/MQA78zo.jpg)](https://asimzaidi.tech/)

DJ Iggy is an artist based out of Chicago. This is the README for his websites development.

## To Do's
[ ] Set up views
[ ] Set up basic routes to see views
[ ] Create event model
[ ] connect to MongoDB
[ ] setup express-basic-auth
[ ] create admin CRUD routes
[ ] deploy

### Views
  - Index 
    - Header
    - DJ Iggy Logo
    - Footer
  - Shows
    - Header
    - Events
        - Date
        - Venue
        - Location
    - Footer
  - Contact
  - Photos
### Models
- Events
  - Id, Date, Venue, Location - all string types - required.
  - Possibly an authenticated user model.

### Controllers
- index.js routes
  - get(admin-login) - takes in user email/pass
  - get(admin-dashboard) - auth
  - post (events/new) - auth
  - get(events) - auth
  - get(events/:id/edit) - auth
  - get(events/:id/destroy) - auth
  - get(index)
  - get(photos)
  - get(contact)
  - get(bio)

Basic admin should be able to create, edit and delete events on his website by logging into their admin dashboard.


### Installation

DJ-Iggy-Website requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

DJ-Iggy-Website is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| Github | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

License
----
WWW.ASIMZAIDI.TECH | Asim Zaidi.


Contact: [https://www.asimzaidi.tech/contact]
