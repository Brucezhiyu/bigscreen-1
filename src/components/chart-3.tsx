import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';

export const Chart3 = () => {
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
            textStyle: {
                fontSize: px(0.25),
                color: 'gray'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
                splitLine: {show: false},
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                    fontSize: px(0.25)
                },
            },
            yAxis: {
                type: 'value',
                data: [0, 10, 20, 30, 40, 50],
                splitLine: {show: false},
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                    fontSize: px(0.25)
                },
            },
            series: [{
                name: '故意伤人',
                type: 'line',
                smooth: true,
                data: [
                    [0,50],
                    [1, 57],
                    [2, 23],
                    [3, 30],
                    [4, 50],
                    [5, 30],
                    [6, 24],
                    [7,20]
                ],

                symbol: 'circle',
                symbolSize: px(0.05),
                lineStyle: {width: px(0.05)},
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: '#414a9f'
                    }, {
                        offset: 0,
                        color: '#1b1d52'
                    }]),
                }
            }]
        });
    }, []);

    return (
        <div className="bordered 人员进出分析">
            <div ref={divRef} className="chart"/>
        </div>
    );
};