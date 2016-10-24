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
                  'display': 'inline-block',
                  'padding': '6px',
                  'line-height': '22px',
                  'font-size': '16px',
                  'border': '2px solid #fff',
                  'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
                  'border-radius': '2px',
                  'color': '#5F5F5F'
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
