import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import footerBg from '../images/footer.png';
import house from '../images/house.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart3} from '../components/chart-3';
import {Chart5} from '../components/chart-5';
import {Chart6} from '../components/chart-6';
import {Chart7} from '../components/chart-7';
import {Chart8} from '../components/chart-8';

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
                <section className=" section3">
                    <h2>小区年入住人数</h2>
                    <Chart3/>
                </section>
                <section className=" section4">
                    <div className="bordered house" style={{backgroundImage: `url(${house})`}}></div>
                </section>
                <section className=" section5">
                    <h2>开门方式</h2>
                    <Chart5/>
                </section>
                <section className=" section6">
                    <h2>小区车位使用率</h2>
                    <Chart6/>
                </section>
                <section className=" section7">
                    <h2>小区用电</h2>
                    <Chart7/>
                </section>
                <section className=" section8">
                    <h2>小区日志</h2>
                    <Chart8/>
                </section>
            </main>
            <footer style={{backgroundImage: `url(${footerBg})`}}></footer>
        </div>
    );
};
