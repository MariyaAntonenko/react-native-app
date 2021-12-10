import React from 'react';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
} from 'victory-native';

const chartData = {
  planned: [null, {x: 'week 2', y: 20}],
  actual: [
    {x: 'week 2', y: 50},
    {x: 'week 2', y: 80},
  ],
};

export const ChartScreen = () => {
  return (
    <SafeAreaView flex={1}>
      <VictoryChart>
        <VictoryAxis
          label={'Week'}
          style={{
            axisLabel: {
              padding: 30,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          label={'Hours'}
          style={{
            axisLabel: {
              padding: 30,
            },
          }}
        />
        <VictoryGroup offset={20}>
          <VictoryBar data={chartData.actual} />
          <VictoryBar
            data={chartData.planned}
            style={{
              data: {
                fill: 'orange',
              },
            }}
          />
        </VictoryGroup>
        <VictoryLegend
          x={80}
          y={10}
          orientation={'horizontal'}
          data={[
            {
              name: 'Actual',
            },
            {
              name: 'Planned',
              symbol: {
                fill: 'orange',
              },
            },
          ]}
        />
      </VictoryChart>
    </SafeAreaView>
  );
};
