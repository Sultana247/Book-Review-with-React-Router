import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getLocalStorageData } from '../Utility/handleLocalstorage';

import { RechartsDevtools } from '@recharts/devtools';
import CustomBarChart from './CustomBarChart';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid} from 'recharts';
const PagetoRead = () => {
    const books = useLoaderData();
    const [drawchart, setDrawchart] = useState([]);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (BarProps) => {
    const { fill, x, y, width, height } = BarProps;

    return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
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
               
                  <div className='w-full flex justify-center items-center p-5'>
                      <BarChart
                        style={{ width: '100%', maxWidth: '500px', maxHeight: '500px', aspectRatio: 1.618 }}
                        responsive
                        data={drawchart}
                    >
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis
                            dataKey="bookName"
                            interval={0}
                            tick={{ fontSize: 8 }}
                            angle={-7}
                            textAnchor="end"
                        />
                        <YAxis className='text-[10px]' width="auto" />
                        <Bar dataKey="totalPages" fill="#8884d8" shape={TriangleBar} label={{ position: 'top' }}>
                            {drawchart.map((_entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                        <RechartsDevtools />
                    </BarChart>
                  </div>
               

            </div>
        </div>
    );
};

export default PagetoRead;