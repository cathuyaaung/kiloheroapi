# KiloHeroAPI
REST API for Point of KILO HERO App

Quick Start
=====

1. Install NodeJs
2. Run `npm start`?? 

Database
====
1. Install MongoDB by [following their docs](https://docs.mongodb.com/getting-started/shell/installation/)
2. Run mongo shell `mongo <Connection String>` to connect your DB. Below example connects to `kiloherodb` at host name `kiloheroapi.flansoft.com` with user and password credentials  
  ```
  mongo mongodb://kiloherodbsa:Ki10Her0DbsA@kiloheroapi.flansoft.com/kiloherodb
  ```
3. Inside mongo shell, you can find, insert, query the Mongo collections and their data.
  ```
  use kiloherodb # switch to your db
  show collections # list the collections
  db.routes.find() # shows the routes data
  ```
  
  

