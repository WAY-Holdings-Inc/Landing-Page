'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Transaction = function Transaction(_ref) {
  var date = _ref.date,
      total_price = _ref.total_price,
      items = _ref.items,
      users = _ref.users;

  var placesStyle = {
    padding: '0 10px',
    border: '1px solid #CAD3C8',
    boxSizing: 'border-box',
    width: '480px',
    float: 'left',
    marginBottom: '20px'
  };
  return React.createElement(
    'div',
    { style: placesStyle },
    React.createElement(
      'div',
      null,
      React.createElement(
        'b',
        null,
        React.createElement(
          'p',
          { style: { float: 'left' } },
          date
        )
      ),
      React.createElement(
        'p',
        { style: { float: 'right' } },
        '$',
        total_price
      )
    ),
    React.createElement(
      'i',
      null,
      React.createElement(
        'p',
        { style: { clear: 'both', color: '#2d3436' } },
        'Items Purchased: ',
        items
      ),
      React.createElement(
        'p',
        { style: { clear: 'both', color: '#2d3436' } },
        'Customers: ',
        users
      )
    )
  );
};

var TransactionList = function (_React$Component) {
  _inherits(TransactionList, _React$Component);

  function TransactionList(props) {
    _classCallCheck(this, TransactionList);

    return _possibleConstructorReturn(this, (TransactionList.__proto__ || Object.getPrototypeOf(TransactionList)).call(this, props));
  }

  _createClass(TransactionList, [{
    key: 'render',
    value: function render() {
      var results = {
        "transList": [{
          "date": "1/1/2020",
          "total_price": 31.50,
          "items": "Steak",
          "users": "John"
        }, {
          "date": "1/2/2020",
          "total_price": 10.50,
          "items": "Pasta",
          "users": "Jane"
        }]
      };
      console.log(results);
      //const [transactions, settransactions] = React.useState(results.transList)
      var transactions = results.transList;
      return React.createElement(
        'div',
        {
          style: {
            marginTop: '40px',
            display: 'block',
            position: 'absolute'
          }
        },
        transactions.map(function (transaction) {
          return React.createElement(
            'div',
            null,
            React.createElement(Transaction, {
              date: transaction.date,
              total_price: transaction.total_price,
              items: transaction.items,
              users: transaction.users
            })
          );
        })
      );
    }
  }]);

  return TransactionList;
}(React.Component);

var domContainer = document.querySelector('#transList');
ReactDOM.render(React.createElement(TransactionList, null), domContainer);