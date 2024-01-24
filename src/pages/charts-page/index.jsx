import BarChart from "../../components/charts/barChart";
import LineChart from "../../components/charts/lineChart";
import PieChart from "../../components/charts/pieChart";
import { chartDataFunc } from "../../utils/generateChartData";
import { UserData } from "./data";
import styles from './styles.module.scss'

/*
Note:: Rn im having a static data so i have 
created the common dynamic function and using it,
if data would be coming from the api i would rather use  state
or would implement different logic 
*/

const  Charts = () => {
  return (
    <>
      <div className={styles.barChart}>
        <BarChart
          data={chartDataFunc(UserData, "year", "userGain", "Users Gained")}
        />
      </div>
      <div className={styles.barChart}>
        <LineChart
          data={chartDataFunc(UserData, "year", "userGain", "Users Gained")}
        />
      </div>
      <div className={styles.barChart}>
        <PieChart
          data={chartDataFunc(UserData, "year", "userGain", "Users Gained")}
        />
      </div>
      <div className={styles.barChart}>
        <BarChart
          data={chartDataFunc(UserData, "year", "userLost", "Users Lost")}
        />
      </div>
    </>
  );
}

export default Charts;
