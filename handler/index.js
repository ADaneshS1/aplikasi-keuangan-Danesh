const express = require('express');
const { connectionDB } = require('./mongodb-gateway');

const url = 'mongodb+srv://ppqita:santri@ppqitadb.dada60q.mongodb.net/';

let myCollection, myClient;

const initDB = async () => {
    try {
      const { collection, client } = await connectionDB(url,'keuangan','money');
      myCollection = collection;
      myClient = client;
      console.log('server db berjalan');
    } catch (error) {
      console.log(error);
    }
  };
  
initDB();

const app = express();

app.use(express.json());
app.post('/api', async (req,res) => {
  console.log(req.method)
    try {
        console.log(req.body)
        let {nama,harga} = req.body;
        const tanggal = new Date();
        const insertManyResult = await myCollection.insertOne(req.body)
        console.log(` document successfully inserted.\n`, insertManyResult);
        res.send("Anda telah membeli " + nama + " dengan harga " + harga + " di tanggal " + tanggal);
    } catch(error) {
        console.error("terjadi error ", error, " di intregasi-with-mongodb")
    }
   
});

app.listen(3000, () => {
    console.log("Halo cuyy, Server sudah jalan di http://localhost:3000")
})  