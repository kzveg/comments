import React from "react";
import ListOfComments from './listOfComments';
import Pagination from './pagination';
import SendingForm from './sendingForm';
import '../styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFirstData } from '../redux/actions';


const App = () => {
    let lastPage;
    const dispatch = useDispatch();
    let items = useSelector(state => state.comments.items);

    if (items !== undefined) {
        lastPage = items.last_page;
    }

    const paginationOn = () => {
        document.querySelector('#pag').classList.remove("paginOff");
        let currentPage = items.links.filter(el => (el.label === "Next &raquo;"))
        let url = currentPage[0].url
        const paginationBtn = document.querySelector('#btn');
        if (url.substring(60, 57) < lastPage) {
            paginationBtn.className = 'passively';
        }
        else {
            paginationBtn.className = 'btnOff';
        }
        dispatch(getFirstData(url));
    }

    return (
        <div id="list">
            <div>
                <SendingForm />
            </div>
            <div className="listComments">
                <ListOfComments />
            </div>
            <button id='btn' className="passively" onClick={paginationOn}>
                Показать еще
            </button>
            <div id='pag' className="paginOff">
                <Pagination />
            </div>
        </div>
    );

}

export default App;