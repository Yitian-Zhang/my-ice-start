import React from 'react';
import { Link } from 'ice';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Ice and React Learning Project of Yitian</h1>
      <label>GitHub: https://github.com/Yitian-Zhang/my-ice-start</label>

      <table>
        <tr>
          <td>React Get-Start (React Tutorial)</td>
          <td><Link to="/react-get-start">React Get-Start</Link></td>
        </tr>
        <tr>
          <td>Seller Page (Default Page)</td>
          <td><Link to="/seller">Seller Link</Link></td>
        </tr>
        <tr>
          <td>Tic-Tac-Toe Game (React in Practice)</td>
          <td><Link to="/tic-tac-toe">Tic-Tac-Toe</Link></td>
        </tr>
        <tr>
          <td>Clock App (Component props, state & Lifecycle)</td>
          <td><Link to="/clock-app">Clock From Docs</Link></td>
        </tr>
        <tr>
          <td>Common App (Conditional Component & List & Form & State Promote)</td>
          <td><Link to="/common-app">Common Use from Docs</Link></td>
        </tr>
        <tr>
          <td>React Practice (Product Project from React Philosophy Docs)</td>
          <td><Link to="/react-practice">Product Project in Docs</Link></td>
        </tr>
        <tr>
          <td>About Page (Project Version)</td>
          <td><Link to="/about">About</Link></td>
        </tr>

      </table>
    </div>
  );
};

export default Home;
