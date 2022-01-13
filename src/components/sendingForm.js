import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getFirstData } from '../redux/actions';


const SendingForm = () => {
    let items = useSelector(state => state.comments.items);
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState('');
    const [commentInput, setCommentInput] = useState('');

    const sendComment = () => {
        const url = 'https://jordan.ashton.fashion/api/goods/30/comments';
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;
        const data = { name: name, text: comment };
        try {
            fetch(url, {
                method: 'POST', // или 'PUT'
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => alert('Успех: отправлено успешно'));
            ;
        } catch (error) {
            alert('Ошибка: не заполнены все поля', error);
        }
        setNameInput('');
        setCommentInput('');
        if (items.last_page === items.current_page) {
            dispatch(getFirstData(items.last_page_url));
        }
    }

    const addName = (event) => {
        setNameInput(event.target.value);
    };
    const addComment = (event) => {
        setCommentInput(event.target.value);
    };

    return (
        <div className="sendForm">
            <h1 align="left" >comments</h1>
            <textarea onChange={addName}
                value={nameInput}
                id="name"
                type="text"
                placeholder="Enter your name"
                required="required"
            />
            <br />
            <textarea
                onChange={addComment}
                value={commentInput}
                id="comment"
                type="text"
                placeholder="Enter your comment"
                required="required"
            />
            <button id="btnSend" onClick={sendComment} > POST </button>
        </div>
    )
}


export default SendingForm;