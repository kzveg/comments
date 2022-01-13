import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFirstData } from '../redux/actions';


const Pagination = () => {
    let pagination;
    let lastPage;
    let items = useSelector(state => state.comments.items);
    const dispatch = useDispatch();

    if (items !== undefined) {
        lastPage = items.last_page;
        pagination = items.links.map((el) => {
            if (el.active === true && el.url != null) {
                return < button className='active' onClick={page}  > {el.label}</button >;
            }
            if (el.active === false && el.url != null) {
                return < button className='passively' onClick={page}  > {el.label}</button >;
            }
        })
    }

    function page(e) {
        let content = e.target.innerText
        let currentPage = items.links.filter(el => (el.label == content));
        let url = currentPage[0].url;
        if (content == 'Next &raquo;' && url.substring(60, 57) == lastPage || content == lastPage) {
            document.querySelector('#btn').className = 'btnOff';
        } else {
            document.querySelector('#btn').className = 'passively';
        }
        dispatch(getFirstData(url));
    }

    return (
        <div >
            {pagination}
        </div>
    )
}

export default Pagination;