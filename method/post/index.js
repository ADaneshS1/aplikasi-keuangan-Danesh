const express = require("express")
const app = express()
app.use(express.json())

app.post('/api', (req,res) => {
    console.log(req.body)
    let {nama,harga} = req.body;
    const tanggal = new Date();
    res.send("Anda telah membeli " + nama + " dengan harga " + harga + " di tanggal " + tanggal);
})

app.listen(3000, () => {
    console.log("Halo cuyy, Server sudah jalan di http://localhost:3000")
})