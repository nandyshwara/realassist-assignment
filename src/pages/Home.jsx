import axios from "axios";
import printerImage from "../assets/svgs/printer.svg";
import PdfContent from "../components/PdfContent";
import { usePDF } from "react-to-pdf";
import { useEffect, useState } from "react";

export default function Home() {
  const [burglaryData, setBurglaryData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const url =
    "https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";
  const getCrimeData = async () => {
    try {
      const { data } = await axios.get(url);
      const extractedData = data?.data.map((entry) => ({
        year: entry.data_year,
        arrests: entry.Burglary,
      }));
      setBurglaryData(extractedData);
      setDataLoaded(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCrimeData();
  }, []);
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const handleDownloadPDF = () => {
    if (dataLoaded) {
      setContentVisible(true);
      document.body.classList.add("blur");
      setTimeout(() => {
        toPDF();
        setContentVisible(false);
        document.body.classList.remove('blur');
      }, 2000);
    } else {
      console.log("Data is not loaded yet.");
    }
  };

  return (
    <div style={containerStyle}>
      {burglaryData && (
        <div>
          <div
            className="bg-[#090E24] flex flex-row gap-2 rounded-2xl w-[109px] h-[56px] justify-center justify-items-center cursor-pointer"
            onClick={handleDownloadPDF}
          >
            <img
              className="h-6 w-6 my-auto"
              src={printerImage}
              alt={printerImage}
            />
            <p className="text-white font-semibold text-sm my-auto">Print</p>
          </div>
          {dataLoaded && contentVisible && (
            <div ref={targetRef}>
              <PdfContent burglaryData={burglaryData} />
            </div>
          )}
         
        </div>
      )}
    </div>
  );
}
