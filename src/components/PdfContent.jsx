import React from "react";
import {
  Document,
  Page,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import Footer from "./Footer";
import DummySection from "./DummySection";
import Header from "./Header";
import ChartSection from "./ChartSection";

const styles = StyleSheet.create({
  top: {
    fontSize: 16,
    color: "#090E24",
    fontWeight: "600",
  },
  topOne: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "space-between",
    marginTop: "10px",
    marginBottom: "16px",
  },
  page: {
    flexDirection: "row",
  },
  section: {
    width: "100%",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    flex: 1,
  },
  text: {
    fontFamily: "Helvetica",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  chartContainer: {
    marginTop: "auto", // Push the ChartPage to the bottom
  },
});
export default function PdfContent({burglaryData}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header/>
        <hr className="border-[#1463FF] mx-5 mb-4 border-2"></hr>
        <DummySection/>
        <ChartSection burglaryData={burglaryData}/>
        <div className="px-5 pt-5 flex flex-col">
          <div>
            <Text>
              <hr className="col-span-11 border-[#1463FF] my-2 border-2"></hr>
            </Text>
          </div>
          <Footer/>
        </div>
      </Page>
    </Document>
  );
}
