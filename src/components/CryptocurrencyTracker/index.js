// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrencyDetails: [],
    isLoader: true,
  }

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const fetchedData = await response.json()

    const cryptoCurrencyData = fetchedData.map(eachItem => ({
      id: eachItem.id,
      currencyLogoUrl: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))

    this.setState({cryptoCurrencyDetails: cryptoCurrencyData, isLoader: false})
  }

  render() {
    const {isLoader, cryptoCurrencyDetails} = this.state

    return (
      <div className="container">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoCurrencyData={cryptoCurrencyDetails} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
