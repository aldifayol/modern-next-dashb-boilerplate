"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    date: "Jan 1",
    visitors: 1420,
    newUsers: 890,
  },
  {
    date: "Jan 5",
    visitors: 1620,
    newUsers: 950,
  },
  {
    date: "Jan 10",
    visitors: 1800,
    newUsers: 1100,
  },
  {
    date: "Jan 15",
    visitors: 2100,
    newUsers: 1300,
  },
  {
    date: "Jan 20",
    visitors: 1950,
    newUsers: 1150,
  },
  {
    date: "Jan 25",
    visitors: 2300,
    newUsers: 1450,
  },
  {
    date: "Jan 30",
    visitors: 2500,
    newUsers: 1600,
  },
]

export function AnalyticsChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Line type="monotone" dataKey="visitors" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="newUsers" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}
