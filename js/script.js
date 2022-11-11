const {createApp} = Vue;

createApp({
  data(){
    return{

      title: 'Vue-Email-list',
      isLoaded: false,
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emailLimit : 10,
      emails: [],
    }
  },

  methods:{

    getApi(){
      this.isLoaded = false;
      for(i = 0; i < this.emailLimit; i++ ){

        axios.get(this.apiUrl)
        .then( result => {
          this.emails.push(result.data.response) 
          console.log("Emails:", this.emails);
        })

      }
      this.isLoaded = true;
      this.emails = []
    }
  },

  mounted(){
    
  },
}).mount('#app')