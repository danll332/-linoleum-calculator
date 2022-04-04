var app = new Vue({
    el: '#app',
    data() {
        return {
            item: '',
            text1: 'Площадь: ',
            text2: 'Длина рулона: ',
            width: '',
            lenght: '',
            area: 0,
            count: 0,
            cost: 0,
            
            selected: { },
            options: [
              { text: 'A-5', area: 5, price: 400 },
              { text: 'A-3', area: 3, price: 300 },
              { text: 'A-2', area: 2, price: 200 }
            ]
 
        }
    },
    computed: {
        getArea() {
            return this.width * this.lenght  || 0;
        },
        getCost() {
            return this.getCount * this.selected.price || 0;
        },
        getCount() {
            return this.getArea / this.selected.area || 0;
        }
    },
    created() {
        this.selected = this.options[0]
    }
});