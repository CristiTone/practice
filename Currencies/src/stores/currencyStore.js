import { observable, action } from 'mobx';

let id = 0;
function createData(name, now, yesterday) {
  id += 1;
  return { id, name, now, yesterday };
}

class CurrencyStore {

	refreshInterval = null;
	@observable rows = [
		createData('US Dollar', 6.9, 6.2),
		createData('British Pound', 9.7, 10.0),
		createData('Australian Dollar', 2.2, 1.6),
		createData('Canadian Dollar', 3.5, 3.7),
		createData('Singapore Dollar', 3.6, 3.5),
		createData('Swiss Franc', 5.9, 6.1),
		createData('Malaysian Ringgit', 8.7, 9.0),
		createData('Japanese Yen', 2.2, 1.6),
		createData('Chinese Yuan Renminbi', 3.5, 3.7),
		createData('Argentine Peso', 5.6, 6.0),
	];

	@action initRefresh = () => {
		if (!this.refreshInterval) {
			this.refreshInterval = setInterval(() => this.refreshCurrency(), 5000);
		}      
	}

	@action refreshCurrency = () => {
		for (var i = 0; i<this.rows.length; i++) {
			this.rows[i].now = Number((Math.random() * 10 + 1).toFixed(1));		
		}
	}

	@action stopRefresh = () => {
		if (this.refreshInterval) {
			clearTimeout(this.refreshInterval);
			this.refreshInterval = null;
		}      
	}
	
}

const store = new CurrencyStore();
export default store;