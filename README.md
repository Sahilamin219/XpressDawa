# XpressDawa
Created with CodeSandbox

Prototype of XpressDawa without use of thefront.

functionalities added by me :

Phone auth sytem add

Collection of data in csvtojson.json (checkout Fetch.js)

Search bar added

Searching feature added
<b style="text-decoration: underline">“detect when user stop write in input field”</b> Code Answer

    class Search extends Component {
      constructor(props){
        super(props);
        this.timeout =  0;
      }

      doSearch(evt){
        var searchText = evt.target.value; // this is the search text
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          //search function
        }, 300);
      }

       render() {
        return (
          <div className="form-group has-feedback">
            <label className="control-label">Any text</label>
            <input ref="searchInput" type="text" onChange={evt => this.doSearch(evt)} />
          </div>
        );
      }
    }
