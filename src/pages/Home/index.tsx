import React from 'react';
import { Link } from 'ice';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Ice and React Learning Project of Yitian</h1>
      <label>GitHub: https://github.com/Yitian-Zhang/my-ice-start</label>

      <table>
        <tr>
          <td>React Get Start Page</td>
          <td><Link to="/react-get-start">React Get-Start</Link></td>
        </tr>
        <tr>
          <td>Seller Page</td>
          <td><Link to="/seller">Seller Link</Link></td>
        </tr>
        <tr>
          <td>Tic-Tac-Toe Game</td>
          <td><Link to="/tic-tac-toe">Tic-Tac-Toe</Link></td>
        </tr>
        <tr>
          <td>About Page</td>
          <td><Link to="/about">About</Link></td>
        </tr>
      </table>
    </div>
  );
};

export default Home;
