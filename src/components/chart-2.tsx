import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';

export const Chart2 = () => {
    const divRef = useRef(null);
    useEffect(() => {

        const myChart = echarts.init(divRef.current);
        myChart.setOption({
            textStyle: {
                fontSize: px(0.25),
                color: 'gray'
            },
            legend: {
                right: 'right',
                textStyle: {
                    color: '#fff',
                    fontSize: px(0.2)
                }
            },

            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [px(0.001), px(1.8)],
                    center: ['35%', '50%'],
                    roseType: 'area',
                    labelLine:{
                        length:px(0)
                    },
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        {value: 40, name: 'rose 1'},
                        {value: 38, name: 'rose 2'},
                        {value: 32, name: 'rose 3'},
                        {value: 30, name: 'rose 4'},
                        {value: 28, name: 'rose 5'},
                        {value: 26, name: 'rose 6'},
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