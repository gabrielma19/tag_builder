var app = new Vue({
	el:'#app',
  data: {
  	link: 'http://loja.brastemp.com.br/',
    date:'',
    UTMIcheck: true,
    UTM:{
      source: '',
      medium: '',
      campaing: '',
      UTMI: ''
    },
    currently: '',
    
    results:[]
  },
  methods:{
		buildUtm: function() {
      this.result = 
      this.link + "?utm_source=" +
      this.UTM.source + this.date + "_principal&utm_medium=" + 
      this.UTM.medium + "&utm_campaign=" + this.UTM.campaing + 
      this.UTM.UTMI  
      this.results.push(this.result)
    },
    remove: function(index) {
      this.results.splice(index, 1);
    }
  }

});