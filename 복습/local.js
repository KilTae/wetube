import hello from "./hello";

const PORT=1000;

const Lisitening=()=>console.log(`http://localhost:${PORT}`);

hello.listen(PORT,Lisitening);
