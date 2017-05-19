var defaults = ['Date', 'Campaing']
var tags = ['utm_source=whirlpool_emkt_home_', '_principal&utm_medium=emkt&utm_campaign=']

var app = new Vue({
	el:'#app',
  data: {
  	link: 'http://loja.brastemp.com.br/',
    params: [],
    UTMIcheck: true,
    results:[]
    
  },
  created: function(){
    this.setup()
  },

  methods:{
    setup: function(){
      defaults.forEach(function(element) {
        this.params.push({key:element, value:''})
      }, this);
    },

    remove: function(index) {
      this.results.splice(index, 1);
    },

    save: function(){
      this.results.push(this.result)
    }
  },
  computed:{
    result: function(){

      return this.link +this.params.map(function(tags){
        return tags.key + "=" + tags.value
      }).join("&")
      
    }
  }

});