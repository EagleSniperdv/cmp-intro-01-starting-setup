const app = Vue.createApp({

    data() {
        return {
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
    }
});

app.component('friend-list', {

    template: `
    <li v-for="friend in friends">
        <h2 >{{friend.name}}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'show'}}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
            <li><strong>Id:</strong> {{ friend.id }}</li>
        </ul>
    </li>
    `,
    data() {
        return { 
            detailsAreVisible: false,
            friends:[
                {
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
                
        };
    },

    methods: {
        toggleDetails() { 
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');