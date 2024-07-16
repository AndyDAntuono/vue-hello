//all'interno del file script.js imposto una costante la cui funzione (che chiamerò createApp) che avrà il compito di creare il messaggio
const {createApp} = VTTCue

//imposto un istanza dell'applicazione Vue sfruttando la funzione createApp
createApp ({
    data () {
        return {
            message: 'Hello Wordl By Vue!'
        }
    }
}).mount('#app')