import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart7 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const data = [
        {name: '1', 1: 9, 2: 3,3:10},
        {name: '2', 1: 9, 2: 3,3:10},
        {name: '3', 1: 9, 2: 3,3:10},
        {name: '4', 1: 9, 2: 3,3:10},
        {name: '5', 1: 9, 2: 3,3:10},
        {name: '6', 1: 9, 2: 3,3:10},
        {name: '7', 1: 9, 2: 3,3:10},

    ];
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name: '1', 1: Math.random() * 100, 2: Math.random() * 100,3:Math.random() * 100},
                {name: '2', 1: Math.random() * 100, 2: Math.random() * 100,3:Math.random() * 100},
                {name: '3', 1: Math.random() * 100, 2: Math.random() * 100,3:Math.random() * 100},
                {name: '4', 1: Math.random() * 100, 2: Math.random() * 100,3:Math.random() * 100},
                {name: '5', 1: Math.random() * 100, 2: Math.random() * 100,3:Math.random() * 100},
                {name: '6', 1: Math.random() * 100, 2: Math.random() * 100,3:Math.random() * 100},
                {name: '7', 1: Math.random() * 100, 2: Math.random() * 100,3:Math.random() * 100},

            ];
            x(newData);
        }, 1000);
    }, []);
    const x = (data) => {
        myChart.current.setOption({
            grid: {
                x: px(0.9),
                y: px(1),
                x2: px(0.2),
                y2: px(0.5)
            },

            legend: {
                data: ['上午', '中午', '晚上'],
                right: 'top',
                top: px(0.25),
                itemWidth: px(0.15),
                itemHeight: px(0.15),
                textStyle: {
                    color: '#fff',
                    fontSize: px(0.2)
                }
            },

            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    // prettier-ignore
                    data: ['1', '2', '3', '4', '5', '6', '7'],
                    splitLine:{show:false},
                    axisTick: {show: false},
                    axisLine: {show: false},
                    axisLabel: {
                        fontSize: px(0.25)
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    data: data.map(i => i.name),
                    splitLine:{show:false},
                    axisTick: {show: false},
                    axisLine: {show: false},
                    axisLabel: {
                        fontSize: px(0.25)
                    },
                }
            ],
            series: [
                {
                    name: '上午',
                    type: 'bar',
                    barWidth:px(0.1),
                    data:data.map(i => i[1]),
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color:'#E9B930'
                        }
                    }

                },
                {
                    name: '中午',
                    type: 'bar',
                    data: data.map(i => i[2]),
                    barWidth:px(0.1),
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color:'#66DDF1'
                        }
                    }

                },
                {
                    name: '晚上',
                    type: 'bar',
                    data:data.map(i => i[3]),
                    barWidth:px(0.1),
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color:'#4892F1'
                        }
                    }


                }
            ]
        });

    };
    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        x(data);
    }, []);

    return (
        <div className="bordered 人员进出分析 after">
            <div ref={divRef} className="chart"/>
        </div>
    );
};