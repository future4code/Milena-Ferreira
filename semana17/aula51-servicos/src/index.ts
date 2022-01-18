import dotenv from 'dotenv'
import app from "./app"
import createUser from './endpoints/createUser'
import { searchAddressFromCep } from './endpoints/searchAddressFromCep'
import passRecovery from './endpoints/passRecovery'
import { getAddressInfo } from './services/getAddressInfo'
import { mailTransporter } from './services/mailTransporter'

dotenv.config()

getAddressInfo("04538133").then(console.log)

app.get('/address/:cep', searchAddressFromCep);

app.post('/users/signup', createUser);
