import GraphGenerator from "../components/GraphGenerator";
import {
  Text,
} from "@react-pdf/renderer";

export default function ChartPage({burglaryData}) {
  
 
  return (
    <div>
      <div className="bg-[#F2F4F5] w-[800px] mt-10 mx-10 rounded-xl">
        <div className="bg-[#E8EEFB] rounded-t-xl pl-5">
          <Text>
            <p className="text-[#1463FF] pt-2 pb-3 font-bold">Burglary</p>
          </Text>
        </div>
        <div className="flex flex-row">
            <p className="ml-3 mr-2 my-auto text-[#1E1E1E] leading-3 text-sm font-bold arrests-text">
              Arrests
            </p>
          <div className="pl-1 pr-5 py-5">
            {burglaryData && <GraphGenerator data={burglaryData} />}
          </div>
        </div>
      </div>
    </div>
  );
}
