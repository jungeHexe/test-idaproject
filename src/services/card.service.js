/*переменная заглушка данных, при работе с сервером данные запрашивать и обрабатывать через fetch*/
let cards =  JSON.parse(sessionStorage.getItem('cards')) || [
    {id:1, image: require('@/assets/photo.svg'), title: 'Наименование товара', content: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.', price: 10000},
    {id:2, image: require('@/assets/photo.svg'), title: 'Наименование товара', content: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.', price: 10000},
    {id:3, image: require('@/assets/photo.svg'), title: 'Наименование товара', content: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.', price: 10000},
    {id:4, image: require('@/assets/photo.svg'), title: 'Наименование товара', content: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.', price: 10000},
    {id:5, image: require('@/assets/photo.svg'), title: 'Наименование товара', content: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.', price: 10000},
    {id:6, image: require('@/assets/photo.svg'), title: 'Наименование товара', content: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.', price: 10000},
    {id:7, image: require('@/assets/photo.svg'), title: 'Наименование товара', content: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.', price: 10000},
    {id:8, image: require('@/assets/photo.svg'), title: 'Наименование товара', content: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.', price: 10000},
    {id:9, image: require('@/assets/photo.svg'), title: 'Наименование товара', content: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.', price: 10000},
];

export default {
    getCards(){
        return cards;
    },

    deleteCard(id){
        cards = cards.filter(el => el.id != id);
        sessionStorage.setItem('cards', JSON.stringify(cards));
        return cards;
    },

    addCard(item){
        cards.push({id: cards.length+1, ...item});
        sessionStorage.setItem('cards', JSON.stringify(cards));
        return cards;
    }
}