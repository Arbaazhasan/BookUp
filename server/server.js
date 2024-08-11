

export const server = (app) => {

    const PORT = process.env.PORT || 3000;


    app.get('/', (req, res) => {
        res.send("working");
    });


    app.listen(PORT, (req, res) => {
        console.log(`Server is working on Port : ${PORT}`);
    });

};

