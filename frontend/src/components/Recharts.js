import axios from "axios";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";


const Recharts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const chartPoll = async () => {
            const response = await axios.get('http://localhost:5001/dateTime');
            setData(response.data);
            console.log(response.data);
        }
        chartPoll()
    },[])


    return (
        <div>
            <BarChart width={600} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="interval_range" />
                <YAxis />
                <Tooltip />
                {/* <Tooltip formatter={(value, name) => [value, `hour: ${data[name].LinkType}`]} /> */}
                <Legend />
                <Bar dataKey="link1" fill="#8884d8" />
                <Bar dataKey="link2" fill="#82ca9d" />
            </BarChart>
            {/* <PieChart width={600} height={400}>
                <Tooltip />
                <Legend />
                <Pie
                    data={data}
                    cx={300}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="count"
                    nameKey="LinkType"
                    label>
                    <Cell name="Link1" fill="#fecdba6"/>
                    <Cell name="Link2" fill="#d3d23f"/>
                </Pie>
                
            </PieChart> */}
            <PieChart width={600} height={400}>
                <Tooltip />
                <Legend />

                <Pie
                    data={data}
                    dataKey="interval_range"
                    nameKey="link1"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label>
                    <Cell name="Link1" fill="#a44c9e" />
                    <Cell name="Link2" fill="#b3d23f" />
                </Pie>
            </PieChart>

        </div>
    )
}

export default Recharts;