import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
    return {
        city: store.search.city,
        name: store.search.name,
        history: store.search.history,
        date: store.search.date
    };
}

export default connect(mapStoreToProps)(Search);