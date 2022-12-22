"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var g2_1 = require("@antv/g2");
var chart = new g2_1.Chart({
    container: 'container',
    paddingLeft: 60,
    height: 800,
    width: 800,
    inset: 6,
});
var names = {
    tooltip: 'min',
    tooltip1: 'q1',
    tooltip2: 'q2',
    tooltip3: 'q3',
    tooltip4: 'max',
};
chart
    .boxplot()
    .data({
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/morley.json',
})
    .encode('x', 'Expt')
    .encode('y', 'Speed');
chart.interaction({
    type: 'tooltip',
    item: function (_a) {
        var channel = _a.channel, value = _a.value;
        return ({
            name: names[channel],
            color: channel === 'tooltip4' ? 'red' : undefined,
            value: "".concat(value / 1000, "k"),
        });
    },
});
chart.render();
