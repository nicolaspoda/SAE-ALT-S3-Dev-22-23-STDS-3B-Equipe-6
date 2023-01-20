const {Client} = require('pg')

const client = new Client({
	host: "localhost",
	user: "timescale",
	port: 5432,
	password: "password",
    database: "postgre"
})

client.connect();

client.query('Select valeur from donneeSAE4 where type = `T1` ', (err, res) => {
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
})

	