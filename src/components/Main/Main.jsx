import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {treeDom} from '../Templates/template-one';

// eslint-disable-next-line react/prop-types
export function Main() {
  const navigate = useNavigate();
  function handleClickTemplate(context) {
    navigate(`/constructor`, {state: {context}});
  }
  return (
    <>
      <h1>Главная</h1>
      <Link to="constructor">Констрктор</Link>
      <main>
        <section>
          <ul>
            <li
              onClick={()=> handleClickTemplate(treeDom)}
            >Шаблон один</li>
          </ul>
        </section>
      </main>
    </>
  );
}
