import React from 'react';
import { Link } from 'ice';
import StartApp from '@/components/StartApp';

/**
 * react-tutorial项目内容，在该项目中使用该页面显示
 *
 * @author yitian
 */
const ReactStart = () => {
  return (
    <div>
      <h1>React Get Start with Blog</h1>
      <p>https://www.taniarascia.com/getting-started-with-react/</p>

      {/*该项目的单页面*/}
      <StartApp />
    </div>
  );
};

export default ReactStart;
