var app = new Vue({
	el:'#app',
  data: {
  	link: 'http://loja.brastemp.com.br/',
    UTMIcheck: true,
    results:[],
    template: {
      fields: [
        {
          label: 'Date',
          value: ''
        }, 
        {
          label: 'Campaing',
          value: ''
        },
      ],
      format: '?&utm_source=whirlpool_emkt_home_$0_principal&utm_medium=emkt&utm_campaign=$1'
    }
  },
  methods:{
    remove: function(index) {
      this.results.splice(index, 1);
    },

    save: function(){
      this.results.push(this.result)
    }
  },
  computed:{
    fields: function () {
      return this.template.fields;
    },
    format: function () {
      return this.template.format;
    },
    result: function () {
      return this.link + this.format.replace(/\$\d/g, function (param) {
        var index = +(param.replace(/\$/, ''));
        return this.fields[index].value || '';
      }.bind(this))
    }
  }

});