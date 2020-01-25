'use strict';

const Transaction = ({
  date,
  total_price,
  items,
  users
}) => {
  const placesStyle = {
    padding: '0 10px',
    border: '1px solid #CAD3C8',
    boxSizing: 'border-box',
    width: '480px',
    float: 'left',
    marginBottom: '20px'
  }
  return (
    <div style={placesStyle}>
      <div>
        <b>
          <p style={{ float: 'left' }}>{date}</p>
        </b>
        <p style={{ float: 'right' }}>
          ${total_price}
        </p>
      </div>
      <i>
        <p style={{ clear: 'both', color: '#2d3436' }}>
          Items Purchased: {items}
        </p>
        <p style={{ clear: 'both', color: '#2d3436' }}>
          Customers: {users}
        </p>
      </i>
    </div>
  )
}

class TransactionList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let results = {
      "transList": [
        {
          "date": "1/1/2020",
          "total_price": 31.50,
          "items": "Steak",
          "users": "John"
        },
        {
          "date": "1/2/2020",
          "total_price": 10.50,
          "items": "Pasta",
          "users": "Jane"
        }
      ]
    }
    console.log(results)
    //const [transactions, settransactions] = React.useState(results.transList)
    const transactions = results.transList
    return (
      <div
        style={{
          marginTop: '40px',
          display: 'block',
          position: 'absolute'
        }}
      >
        {transactions.map(transaction => {
          return (
            <div>
              <Transaction
                date={transaction.date}
                total_price={transaction.total_price}
                items={transaction.items}
                users={transaction.users}
              />
            </div>
          )
        })}
      </div>
    )

  }
}

const domContainer = document.querySelector('#transList');
ReactDOM.render(<TransactionList />, domContainer);

