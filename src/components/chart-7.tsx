import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart7 = () => {
    const divRef = useRef(null);
    useEffect(() => {

        const myChart = echarts.init(divRef.current);
        myChart.setOption({
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
                    data: [
                        120, 149, 70, 132, 125, 76, 135.6
                    ],
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
                    data: [
                        126, 159, 90, 164, 187, 77, 175.6],
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
                    data: [
                        90, 59, 190, 264, 287, 140, 90],
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
    }, []);

    return (
        <div className="bordered 人员进出分析">
            <div ref={divRef} className="chart"/>
        </div>
    );
};