import React from 'react';
import { Page1Detail } from './Page1Detail';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const navigate = useNavigate();

  const onClickDetailA = () => navigate('/detail-page');

  return (
    <div>
      <h1>Page1です</h1>

      <Link to="detail-page/100">URL Prameter</Link>
      <br />
      <Link to="detail-page/100?name=hogehoge">Query Prameter</Link>
      <br />
      <Link to={{ pathname: 'detail-page', state: arr }}></Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>

      <Routes>
        <Route index element={<div />} />
        <Route path="detail-page/:id" element={<Page1Detail />} />
      </Routes>
    </div>
  );
};
