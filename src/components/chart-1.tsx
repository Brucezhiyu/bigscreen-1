import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px'
export const Chart1 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const data = [
        {name: '00:00', 2011: 2, 2012: 3},
        {name: '02:00', 2011: 2, 2012: 3},
        {name: '04:00', 2011: 2, 2012: 3},
        {name: '06:00', 2011: 2, 2012: 3},
        {name: '08:00', 2011: 20, 2012: 3},
        {name: '10:00', 2011: 2, 2012: 3},
        {name: '12:00', 2011: 20, 2012: 3},
        {name: '14:00', 2011: 2, 2012: 3},
    ];
    useEffect(() => {

        setInterval(() => {

            const newData = [
                {name: '00:00', 2011: Math.random() * 1000, 2012: Math.random() * 1000},
                {name: '02:00', 2011: Math.random() * 1000, 2012: Math.random() * 1000},
                {name: '04:00', 2011: Math.random() * 1000, 2012: Math.random() * 1000},
                {name: '06:00', 2011: Math.random() * 1000, 2012: Math.random() * 1000},
                {name: '08:00', 2011: Math.random() * 1000, 2012: Math.random() * 1000},
                {name: '10:00', 2011: Math.random() * 1000, 2012: Math.random() * 1000},
                {name: '12:00', 2011: Math.random() * 1000, 2012: Math.random() * 1000},
                {name: '14:00', 2011: Math.random() * 1000, 2012: Math.random() * 1000},
            ];
            x(newData);
        }, 1000);
    }, []);
    const x = (data) => {
        const itemStyle = {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        };
        myChart.current.setOption({
            color: [
                '#026CFC', '#1EC919'
            ],
            textStyle: {
                fontSize: px(0.25),
                color: 'gray'
            },
            legend: {
                right:'top',
                top: px(0.25),
                data: ['进入', '外出'],
                itemWidth: px(0.15),
                textStyle: {
                    color: '#fff',
                    fontSize: px(0.2)
                }
            },
            xAxis: {
                data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00'],
                splitLine:{show:false},
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                    fontSize: px(0.25)
                },
            },
            yAxis: {
                type:'value',
                data: data.map(i => i.name),
                max:2000,
                splitLine:{show:false},
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                    fontSize: px(0.25)
                },
            },
            grid: {
                x: px(1),
                y: px(1),
                x2: px(0),
                y2: px(0.6)
            },
            visualMap:[
                {
                    show:false,
                    inRange: {
                        symbolSize: [13, 15],
                    },
                }

            ],

            series: [
                {
                    name: '进入',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: data.map(i => i[2011])
                },
                {
                    name: '外出',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: data.map(i => i[2012])
                },
            ]
        });
    };
    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        x(data);
    }, []);
    return (
    <div className="bordered 人员进出分析">
            <div ref={divRef} className="chart">

            </div>
        </div>
    )

};