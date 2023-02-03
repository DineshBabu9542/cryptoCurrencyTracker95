// Write your JS code here

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoCurrencyData} = this.props

    return (
      <div className="container">
        <h1 className="tracker-heading">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="list-container">
          <div className="list-header-container">
            <p className="coin-description">Coin Type</p>
            <div className="values-container">
              <p className="value-heading">USD</p>
              <p className="euro-heading">EURO</p>
            </div>
          </div>
          <ul className="crypto-list">
            {cryptoCurrencyData.map(eachItem => (
              <CryptocurrencyItem key={eachItem.id} cryptoDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
