new Vue(
    {
        el: '#app',
        data: {
            jobs: [
                {
                  id: 1,
                  company: 'Perferendis',
                  position: 'Developer',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis,laboriosam perferendis?',
                  created_at: '5/22/2021',
                  logo: 'logo.jpg',
                  city: 'Roma',
                  contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'Tondello spa',
                    position: 'Contabile',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '6/22/2021',
                    logo: 'logo.jpg',
                    city: 'Milano',
                    contract: 'Full Time'
                },
                {
                    id: 3,
                    company: 'Ferrero',
                    position: 'vendite',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/12/2021',
                    logo: 'logo.jpg',
                    city: 'Cuneo',
                    contract: 'Full Time'
                },
                {
                    id: 4,
                    company: 'Google',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '4/2/2021',
                    logo: 'logo.jpg',
                    city: 'MountainView',
                    contract: 'Full Time'
                }  
            ],
            starred: [1],
            applied: [2, 4]
            
        },
        methods: {
            addFav: function(index) {
                if (!this.starred.includes(index)) {
                    this.starred.push(index)
                }
            },
            removeFav: function(id) {
                if (this.starred.includes(id)) {
                    let index = this.starred.indexOf(id);
                    this.starred.splice(index,1);
                }               
            },
            sendCandidacy: function (index) {
                if (!this.applied.includes(index)) {
                    this.applied.push(index);
                    this.display();
                } 
            }        
        }
    }
);