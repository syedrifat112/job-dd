import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const Statistics = () => {
    
      const data01 = [
        { x: 1, y: 56 },
        { x: 2, y: 60 },
        { x: 3, y: 60 },
        { x: 4, y: 60 },
        { x: 5, y: 58 },
        { x: 6, y: 60 },
        { x: 7, y: 59 },
        { x: 8, y: 60 },
      ];
      
      
    return (
        <div className='mt-12'>
          <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="Assignment" unit="" />
          <YAxis type="number" dataKey="y" name="Results" unit="Marks" />
          <ZAxis type="number" range={[10]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Assignment Mark" data={data01} fill="#8884d8" line shape="cross" />
        </ScatterChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Statistics;