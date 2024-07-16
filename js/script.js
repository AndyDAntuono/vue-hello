//all'interno del file script.js imposto una costante la cui funzione (che chiamerò createApp) che avrà il compito di creare il messaggio
const { createApp } = Vue;

//imposto un istanza dell'applicazione Vue sfruttando la funzione createApp
createApp ({
    data () {
        return {
            message: 'Hello World By Vue!',
            bonus: {
                img: "https://picsum.photos/200/300",
                name: "Lorem picsum",
            }
        }
    }
}).mount('#app');