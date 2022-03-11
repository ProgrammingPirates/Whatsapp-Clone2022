import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = 'mongodb://whatsapp:qjyTEKp2P6Yrv1Hi@cluster0-shard-00-00.fkdix.mongodb.net:27017,cluster0-shard-00-01.fkdix.mongodb.net:27017,cluster0-shard-00-02.fkdix.mongodb.net:27017/WHASTAPP?ssl=true&replicaSet=atlas-dleiht-shard-0&authSource=admin&retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;