import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import footerBg from '../images/footer.png';
import house from '../images/house.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart3} from '../components/chart-3';

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
                <section className="bordered section5"></section>
            </main>
                <footer style={{backgroundImage: `url(${footerBg})`}}></footer>
        </div>
    );
};
