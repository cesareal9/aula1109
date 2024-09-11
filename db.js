const mongoose = require("mongoose")

const mongoDB = "mongodb+srv://cesareal9:LnzQwcf3p9VXD6ow@cluster0.5vbik.mongodb.net/"

async function main(){
    await mongoose.connect(mongoDB)
}

main().
then (()=> console.log("conectado com sucesso!"))
.catch(err => console.log(err))

module.exports = mongoose;