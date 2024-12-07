'use client';

import DiagramModal from '@/components/diagram/DiagramModal';
import { Button } from '@/components/ui/button';
import { IWritingTestInfo } from '@/type/chart';
import { useState } from 'react';

// const data: IWritingTestInfo = {
//   title: "Comparative Energy Consumption and Production in 2025",
//   instruction:
//     "Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
//   type: "Mixed",
//   diagrams: [
//     {
//       chartType: "Bar",
//       title: "Energy Consumption by Sector in 2025",
//       xAxis: "Sector",
//       yAxis: "Energy Consumption (Terajoules)",
//       dataKey: ["Commercial", "Industrial", "Residential", "Transport"],
//       data: [
//         {
//           name: "Q1",
//           Commercial: 500,
//           Industrial: 1500,
//           Residential: 300,
//           Transport: 700,
//         },
//         {
//           name: "Q2",
//           Commercial: 600,
//           Industrial: 1600,
//           Residential: 320,
//           Transport: 710,
//         },
//         {
//           name: "Q3",
//           Commercial: 620,
//           Industrial: 1620,
//           Residential: 330,
//           Transport: 720,
//         },
//         {
//           name: "Q4",
//           Commercial: 640,
//           Industrial: 1650,
//           Residential: 340,
//           Transport: 730,
//         },
//       ],
//     },
//     {
//       chartType: "Line",
//       title: "Energy Production Over 2025",
//       xAxis: "Quarter",
//       yAxis: "Energy Production (Terajoules)",
//       dataKey: ["Solar", "Wind", "Hydro", "Nuclear"],
//       data: [
//         { name: "Q1", Solar: 800, Wind: 1200, Hydro: 900, Nuclear: 1300 },
//         { name: "Q2", Solar: 850, Wind: 1250, Hydro: 950, Nuclear: 1350 },
//         { name: "Q3", Solar: 870, Wind: 1300, Hydro: 970, Nuclear: 1400 },
//         { name: "Q4", Solar: 900, Wind: 1350, Hydro: 1000, Nuclear: 1450 },
//       ],
//     },
//   ],
// };

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<IWritingTestInfo | null>(null);
    const getWritingTestData = async () => {
        setIsLoading(true);
        const response = await fetch('http://localhost:8000/');
        const data = await response.json();
        console.log(data);
        setData(data);
        setIsLoading(false);
    };
    return (
        <main>
            <div className="flex flex-row items-center justify-center">
                <div className="p-5">
                    {!isLoading && data ? <DiagramModal {...data} /> : 'Loading...'}
                </div>
                <Button variant="outline" onClick={getWritingTestData}>
                    Button
                </Button>
            </div>
        </main>
    );
}
