export default function DateGenerator() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentDay = currentDate.getDate();

  const result = currentMonth + " " + currentDay + ", " + currentYear;

  return (
    <div>
      <p className="text-[#1463FF] text-[9px] font-black">Report Generated on {result}</p>
    </div>
  );
}
