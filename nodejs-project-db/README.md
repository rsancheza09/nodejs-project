# NODEJS PROJECT DB

## Usage

```js
const setupDatabase = require('nodejs-project-db')

setupDatabse(config).then(db => {
    const { Agent, Metric } = db
    
}).catch(err => console.error(err))
```