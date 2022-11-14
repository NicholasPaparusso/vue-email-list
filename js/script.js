const {createApp} = Vue;

createApp({
  data(){
    return{
      isLoading : false,
      title: 'Vue-Email-list',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emailLimit : 10,
      emails: [],
    }
  },

  methods:{

    getApi(){
      this.emails = [];
      this.isLoading = true;
      for(i = 0; i < this.emailLimit; i++ ){

        axios.get(this.apiUrl)
        .then( result => {
          this.emails.push(result.data.response) 
          console.log("Emails:", this.emails);
        })

      }

    }
  },

  mounted(){
    
  },
}).mount('#app')