# NODEJS PROJECT DB

## Usage

```js
const setupDatabase = require('nodejs-project-db')

setupDatabse(config).then(db => {
    const { Agent, Metric } = db
    
}).catch(err => console.error(err))
```

## CREATE POSTGRESQL DATABASE

```
# psql postgres
psql (10.5)
Type "help" for help.

postgres=# CREATE ROLE nodejsproject WITH LOGIN PASSWORD 'admin';
CREATE ROLE
postgres=# CREATE DATABASE nodejsproject;
CREATE DATABASE
postgres=# GRANT ALL PRIVILEGES ON DATABASE nodejsproject TO nodejsproject;
GRANT
postgres=# \quit
```

