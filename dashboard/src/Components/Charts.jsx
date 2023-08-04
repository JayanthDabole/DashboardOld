import { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { UserData } from "./Data";

const Charts = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "white",
            borderWidth: 0.5,
          },
        ],
      });    
      return (
        <div className="allCharts">
            <div style={{ width: 500 }}>
            <BarChart chartData={userData} />
             </div>
          <div style={{ width: 500}}>
            <LineChart chartData={userData} />
          </div>
          <div style={{ width: 350 }}>
            <PieChart chartData={userData} />
          </div>
        </div>
      );
    }

export default Charts