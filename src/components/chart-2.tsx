import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';

export const Chart2 = () => {
    const divRef = useRef(null);
    useEffect(() => {

        const myChart = echarts.init(divRef.current);
        myChart.setOption({
            color: [
                '#3B96FF', '#1EC919', '#BF8FF5', '#54E6F3', '#FD839C', '#F7BB03'
            ],
            textStyle: {
                fontSize: px(0.25),
                color: 'gray'
            },
            label: {
                formatter: ' {d}%'
            },
            legend: {
                top: px(0.7),
                right: 'right',
                itemWidth: px(0.15),
                itemHeight: px(0.15),
                textStyle: {
                    color: '#fff',
                    fontSize: px(0.2)
                }
            },

            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    top: px(0.4),
                    radius: [px(0.4), px(1.8)],
                    center: ['35%', '50%'],
                    label: {
                        color: 'gray'
                    },
                    roseType: 'radius',
                    labelLine: {
                        length: px(0)
                    },
                    itemStyle: {
                        borderRadius: 3
                    },
                    data: [
                        {value: 30, name: '小区租户'},
                        {value: 25, name: '设施维修'},
                        {value: 8, name: '外卖快递'},
                        {value: 12, name: '小区住户'},
                        {value: 10, name: '环卫人员'},
                        {value: 15, name: '小区访客'},
                    ]
                }
            ]
        });
    }, []);
    return (
        <div className="bordered 人员进出分析">
            <div ref={divRef} className="chart"></div>
        </div>
    );

};