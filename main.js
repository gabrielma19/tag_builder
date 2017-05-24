new Clipboard('.copy');

new Vue({
  el:'#app',
  data: {
    tags: [],
    tag: generateDefault()
  },
  methods: {
    save: function () {
      this.tags.push(this.tag);
      this.clean();
    },
    edit: function (index) {
      this.tag = this.tags[index]
      this.remove(index)
    },
    clean: function () {
      this.tag = generateDefault();
    },
    remove: function (index) {
      this.tags = this.tags.filter(function (tag, i) {
        return i !== index
      })
    },
    formatTag: function (tag) {
      var renderValues = function (value) {
        var index = +(value.replace(/\$/, ''));

        return tag.fields[index].value || '';
      }.bind(this);

      return tag.format.replace(/\$\d/g, renderValues);
    }
  }
});

function generateDefault() {
  return {
    fields: [
      {
        label: 'Link Principal',
        value: 'http://loja.brastemp.com.br/',
      },
      {
        label: 'Date',
        value: ''
      }, 
      {
        label: 'Campaing',
        value: ''
      },
      {
        label: 'UTMI',
        value: '',
        optional: true,
        active: false
      }
    ],
    format: '$0'
  };
}