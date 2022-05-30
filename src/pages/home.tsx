import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import * as echarts from 'echarts';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';

export const Home = () => {

    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerBg})`}}></header>
            <main>
                <section className=" section1">
                    <h2>人员进出分析</h2>
                    <Chart1/>
                </section>
                <section className=" section2">
                    <h2>小区客流量占比</h2>
                    <Chart2/>
                </section>
                <section className="bordered section3"></section>
                <section className="bordered section4"></section>
                <section className="bordered section5"></section>
            </main>
        </div>
    );
};
