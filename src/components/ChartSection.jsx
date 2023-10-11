import { StyleSheet, View } from "@react-pdf/renderer";
import ChartPage from "../pages/ChartPage";
import locationImage from "../assets/pngs/location-share.png";

export default function ChartSection({burglaryData}) {
  const styles = StyleSheet.create({
    section: {
      width: "100%",
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      padding: 10,
      flex: 1,
    },
  });
  return (
    <div className="">
      <View style={styles.section}>
        <div className="flex w-11/12 mx-auto flex-row gap-2 h-5">
          <div className="basis-1/12 flex flex-row gap-2">
            <img className="my-auto" src={locationImage} alt="locationImage" />
            <p className="font-semibold text-[#090e24] text-sm -mt-2">Crime</p>
          </div>
          <hr className="basis-11/12 border-[#1463FF] mt-2 border-2 my-auto"></hr>
        </div>
        <View style={styles.chartContainer}>
          <ChartPage burglaryData={burglaryData} />
        </View>
      </View>
    </div>
  );
}
