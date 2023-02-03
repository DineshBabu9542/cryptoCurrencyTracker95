// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} = cryptoDetails

  return (
    <li className="crypto-list-item">
      <div className="title-container">
        <img className="img-logo" src={currencyLogoUrl} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-eur-values-container">
        <p className="used-value">{usdValue}</p>
        <p className="used-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
