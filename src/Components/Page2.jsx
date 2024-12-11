import React, { useState } from "react";
import jsPDF from "jspdf";
import img from "../image/Odisha-govt.webp";
import qr from "../image/qr.png";

function Page2() {
  const [inputs, setInputs] = useState({
    pass: "",
    no: "",
    book: "",
    date: "",
    time: "",
    mining: "",
    auction: "",
    purchaser: "",
    destination: "",
    route: "",
    minor: "",
    permit: "",
    date2: "",
    length: "",
    breadth: "",
    height: "",
    meter: "",
    cum: "",
    ton: "",
    tare: "",
    mineral: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(10);
    doc.text("Government of Odisha", 105, 10, null, null, "center");
    doc.text("Department of Steel & Mines", 105, 15, null, null, "center");
    doc.text("Form-Y", 105, 20, null, null, "center");
    doc.text("[See rule 58(1)]", 105, 25, null, null, "center");

    doc.setFontSize(8);
    doc.text(`Pass: ${inputs.pass}`, 10, 40);
    doc.text(`No: ${inputs.no}`, 50, 40);
    doc.text(`Book No: ${inputs.book}`, 10, 50);
    doc.text(`Date: ${inputs.date}`, 10, 60);
    doc.text(`Time: ${inputs.time}`, 50, 60);

    doc.setFontSize(12);
    doc.text("TRANSIT PASS", 105, 70, null, null, "center");
    doc.setFontSize(10);
    doc.text("FOR MINOR MINERALS", 105, 75, null, null, "center");
    doc.setFontSize(10);
    doc.text("3. Circle Mining Office :", 10, 80);
    doc.text(inputs.mining, 40, 80);

    doc.text("4. Name of the Quarry/Lease/Source of Auction :", 10, 90);
    doc.text(inputs.auction, 40, 90);

    doc.text(
      "5. Name of the Licensee/Lessee/Permit Holder/Auction Holder/Auction Purchaser :",
      10,
      100
    );
    doc.text(inputs.purchaser, 40, 100);

    doc.text("6. Destination :", 10, 110);
    doc.text(inputs.destination, 40, 110);

    doc.text("Route :", 60, 110);
    doc.text(inputs.route, 80, 110);

    doc.setFontSize(10);

    doc.text("7. Minor Mineral :", 10, 120);
    doc.text(inputs.minor, 40, 120);

    doc.text("8. Permit No. :", 10, 130);
    doc.text(inputs.permit, 40, 130);
    doc.text("Date :", 70, 130);
    doc.text(inputs.date2, 90, 130);

    doc.text("9. Quantity Permitted (Cum/Tonnes) :", 10, 140);
    doc.text("", 70, 140);

    const tableHeaderY = 150;
    const colWidth = 30;
    doc.text("Length", 10, tableHeaderY);
    doc.text("Breadth", colWidth + 10, tableHeaderY);
    doc.text("Height", 2 * colWidth + 10, tableHeaderY);
    doc.text("Actions", 3 * colWidth + 10, tableHeaderY);

    const tableDataY = tableHeaderY + 5;
    tableData.forEach((row, index) => {
      const rowY = tableDataY + index * 10;
      doc.text(row.length, 10, rowY);
      doc.text(row.breadth, colWidth + 10, rowY);
      doc.text(row.height, 2 * colWidth + 10, rowY);
    });
    doc.text("10. Measurement of Mineral in Carrier (in meter) :", 10, 150);
    doc.text(inputs.meter, 40, 150);

    doc.text("11. Cubic Content (Cum) :", 10, 160);
    doc.text(inputs.cum, 40, 160);

    doc.text("12. Weight of the Vehicle (Tonnes) :", 10, 170);
    doc.text(inputs.ton, 40, 170);
    doc.text("Tare :", 70, 170);
    doc.text(inputs.tare, 90, 170);

    doc.text("13. Weight of the Mineral :", 10, 180);
    doc.text(inputs.mineral, 40, 180);

    const fileName = inputs.book ? `${inputs.book}.pdf` : "bookno.pdf";
    doc.save(fileName);
  };
  const [tableData, setTableData] = useState([
    { length: "NA", breadth: "NA", height: "NA" },
  ]);

  const handleInputChange = (e, index, field) => {
    const newTableData = [...tableData];
    newTableData[index][field] = e.target.value;
    setTableData(newTableData);
  };

  const handleAddRow = () => {
    setTableData([...tableData, { length: "", breadth: "", height: "" }]);
  };

  const handleDeleteRow = (index) => {
    const newTableData = [...tableData];
    newTableData.splice(index, 1);
    setTableData(newTableData);
  };
  return (
    <div>
      {/* Duplicate Copy */}
      <div className=" border-black border-[3px] p-2">
            <header className="flex justify-between items-center">
              <div className="flex-1 text-center"></div>
              <div className="flex-1 flex justify-center">
                <img src={img} alt="" className="h-[40px] w-[60px]" />
              </div>
              <h1 className="flex-1 text-center mb-5 text-[6px] sm:text-[8px] font-bold uppercase">
                ORIGINAL COPY
              </h1>
            </header>

            <h1 className="text-center font-bold text-[8px] uppercase">
              Government of Odisha
            </h1>
            <h2 className="text-center font-bold text-[8px] uppercase">
              Department of Steel & Mines
            </h2>
            <h3 className="text-center text-sm text-[8px] sm:text-[10px] font-bold">
              Form-Y <br />
            </h3>

            <div className="flex">
              <div className="flex-1"></div>

              <div className="flex-1 text-center text-[6px] ">
                [See rule 58(1)]
              </div>

              <div className="flex-1 text-right">
                <div className="flex flex-col items-end space-y-1">
                  <div className="flex items-center">
                    <span className="text-[8px]">Pass</span>
                    <input
                      type="text"
                      name="pass"
                      value={inputs.pass}
                      onChange={handleChange}
                      className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[5px] sm:text-[10px] font-bold w-[40px] sm:w-[100px]"
                      placeholder=" "
                    />
                  </div>
                  <div className="flex items-center ">
                    <span className="text-[8px]">No.</span>
                    <input
                      type="text"
                      name="no"
                      value={inputs.no}
                      onChange={handleChange}
                      className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[5px] sm:text-[10px] font-bold w-[40px] sm:w-[100px]"
                      placeholder=" "
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-[8px]">
              <div>
                <span className="font-bold block text-center">
                  TRANSIT PASS
                </span>
                <span className="block text-center">FOR MINOR MINERALS</span>
              </div>
            </div>

            <div>
              <span className="text-[10px]">
                <span className="font-bold">1.</span> Book No :
              </span>
              <input
                type="text"
                name="book"
                value={inputs.book}
                onChange={handleChange}
                className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[8px] font-bold w-[100px]"
                placeholder=""
              />

              <div className="flex items-center mt-2 text-[10px]">
                <span className="mr-2">
                  <span className="font-bold">2.</span> Date & Time :
                </span>
                <input
                  type="date"
                  name="date"
                  value={inputs.date}
                  onChange={handleChange}
                  className="border border-gray-300 p-1 rounded text-[8px] w-[50px] sm:w-[100px] focus:outline-none"
                />
                <input
                  type="time"
                  name="time"
                  value={inputs.time}
                  onChange={handleChange}
                  className="border border-gray-300 p-1 rounded text-[8px] w-[50px] sm:w-[100px] focus:outline-none ml-2"
                />
              </div>
            </div>

            <div>
              <div>
                <span className="text-[10px]">
                  <span className="font-bold">3.</span> Circle Mining Office :
                </span>
                <input
                  type="text"
                  name="mining"
                  value={inputs.mining}
                  onChange={handleChange}
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[8px] sm:text-[10px] font-bold w-[100px] sm:w-[200px]"
                  placeholder="     "
                />
              </div>

              <div className="">
                <span className="text-[10px] font-normal w-12">
                  <span className="font-bold">4.</span> Name of the
                  Quarry/Lease/Source of Auction :
                </span>
                <input
                  type="text"
                  name="auction"
                  value={inputs.auction}
                  onChange={handleChange}
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[70px] sm:w-[100px]"
                  placeholder="  "
                />
              </div>
              <div className="">
                <span className="text-[10px] font-normal w-auto">
                  <span className="font-bold">5.</span> Name of the
                  Licensee/Lessee/Permit Holder/Auction Holder/Auction Purchaser
                  :
                </span>
                <input
                  type="text"
                  name="purchaser"
                  value={inputs.purchaser}
                  onChange={handleChange}
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[100px]"
                  placeholder="  "
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px]">
                    <span className="font-bold">6.</span> Destination :
                  </span>
                  <input
                    type="text"
                    name="destination"
                    value={inputs.destination}
                    onChange={handleChange}
                    className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[80px] sm:w-[100px]"
                    placeholder="  "
                  />
                </div>

                <div className="flex items-center space-x-2 sm:ml-3">
                  <span className="text-[10px]">Route :</span>
                  <input
                    type="text"
                    name="route"
                    value={inputs.route}
                    onChange={handleChange}
                    className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[80px] sm:w-[80px]"
                    placeholder=" "
                  />
                </div>
              </div>

              <div>
                <span className="text-[10px]">
                  <span className="font-bold">7.</span>. Minor Mineral :
                </span>
                <input
                  type="text"
                  name="minor"
                  value={inputs.minor}
                  onChange={handleChange}
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[130px] sm:w-[200px]"
                  placeholder=""
                />
              </div>

              <div>
                <span className="text-[10px]">
                  <span className="font-bold">8.</span> Permit No. :
                </span>
                <input
                  type="text"
                  name="permit"
                  value={inputs.permit}
                  onChange={handleChange}
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[70px] sm:w-[100px]"
                  placeholder="NA"
                />
                <span className="ml-3 text-[10px] font-bold">Date : </span>
                <input
                  type="date"
                  name="date2"
                  value={inputs.date2}
                  onChange={handleChange}
                  className="border border-gray-300 p-1 rounded text-[8px] w-[100px] focus:outline-none"
                />
              </div>

              <div>
                <span className="text-[10px]">
                  <span className="font-bold">9.</span> Quantity Permitted
                  (Cum/Tonnes) :
                </span>
                <input
                  type="text"
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[70px] sm:w-[120px] sm:ml-3"
                  placeholder=" "
                />
              </div>
              <div className="overflow-x-auto">
                <table className="table-auto border border-gray-400 w-full text-center">
                  <thead>
                    <tr>
                      <th className="border border-gray-400 text-[8px] sm:text-[10px] font-bold">
                        Length
                      </th>
                      <th className="border border-gray-400 text-[8px] sm:text-[10px] font-bold">
                        Breadth
                      </th>
                      <th className="border border-gray-400 text-[8px] sm:text-[10px] font-bold">
                        Height
                      </th>
                      <th className="border border-gray-400 text-[8px] sm:text-[10px] font-bold">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-400 px-2 py-1 text-center text-[#081c5f] text-[7px] sm:text-[10px] font-bold">
                          <input
                            type="text"
                            value={row.length}
                            className="w-full px-1 py-1 text-center  rounded-sm"
                            onChange={(e) =>
                              handleInputChange(e, index, "length")
                            }
                          />
                        </td>
                        <td className="border border-gray-400 px-2 py-1 text-center text-[#081c5f] text-[7px] sm:text-[10px] font-bold">
                          <input
                            type="text"
                            value={row.breadth}
                            className="w-full px-1 py-1 text-center rounded-sm"
                            onChange={(e) =>
                              handleInputChange(e, index, "breadth")
                            }
                          />
                        </td>
                        <td className="border border-gray-400 px-2 py-1 text-center text-[#081c5f] text-[7px] sm:text-[10px] font-bold">
                          <input
                            type="text"
                            value={row.height}
                            className="w-full px-1 py-1 text-center rounded-sm"
                            onChange={(e) =>
                              handleInputChange(e, index, "height")
                            }
                          />
                        </td>
                        <td className="border border-gray-400 px-2 py-1 text-center text-[7px] sm:text-[10px] font-bold">
                          <button
                            onClick={() => handleDeleteRow(index)}
                            className="px-2 bg-red-500 text-white rounded-sm hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-1 flex justify-center">
                  <button
                    onClick={handleAddRow}
                    className="px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-[7px] sm:text-[10px]"
                  >
                    Add Row
                  </button>
                </div>
              </div>
              <div className="">
                <span className="text-[10px] font-normal w-auto">
                  <span className="font-bold">10.</span> Measurement of Mineral
                  in Carrier (in meter) :
                </span>
                <input
                  type="text"
                  name="meter"
                  value={inputs.meter}
                  onChange={handleChange}
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[80px]"
                  placeholder="  "
                />
              </div>

              <div>
                <span className="text-[10px]">
                  <span className="font-bold">11.</span> Cubic Content (Cum) :
                </span>
                <input
                  type="text"
                  name="cum"
                  value={inputs.cum}
                  onChange={handleChange}
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[100px]"
                  placeholder="0.00"
                />
              </div>

              <div>
                <span className="text-[10px]">
                  <span className="font-bold">12.</span> Weight of the Vehicle
                  (Tonnes) :
                </span>
                <input
                  type="text"
                  name="ton"
                  value={inputs.ton}
                  onChange={handleChange}
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[50px] sm:w-[50px]"
                  placeholder="NA"
                />
                <span className="ml-3 text-[10px] ">Tare :</span>
                <input
                  type="text"
                  name="tare"
                  value={inputs.tare}
                  onChange={handleChange}
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[50px] sm:w-[50px]"
                  placeholder="NA"
                />
              </div>

              <div>
                <span className="text-[10px]">
                  <span className="font-bold">13.</span> Weight of the Mineral :
                </span>
                <input
                  type="text"
                  name="mineral"
                  value={inputs.mineral}
                  onChange={handleChange}
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[100px]"
                  placeholder="NA"
                />
              </div>
            </div>

            <div className="border-b border-black sm:mx-2 mx-1 mt-3 flex flex-nowrap"></div>

            <div className="flex gap-2 sm:gap-4 items-center mt-1">
              <div>
                <img
                  src={qr}
                  alt="QR Code"
                  className="sm:h-[6rem] sm:w-[8rem] h-[40px] w-[50px]"
                />
              </div>

              <div className="grid grid-cols-3 space-x-1 space-y-3 sm:text-[8px] text-[7px] font-normal w-full">
                <span className="col-span-1 mt-3">
                  Signature of the person Issuing with date
                </span>
                <span className="col-span-1">
                  Signature of the carrier Driver with date
                </span>
                <span className="col-span-1">
                  Signature of the checking staff with date
                </span>

                <span className="col-span-2">
                  Signature of the person receiving at the destination with date
                </span>
                <span className="col-span-1">
                  Signature of Inspector I/C with date & time
                </span>
                <div className="col-span-3 text-center sm:text-[8px] text-[7px] pr-5 font-bold ">
                  Office Seal
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Page2
