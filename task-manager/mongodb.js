// CRUD create read update delete

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

   const db = client.db(databaseName)

   db.collection('tasks').deleteOne({
       description: "Clean the house"
   }).then((result) => {
    console.log(result)
   }).catch((error) => {
       console.log(error)
   })

   db.collection('users').deleteMany({
    age: 27
}).then((result) => {
 console.log(result)
}).catch((error) => {
    console.log(error)
})
   
//     db.collection('users').updateOne({
//        _id: new ObjectID("64d974610996e70467dac367")
//    }, {
//         $inc: {
//             age: 1
//         }
//    }).then((result) => {
//     console.log(result)
//    }).catch((error) => {
//     console.log(error)
//    })

        // db.collection('tasks').updateMany({
        //     completed: false
        // }, {
        //     $set: {
        //         completed: true
        //     }
        // }).then((result) => {
        //     console.log(result.modifiedCount)
        // }).catch((error) => {
        //     console.log(error)
        // })
})