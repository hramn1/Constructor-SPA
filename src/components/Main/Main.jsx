import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {RenderWork} from "../Constructor/renderWork";
import {treeDom} from "../Templates/mock";
import {Constructor} from "../Constructor/Constructor";
export const context = React.createContext('gg');

export function Main() {
  const navigate = useNavigate();
  function fn (){

    navigate('/constructor', { replace: true });
  }
  return (
    <>
      <h1>Главная</h1>
      <Link to="constructor">Констрктор</Link>
      <main>
        <section>
          <ul>
            <li
            onClick={fn}
            >Шаблон один</li>
          </ul>
        </section>
      </main>
    </>
  );
}
