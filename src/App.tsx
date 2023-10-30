import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';


class App extends React.Component<any, any> {
  currentItems: any;
  state: any;
  constructor(props: any) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id:1,
          title: 'Худи Gap',
          img: 'gap.jpg',
          category: 'hoodies',
          price: '6400'
        },
        {
          id:2,
          title: 'Шарф Alexander McQueen',
          img: 'am.jpeg',
          category: 'accessories',
          price: '13000'
        },
        {
          id:3,
          title: 'Кроссовки Asics Lyte Classic',
          img: 'asics.jpeg',
          category: 'boots',
          price: '7700'
        },
        {
          id:4,
          title: 'Кепка adidas originals ',
          img: 'cap.jpeg',
          category: 'accessories',
          price: '5400'
        },
        {
          id:5,
          title: 'Футболка Nike х Off-White ',
          img: 'offw.jpeg',
          category: 't-shirts',
          price: '6300'
        },
        
      ],
      showFullitem: false,
      fullItem: {}
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return(
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items = {this.state.currentItems} onAdd={this.addToOrder}  />
        
        {this.state.ShowFullItem && <ShowFullItem item={this.state.fullItem}/>}
        <Footer /> 
      </div>
    )
  }

  onShowItem(item: any){
    this.setState({fullItem: item})
    this.setState({ShowFullItem: !this.state.ShowFullItem})
  }

  chooseCategory(category: any) {
    if(category === 'all') {
      this.setState({ currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter((el: { category: any; }) => el.category === category)
    })
  }
  deleteOrder(id: any){
    this.setState({orders: this.state.orders.filter((el: { id: any; }) => el.id !== id)})
  }

  addToOrder(item: any) {
    this.setState({orders:[...this.state.orders, item] })

  }

}


export default App;
