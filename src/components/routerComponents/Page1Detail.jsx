import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Page1Detail = () => {
    const { id } = useParams();
    const { search } = useLocation();
    const { state } = useLocation();
    const query = new URLSearchParams(search);
    console.log(state);

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h1>Page1Detailです</h1>

            <p>URLパラメータは{id}です</p>
            <p>クエリパラメータは{query.get('name')}です</p>

            <button onClick={goBack}>戻る</button>
        </div>
    );
};
