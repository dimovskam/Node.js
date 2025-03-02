//Email:^[a-z0-9.+_]+\@+[a-z]+\.+[a-z]+$;
//Password:(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%&*?])[A-Za-z\d!@#$%&*?]+
//Name and age:[A-Za-z]+\s+[A-Za-z]+\s+[0-9]+
//Address:[A-Za-z]+\s+[\d]+
//City:[A-Za-z]+
//Zip-code:[0-9]+
//Phone-number:[+\d]{12}
//ID number:[A-Z\d]+
//Education:[A-Za-z]+
//Employment status:[a-zA-Z]

const http = require ("http")

const server = http.createServer((req, res) =>{
    if (req.method === "POST" && req.url === '/exercises'){
        let data = "";
        req.on ("data", (chunk) => {
            data += chunk;
        });
        req.on ("", () => {
            const parsedData = JSON.parse(data)
            const nameAgeRegex = /[A-Za-z]+\s+[A-Za-z]+\s+[0-9]+/g;
            const addressRegex = /[A-Za-z]+\s+[\d]+/g;
            if (nameAgeRegex.test(parsedData.name) &&
        addressRegex.test(parsedData.address)) {
            res.end("regex is correct!")
        }else {
            res.end("There is a mistake!")
        }
        })
    }
})

server.listen(8000, () => console.log("Server is running at port 8000"));
