


class ItemFilter extends React.Component {
  render() {
      return (
          <div>This is a placeholder for the item filter.</div>
      );
  }
}

function ItemTable(props) {    

  const itemRows = props.items.map(item =>
      <ItemRow key={item.id} item={item} />
  );

  return (
      <table className="bordered-table">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>productName</th>
                  <th>price</th>
                  {/* <th>Created</th> */}
                  <th>category</th>
                  {/* <th>Due Date</th> */}
                  <th>image</th>
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
          price: form.price.value,
          category: form.category.value, 
          image: form.image.value, 
      }
      this.props.createItem(item);
      form.productName.value = "";
      form.price.value = "";
      form.category.value = "";
      form.image.value = "";
  }

  render() {
      return (
          <form name="itemAdd" onSubmit={this.handleSubmit}>
              <input type="text" name="productName" placeholder="productName" />
              <input type="text" name="price" placeholder="price" />
              <input type="text" name="category" placeholder="category" />
              <input type="text" name="image" placeholder="image" />
              <button>Add</button>
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
              <ItemFilter />
              <hr />
              <ItemTable items={this.state.items} />
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
          <td>{item.id}</td>
          <td>{item.productName}</td>
          <td>{item.price}</td>

          <td>{item.category}</td>
          <td>{item.image}</td>
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

const initialItems = [];



const element = <ItemList />;



ReactDOM.render(
  element, 
  document.getElementById('contents')
);

