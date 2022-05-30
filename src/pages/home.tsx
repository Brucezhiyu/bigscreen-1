import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import * as echarts from 'echarts';

const px = (n) => n / 32.68 * (window as any).pageWidth;
export const Home = () => {
    const divRef = useRef(null);
    useEffect(() => {
        console.log(divRef.current);
        var itemStyle = {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        };
        var dataJR = [
            [0, 4000],
            [1, 2000],
            [6.03, 5000],
            [2.0, 5000],
            [3.0, 2330],
            [4.08, 3220],
            [5,4000],
        ];
        const dataWC = [
            [0, 1000],
            [2, 4000],
            [1, 2000],

            [3, 2000],
            [5, 5000],
            [6, 1000],

        ];
        const schema = [
            {name: 'date', index: 0, text: '时间'},
            {name: 'number', index: 1, text: '人数'},
        ];
        const myChart = echarts.init(divRef.current);
        myChart.setOption({
            color: [
                '#026CFC', '#1EC919'
            ],
            textStyle: {
                fontSize: px(0.25),
                color: 'gray'
            },
            legend: {
                top: px(0.2),
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
                data: ['0', '1000', '2000', '3000', '4000', '5000'],
                max:5000,
                splitLine:{show:false},
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                    fontSize: px(0.25)
                },
            },
            grid: {
                x: px(1),
                y: px(0.7),
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
                    data: dataJR
                },
                {
                    name: '外出',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: dataWC
                },
            ]
        });
    }, []);
    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerBg})`}}></header>
            <main>
                <section className=" section1">
                    <h2>人员进出分析</h2>
                    <div className="bordered 人员进出分析">
                        <div ref={divRef} className="chart"></div>
                    </div>
                </section>
                <section className="bordered section2"></section>
                <section className="bordered section3"></section>
                <section className="bordered section4"></section>
                <section className="bordered section5"></section>
            </main>
        </div>
    );
};
