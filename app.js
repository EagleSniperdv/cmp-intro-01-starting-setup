const app = Vue.createApp({

    data() {
        return {
            detailsAreVisible: false,
            friends:[{
                id: 'Manuel',
                name: 'Manuel peno',
                phone: '0785674354',
                email: 'naboth@gmail.com'
            },
        
            {
                id: 'Naboth',
                name: 'Manuel Naboth',
                phone: '0785674354',
                email: 'naboth@gmail.com'
            }
        ]
        }
    },

    methods: {
        toggleDetails() { 
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');