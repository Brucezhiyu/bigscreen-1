import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart6 = () => {
    const divRef = useRef(null);
    useEffect(() => {

        const myChart = echarts.init(divRef.current);
        myChart.setOption({
            grid: {
                x: px(0.7),
                y: px(1),
                x2: px(0.5),
                y2: px(0.5)
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['流入量', '流出量'],
                right: 'top',
                top: px(0.25),
                itemWidth: px(0.15),
                itemHeight: px(0.15),
                textStyle: {
                    color: '#fff',
                    fontSize: px(0.2)
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#323266']
                    }
                },
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                    fontSize: px(0.25)
                },
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#323266']
                    }
                },
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                    fontSize: px(0.25)
                },
            },
            series: [
                {
                    name: '流入量',
                    type: 'line',

                    data: [13, 18, 11, 25, 20, 30, 21, 41]
                },
                {
                    name: '流出量',
                    type: 'line',
                    color: '#5CA8BF',
                    data: [48, 35, 45, 31, 30, 22, 35, 8]
                },
            ]
        });
    }, []);

    return (
        <div className="bordered 人员进出分析 after">
            <div ref={divRef} className="chart"/>
        </div>
    );
};