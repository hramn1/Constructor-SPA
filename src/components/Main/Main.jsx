import React from 'react';
import { useNavigate } from 'react-router-dom';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { treeDom } from '../Templates/mock';

// eslint-disable-next-line react/prop-types
export function Main() {
  const navigate = useNavigate()
  function fn (context){
    navigate(`/constructor`,  { state: {context} });
  }
  return (
    <>
      <h1>Главная</h1>
      <Link to="constructor">Констрктор</Link>
      <main>
        <section>
          <ul>
            <li
            onClick={()=>fn(treeDom)}
            >Шаблон один</li>
          </ul>
        </section>
      </main>
    </>
  );
}
