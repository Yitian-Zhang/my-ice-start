import React from 'react';
import { Link, withRouter } from 'ice';

const About = () => {
  return (
    <div>
      <h1>About This Project</h1>
      <label>说明：</label>
      <p>该项目基于Ice创建，并在原始项目基础上整合了React Get-Start项目内容（ReactStart页面）以及React官方文档中示例内容。
        以此构建学习Ice和React的环境基础。</p>
      <label>项目版本：</label>
      <table>
        <tr>
          <td>v1.0</td>
          <td>项目环境初始化，可以根据该环境进行自己的学习</td>
        </tr>
      </table>
    </div>
  );
};

export default About;
