<script>
    import myDatepicker from 'vue-datetimepicker/src/vue-datepicker-1.vue'
    require('./passenger.scss')
    export default{
        template: require('./passenger.html'),
        data(){
            return{
              option: {
                type: 'min',
                week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                format: 'YYYY-MM-DD HH:mm',
                placeholder: 'when are you leaving?',
                inputStyle: {
                  'font-family': "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
                  'display': 'inline-block',
                  'padding': '.67861429em 1em;',
                  'font-size': '1em',
                  'background': '#FFF',
                  'border': '1px solid rgba(34,36,38,.15)',
                  'color': 'rgba(0,0,0,.87)',
                  'border-radius': '.28571429rem',
                  'box-shadow': '0 0 0 0 transparent inset',
                  '-webkit-transition': 'color .1s ease,border-color .1s ease',
                  'transition': 'color .1s ease,border-color .1s ease'
                },
                color: {
                  header: '#ccc',
                  headerText: '#f00'
                },
                buttons: {
                  ok: 'Ok',
                  cancel: 'Cancel'
                },
                overlayOpacity: 0.5, // 0.5 as default
                dismissible: true // as true as default,
              },
              passIcon: require('../../../assets/passenger.png')
            }
        },
        components:{
          'date-picker': myDatepicker
        }
    }
</script>
