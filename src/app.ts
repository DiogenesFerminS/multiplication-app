import { yarg } from './config/adapters/yargs.adapter.js'
import { ServerApp } from './presentation/server-app.js';


const { base, limit, show:showTable, name:fileName, destination } = yarg as unknown as {base:  number, limit: number, show: boolean, name: string, destination: string};
ServerApp.run({base, limit, showTable, fileName, destination})
