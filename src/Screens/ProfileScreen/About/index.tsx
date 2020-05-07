import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AboutStyle,Links } from './style';

export default function About() {
  return (
      <Fragment>
          <AboutStyle>
              <div className="image">
                  <img src='https://bit.ly/2VWZVld' alt='' />
              </div>
              <div className='info'>
                  <h1>Adejo David Design's</h1>
                  <h2>Tailor</h2>
                  <p>fb twt inst</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Enim dolore eos veniam. Minima nisi animi ab unde
                  minus officia maxime, quod suscipit voluptates! Possimus
                  pariatur ipsam incidunt. Quia, suscipit eos laudantium vero hic
                  dolorum iure aliquam error facilis non maiores soluta cupiditate
                    repellat ullam, consectetur quasi dicta iste voluptatibus harum!</p>
              </div>
          </AboutStyle>
          <Links>
              <Link to='/seller/product'>Products</Link>
              <Link to='/seller/reviews'>Review</Link>
              <Link to='/seller/location'>location</Link>
          </Links>
    </Fragment>
  );
}
