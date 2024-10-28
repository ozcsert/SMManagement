
const mongoose = require('mongoose')
const password = process.argv[2]
const Journ = require('./models/journ')

const url = 
`mongodb+srv://ozcsert1:${password}@cluster25021994.musbupe.mongodb.net/Journio?retryWrites=true&w=majority`
mongoose.set('strictQuery',false)
mongoose.connect(url)

const argv = process.argv

const journCreate = (argv3, argv4) => {
    const journ = new Journ({
      title: argv3,
      journ: argv4,
      date: new Date()
    })

    console.log(journ);
    return journ
  }

//const Journ = new mongoose.model('Journ', journSchema)

//prints the data of the target db
//run node mongo ${password}
const info = () => {
    Journ.find({}).then(result => {
      result.forEach(journ => {
        console.log(journ)
      })
      console.log("lol");
      mongoose.connection.close()
    }
    )
  }

//saves new data to the target db
//run node mongo ${"name"} ${number}
const add = () => {
    journCreate(argv[3],argv[4]).save().then(result => {
      console.log(`added ${argv[3]} journ ${argv[4]} to database`)
      mongoose.connection.close()
    })}

if (argv.length === 3 && argv[2] === password) {
  return info()
} else {
  return add()
}

module.exports = {info}
