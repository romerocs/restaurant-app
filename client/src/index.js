import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import fetch from 'fetch-everywhere';

let promises = [fetch("/api/meal"), fetch("/api/categories"), fetch("/api/restaurants/list")];

function _fetchInitialStateData() {
    return Promise.all(
        promises.map(item =>
            item.then(data => data.json()).then(result => {
                return result;
            })
        )
    );
}

_fetchInitialStateData()
.then(res => {
    let data = {};
    res.map(e => {
        data[e.type] = e.content;
        return true;
    });

    store.dispatch({type:"FETCH_INITIAL_STATE", data: data});
});



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//registerServiceWorker();
