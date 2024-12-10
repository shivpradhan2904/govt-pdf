import React,{useRef} from "react";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import img from "../image/Odisha-govt.webp";
import qr from "../image/qr.png";

function Page({img,qr}) {
  const printRef = useRef();

  const handlePrint = () => {
    const input = printRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('form.pdf');
    });
  }

  return (
    <div className="flex justify-center bg-gray-100">
      <div className=" w-[700px] h-[700px] sm:w-[700px] sm:h-[800px] md:w-[700px] md:h-[800px] lg:w-[800px] lg:h-[900px] mx-auto ">
        <div className="grid grid-cols-2 gap-4 p-4 bg-white ">
          {/* Original Copy */}
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
                      className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[5px] sm:text-[10px] font-bold w-[40px] sm:w-[100px]"
                      placeholder=" "
                    />
                  </div>
                  <div className="flex items-center ">
                    <span className="text-[8px]">No.</span>
                    <input
                      type="text"
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
                className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[8px] font-bold w-[100px]"
                placeholder=""
              />

              <div className="flex items-center mt-2 text-[10px]">
                <span className="mr-2">
                  <span className="font-bold">2.</span> Date & Time :
                </span>
                <input
                  type="date"
                  className="border border-gray-300 p-1 rounded text-[8px] w-[50px] sm:w-[100px] focus:outline-none"
                />
                <input
                  type="time"
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
                    className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[80px] sm:w-[100px]"
                    placeholder="  "
                  />
                </div>

                <div className="flex items-center space-x-2 sm:ml-3">
                  <span className="text-[10px]">Route :</span>
                  <input
                    type="text"
                    className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[80px] sm:w-[80px]"
                    placeholder="BHUBANESWER"
                  />
                </div>
              </div>

              <div>
                <span className="text-[10px]">
                  <span className="font-bold">7.</span>. Minor Mineral :
                </span>
                <input
                  type="text"
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
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[70px] sm:w-[100px]"
                  placeholder="NA"
                />
                <span className="ml-3 text-[10px] font-bold">Date : </span>
                <input
                  type="date"
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
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[50px] sm:w-[100px]"
                  placeholder=" "
                />
              </div>
              <div className="overflow-x-auto">
                <table className="table-auto border border-gray-400 w-full text-center">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-400 px-2 py-1 text-[10px] font-bold">
                        Length
                      </th>
                      <th className="border border-gray-400 px-2 py-1 text-[10px] font-bold">
                        Breadth
                      </th>
                      <th className="border border-gray-400 px-2 py-1 text-[10px] font-bold">
                        Height
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-2 py-1 text-[#081c5f] text-[10px] font-bold">
                        NA
                      </td>
                      <td className="border border-gray-400 px-2 py-1 text-[#081c5f] text-[10px] font-bold">
                        NA
                      </td>
                      <td className="border border-gray-400 px-2 py-1 text-[#081c5f] text-[10px] font-bold">
                        NA
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="">
                <span className="text-[10px] font-normal w-auto">
                  <span className="font-bold">10.</span> Measurement of Mineral
                  in Carrier (in meter) :
                </span>
                <input
                  type="text"
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[100px]"
                  placeholder="  "
                />
              </div>

              <div>
                <span className="text-[10px]">
                  <span className="font-bold">11.</span> Cubic Content (Cum) :
                </span>
                <input
                  type="text"
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
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[50px] sm:w-[50px]"
                  placeholder="NA"
                />
                <span className="ml-3 text-[10px] ">Tare :</span>
                <input
                  type="text"
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

          {/* Duplicate Copy */}
          <div className=" border-black border-[3px] p-2">
            <header className="flex justify-between items-center">
              <div className="flex-1 text-center"></div>
              <div className="flex-1 flex justify-center">
                <img src={img} alt="" className="h-[40px] w-[60px]" />
              </div>
              <h1 className="flex-1 text-center mb-5 text-[6px] sm:text-[8px] font-bold uppercase">
                DUPLICATE COPY
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
                      className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[5px] sm:text-[10px] font-bold w-[40px] sm:w-[100px]"
                      placeholder=" "
                    />
                  </div>
                  <div className="flex items-center ">
                    <span className="text-[8px]">No.</span>
                    <input
                      type="text"
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
                className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[8px] font-bold w-[100px]"
                placeholder=""
              />

              <div className="flex items-center mt-2 text-[10px]">
                <span className="mr-2">
                  <span className="font-bold">2.</span> Date & Time :
                </span>
                <input
                  type="date"
                  className="border border-gray-300 p-1 rounded text-[8px] w-[50px] sm:w-[100px] focus:outline-none"
                />
                <input
                  type="time"
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
                    className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[80px] sm:w-[100px]"
                    placeholder="  "
                  />
                </div>

                <div className="flex items-center space-x-2 sm:ml-3">
                  <span className="text-[10px]">Route :</span>
                  <input
                    type="text"
                    className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[80px] sm:w-[80px]"
                    placeholder=""
                  />
                </div>
              </div>

              <div>
                <span className="text-[10px]">
                  <span className="font-bold">7.</span>. Minor Mineral :
                </span>
                <input
                  type="text"
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
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[70px] sm:w-[100px]"
                  placeholder="NA"
                />
                <span className="ml-3 text-[10px] font-bold">Date : </span>
                <input
                  type="date"
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
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[50px] sm:w-[100px]"
                  placeholder=" "
                />
              </div>
              <div className="overflow-x-auto">
                <table className="table-auto border border-gray-400 w-full text-center">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-400 px-2 py-1 text-[10px] font-bold">
                        Length
                      </th>
                      <th className="border border-gray-400 px-2 py-1 text-[10px] font-bold">
                        Breadth
                      </th>
                      <th className="border border-gray-400 px-2 py-1 text-[10px] font-bold">
                        Height
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-2 py-1 text-[#081c5f] text-[10px] font-bold">
                        NA
                      </td>
                      <td className="border border-gray-400 px-2 py-1 text-[#081c5f] text-[10px] font-bold">
                        NA
                      </td>
                      <td className="border border-gray-400 px-2 py-1 text-[#081c5f] text-[10px] font-bold">
                        NA
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="">
                <span className="text-[10px] font-normal w-auto">
                  <span className="font-bold">10.</span> Measurement of Mineral
                  in Carrier (in meter) :
                </span>
                <input
                  type="text"
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[100px]"
                  placeholder="  "
                />
              </div>

              <div>
                <span className="text-[10px]">
                  <span className="font-bold">11.</span> Cubic Content (Cum) :
                </span>
                <input
                  type="text"
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
                  className="border-b border-dotted border-black focus:outline-none text-center uppercase text-[#081c5f] text-[10px] font-bold w-[50px] sm:w-[50px]"
                  placeholder="NA"
                />
                <span className="ml-3 text-[10px] ">Tare :</span>
                <input
                  type="text"
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
        <div>
          <button onClick={handlePrint} className="flex justify-center">Print</button>
        </div>
      </div>
    </div>
  );
}

export default Page;