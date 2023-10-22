import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/items';



class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      items: [
        {
          id:1,
          title: 'Худи Gap',
          img: 'gap.jpg',
          category: 'hoodies',
          price: '6400'
        }
        
      ]
    }
  }
  render() {
    return(
      <div className="wrapper">
      <Header />
      <Items items = {this.state.items} />
      <Footer /> 
      </div>
    )
  }
}

export default App;
