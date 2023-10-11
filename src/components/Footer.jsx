import { Text } from "@react-pdf/renderer";
import DateGenerator from "./DateGenerator";
export default function Footer() {
  return (
    <div className="flex flex-row justify-between mb-2 pb-5">
      <Text>
        <DateGenerator />
      </Text>
      <Text>
        <p className="text-[9px] font-black">
          RealAssist Property Report | Page 1{" "}
          <span className="text-[#626e99]">of 25</span>
        </p>
      </Text>
    </div>
  );
}
