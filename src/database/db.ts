import { connect } from 'mongoose'

class dataBase {
    private DB_URL = process.env.DB || 'mongodb://localhost:27017/db_portal' || 'mongodb://localhost:27017/db_portal'

    createConnection() {
        connect(this.DB_URL),()=>{
            console.log('conected')
        }
    }

}

export default dataBase