import React from 'react'
import axios from 'axios'
import Product from '../components/product'
import FacebookLogin from 'react-facebook-login'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentWillMount() {
    this.load()
  }

  async load() {
    let body = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log('body', body);
    this.setState({
      items: body.data
    })
  }

  responseFacebook = (response) => {
    console.log(response);
  }

  render () {
    return (
    <div className='section'>
      <FacebookLogin
        appId="1798469306885419"
        autoLoad={true}
        fields="name,email,picture"
        onClick={<div>hola</div>}
        callback={this.responseFacebook} />
      <div className='columns columns-products'>

        {
          this.state.items.map((item, index) => (
            <div className='column is-3'>
              <Product />
            </div>

          ))
        }
      </div>
    </div>
    )
  }
}

export default Home
