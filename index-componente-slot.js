

Vue.component('pauta', {
  template: '#pauta',
  props: {
    titulo: {
      type: String,
      required: true,
    },
    participantes: {
      type: Array,
      validator(value) {
        return !value || value.length > 0;
      },
    },
    data: {
      type: Object,
      default() {
        return moment();
      },
    }
  },
  data() {
    return {
      tituloASerDevolvido: 'éxemplo de slots'
    };
  },
  computed: {
  	hasSlotParticipantes() {
    	return this.$slots.blocoParticipantes;
    },
    formatedDate() {
      return moment(this.data).format('DD/MM/YYYY');
    },
  },
  methods: {
    solicitarImpressao() {
      eventos.$emit('solicitado-impressao');
    }
  },
});

var eventos = new Vue({});

var vm = new Vue({
  el: '#app',
  data() {
    return {
      data: moment().subtract(2, 'months'),
      pessoas: [
        'Thiago', 'Ari', 'Alex', 'Francis', 'Arthur', 'Diogenes'
      ]
    }
  },
  created() {
    eventos.$on('evento-global');
  },
  methods: {
    imprimir() {
      console.log('mandou imprimir');
    },
  },
});
