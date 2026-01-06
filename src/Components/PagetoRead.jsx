import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getLocalStorageData } from '../Utility/handleLocalstorage';

import { RechartsDevtools } from '@recharts/devtools';
import CustomBarChart from './CustomBarChart';
import { BarChart, Bar, Cell, XAxis, YAxis} from 'recharts';
const PagetoRead = () => {
    const books = useLoaderData();
    const [drawchart, setDrawchart] = useState([]);

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const SvgTriangle = ({ width = 100, height = 100, color = "#007bff" }) => {
  // Define the three points of the triangle (x1,y1 x2,y2 x3,y3)
  // Example for an upward-pointing isosceles triangle:
  const points = `${width / 2},0 0,${height} ${width},${height}`;
    return <svg width={width} height={height}>
        <polygon points={points} fill={color} />
    </svg>;
  };

    useEffect(()=>{
        const getbooksid = getLocalStorageData('read-list');
        console.log(getbooksid);
        const listedbooks = [];
        for( const Id of getbooksid){

            const getlistedbooks = books.find(book => book.bookId === Id);
            
            if(getlistedbooks){
                listedbooks.push(getlistedbooks);
            }
        }
        setDrawchart(listedbooks);
    },[books])
    return (
        <div>
            {/* graph */}
            <div className="flex p-5 md:p-8 justify-center items-center bg-[#1313130D]  mt-9.5 mb-9 rounded-2xl playfair-display-font ">
                    {/* customize bar charts */}
               
                    <BarChart
                        style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
                        responsive
                        data={drawchart}
                    >
                        <XAxis dataKey="bookName" />
                        <YAxis width="auto" />
                        <Bar dataKey="totalPages" fill="#8884d8" shape={} label={{ position: 'top' }}>
                            {drawchart.map((_entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                        <RechartsDevtools />
                    </BarChart>
               

            </div>
        </div>
    );
};

export default PagetoRead;