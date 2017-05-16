var app = new Vue({
	el:'#form-js',
  data: {
  	input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    result: ''
  },
  methods:{
		buildUtm: function(){
      this.result = this.input1 + this.input2 + this.input3 + this.input4 + this.input5 + this.input6 + this.input7
    }
  }
});