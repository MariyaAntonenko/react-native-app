import React from 'react';
import {SafeAreaView} from '../../../common/simpleComponents/SafeAreaView';
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryTooltip,
  VictoryAxis,
  createContainer,
} from 'victory-native';

const chartData = {
  planned: [
    {x: '2', y: 30, label: '30 hours'},
    {x: '3', y: 50, label: '50 hours'},
    {x: '4', y: 80, label: '80 hours'},
    {x: '5', y: 75, label: '75 hours'},
    {x: '6', y: 100, label: '100 hours'},
  ],
  actual: [
    {x: '1', y: 50, label: '50 hours'},
    {x: '2', y: 80, label: '80 hours'},
    {x: '3', y: 110, label: '110 hours'},
    {x: '4', y: 120, label: '120 hours'},
    {x: '5', y: 140, label: '140 hours'},
    {x: '6', y: 130, label: '130 hours'},
  ],
};

const VictoryZoomVoronoiContainer = createContainer('zoom', 'voronoi');

export const ChartScreen = () => {
  // @ts-ignore
  return (
    <SafeAreaView flex={1} mt={'50%'}>
      <VictoryChart
        horizontal
        containerComponent={
          <VictoryZoomVoronoiContainer
            allowZoom={false}
            allowPan
            zoomDomain={{y: [0, 90]}}
          />
        }>
        <VictoryAxis label={'Weeks'} />
        <VictoryAxis dependentAxis label={'Hours'} />

        <VictoryGroup
          offset={30}
          labelComponent={
            <VictoryTooltip
              constrainToVisibleArea
              orientation={'left'}
              renderInPortal={false}
            />
          }>
          <VictoryBar barWidth={25} data={chartData.actual} />
          <VictoryBar
            barWidth={25}
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
