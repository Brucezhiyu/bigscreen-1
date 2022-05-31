import React from 'react';

export const Chart8 = () => {
    return (
        <div className="bordered 人员进出分析 日志">
            <table>
                <thead>
                <tr>
                    <th>事件</th><th>地点</th><th>时间</th><th>负责人</th><th>事件结果</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>绿化损坏</td> <td>13栋</td><td>2022.01.28</td><td>物业小刘</td><td className="false">未解决</td>
                </tr>
                <tr>
                    <td>电梯维修</td><td>5栋</td><td>2022.01.23</td><td>物业小王</td><td className="false">未解决</td>
                </tr>
                <tr>
                    <td>消防栓</td><td>公共区</td><td>2022.01.23</td><td>物业小王</td><td className="false">未解决</td>
                </tr>
                <tr>
                    <td>绿化损坏</td><td>7栋</td><td>2022.01.22</td><td>物业小罗</td><td className="true">已解决</td>
                </tr>
                <tr>
                    <td>电梯维修</td><td>5栋</td><td>2022.01.22</td><td>物业小刘</td><td  className="true">已解决</td>
                </tr>
                <tr>
                    <td>LED屏幕</td><td>小区门口</td><td>2022.01.21</td><td>物业小罗</td><td  className="true">已解决</td>
                </tr>

                </tbody>
            </table>
        </div>
    );
};