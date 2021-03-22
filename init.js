import app from "./app";

const PORT = 4000;

const handleListening= () => console.log(`★ 듣고 있슈 : http://localhost:${PORT}`);

app.listen(PORT,handleListening);
