

function ItemTable(props) {    

  const itemRows = props.items.map(item =>
      <ItemRow key={item.id} item={item} />
  );

  return (
      <table className="bordered-table">
          <thead>
              <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Image</th>
              </tr>
          </thead>
          <tbody>
              {itemRows}
          </tbody>
      </table>
  );

}

class ItemAdd extends React.Component {

  constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();
      const form = document.forms.itemAdd;
      const item = {
          productName: form.productName.value,
          price: form.price.value.slice(1),
          category: form.category.value, 
          image: form.image.value, 
      }
      this.props.createItem(item);
      form.productName.value = "";
      form.price.value = "$";
      form.category.value = "";
      form.image.value = "";
  }

  render() {
      return (
          <form name="itemAdd" onSubmit={this.handleSubmit}>
              <label for="category">
                Category
                <select name="category" >
                  <option value="Shirts">Shirts</option>
                  <option value="Jeans">Jeans</option>
                  <option value="Jackets">Jackets</option>
                  <option value="Sweaters">Sweaters</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </label>

              <label for="price">
                Price Per Unit
                <input type="text" name="price" defaultValue="$" />
                </label>

              <label for="productName">
                Product Name
                <input type="text" name="productName" />
              </label>
              
              <label for="image">
                Image URL
                <input type="text" name="image" />
                </label>
              
              <button>Add Product</button>
          </form>
      );
  }
}

class ItemList extends React.Component {

  constructor() {
      super();
      this.state = { items: [] };
      this.createItem = this.createItem.bind(this);
  }
  componentDidMount() {
      this.loadData();
  }
  loadData() {
      setTimeout(() => {
          this.setState({ items: initialItems });
      }, 500);
  }
  createItem(item) {
      item.id = this.state.items.length + 1;
      const newItemList = this.state.items.slice();
      newItemList.push(item);
      this.setState({ items: newItemList });
  }
  render() {
      return (
          <React.Fragment>
              <h1>My Company Inventory</h1>
              Showing all available products
              <hr />
              <ItemTable items={this.state.items} />
              <br />
              Add a new product to inventory
              <hr />              
              <ItemAdd createItem={this.createItem} />
          </React.Fragment>
      );
  }
}

function ItemRow(props) {

  const item = props.item;

  return (
      <tr>
          {/* <td>{item.id}</td> */}
          <td>{item.productName}</td>
          <td>{"$" + item.price}</td>

          <td>{item.category}</td>
          <td>
            <a href={item.image} target="_blank">View</a>
          </td>
      </tr>
  );
}

class BorderWrap extends React.Component {
  render() {
      const borderedStyle = {border: "1px solid silver", padding: 6};
      return (
          <div style={borderedStyle}>
              {this.props.children}
          </div>
      );
  }
}


const element = <ItemList />;



ReactDOM.render(
  element, 
  document.getElementById('contents')
);

