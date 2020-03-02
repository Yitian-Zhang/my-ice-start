import React from 'react';
// import { Link, withRouter } from 'ice';

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
        <tr>
          <td>v2.0</td>
          <td>根据该Blog（）完成React-Get-Start学习内容</td>
        </tr>
        <tr>
          <td>v3.0</td>
          <td>根据React Start（官网文档）完成Tic-Tac-Toe游戏</td>
        </tr>
        <tr>
          <td>v3.1</td>
          <td>在之前Tic-Tac-Toe游戏的基础上增加History历史回溯功能</td>
        </tr>
        <tr>
          <td>v4.0</td>
          <td>根据React文档内容，增加React核心功能使用，包括：组件及props，state及生命周期，列表，Form，state状态提升内容</td>
        </tr>
        <tr>
          <td>v4.1</td>
          <td>根据React文档内容（React哲学），实现该文档中提供的实践实例</td>
        </tr>
      </table>
    </div>
  );
};

export default About;
