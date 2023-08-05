require('dotenv').config();
import app from "./app"

// Start server
const server = app.listen(app.get('port'), () => {
    console.log(`Running on Port: ${app.get('port')}`);
    console.log(`Environment: ${app.get('env')}`)
})

export default server;