import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart5 = () => {
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
            legend: {
                top: px(0.7),
                right: 'right',
                itemWidth: px(0.01),
                itemHeight: px(0.15),
                textStyle: {
                    color: '#fff',
                    fontSize: px(0.2)
                }
            },
            tooltip: {
                trigger: 'axis',
                showContent: false
            },

            dataset: {
                source: [
                    ['product', '周一', '周二', '周三', '周四', '周五', '周六','周日'],
                    ['APP', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1,30],
                    ['刷脸', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7,60],
                    ['刷卡', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5,80],
                ]
            },
            xAxis: {
                type: 'category',
                axisTick: {show: false},

                axisLabel: {
                    fontSize: px(0.25)
                },
            },
            yAxis: {
                gridIndex: 0 ,
                splitLine:{show:false},
                axisTick: {show: false},
                axisLabel: {
                    fontSize: px(0.25)
                },
            },

            series: [
                {
                    type: 'line',
                    smooth: true,
                    symbol:'none',
                    seriesLayoutBy: 'row',
                    lineStyle:{
                        width:px(0.02)
                    },
                    emphasis: { focus: 'series' }
                },
                {
                    type: 'line',
                    smooth: true,
                    symbol:'none',
                    seriesLayoutBy: 'row',
                    lineStyle:{
                        width:px(0.02)
                    },
                    emphasis: { focus: 'series' }
                },

                {
                    type: 'line',
                    smooth: true,
                    symbol:'none',
                    seriesLayoutBy: 'row',
                    lineStyle:{
                        width:px(0.02)
                    },
                    emphasis: { focus: 'series' }
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