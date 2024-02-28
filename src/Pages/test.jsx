import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { FaDownload } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaQuestion } from "react-icons/fa";
// import {dayjs} from "dayjs"
import { baseUrl } from "../baseUrl";
import AlertDialog from "./AlertDialog";
import DownloadIcon from "@mui/icons-material/Download";
import BlockIcon from "@mui/icons-material/Block";
import DownloadDialog from "./DownloadDialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { use } from '../../../project_backend/routes/admin';
function HostelOutList() {
  const [hostelOut, setHostelOut] = useState([]);
  const { user } = useContext(UserContext);
  console.log(user);
  const [open, setOpen] = React.useState(false);
  const [fromdate, setFromdate] = useState(dayjs("2024-01-01"));
  const [todate, setTodate] = useState(dayjs("2024-01-01"));

  var today = new Date().toISOString().split("T")[0];

  const [editMode, setEditMode] = useState({});
  const changeFromDate = (date, fromdate, todate) => {
    console.log(date);
    if (fromdate < dayjs(today) && todate > dayjs(today)) {
      return false;
    } else if (fromdate > dayjs(today) && todate > dayjs(today)) {
      //back of window
      console.log(date);
      console.log("ds");
      return date > today;
    } else if (fromdate < dayjs(today) && todate < dayjs(today)) {
      return false;
    }
    return true;
  };
  const changeToDate = (date, fromdate, todate) => {
    console.log(date);
    if (fromdate < dayjs(today) && todate > dayjs(today)) {
      return today > fromdate;
    } else if (fromdate > dayjs(today) && todate > dayjs(today)) {
      //back of window
      console.log(date);
      console.log("ds");
      return date > fromdate;
    } else if (fromdate < dayjs(today) && todate < dayjs(today)) {
      return false;
    }
    return true;
  };

  const toggleEditMode = (id) => {
    setEditMode((prevEditMode) => {
      if (prevEditMode[id] == true) {
        console.log("hkd");
        axios.post(`${baseUrl}/inmate/update-hostel-out`, {
          hostelOut: hostelOut.filter((data) => {
            return data.entryno == id;
          }),
        });
      }

      return {
        ...prevEditMode,
        [id]: !prevEditMode[id],
      };
    });
  };

  const handleDateChange = (id, field, value) => {
    setHostelOut((prevData) =>
      prevData.map((item) =>
        item.entryno === id ? { ...item, [field]: value } : item
      )
    );
  };
  useEffect(() => {
    // fetch(${baseUrl}/inmate/viewHostelOut)

    axios
      .get(`${baseUrl}/inmate/viewHostelOut`, {
        params: { user_id: user.user_id },
      })
      .then((res) => {
        console.log(res.data.rows);
        console.log("hi");

        setHostelOut(res.data.rows);
        console.log(hostelOut);
      });
  }, []);

  //     const [certificates, setCertificates] = useState([])

  return (
    <div className="w-11/12 overflow-y-scroll no-scrollbar overflow-x-scroll">
      <table className="w-full relative table-auto">
        <tr className="rounded-xl p-3 bg-primary text-center">
          <th className="p-3">Sl.No</th>
          <th className="p-3">From Date</th>
          {/* <th className='p-3'>Applied Date</th> */}
          <th className="p-3">To Date</th>
          {/* <th className='p-3'>Status</th> */}
          <th className="p-3">Modify</th>
        </tr>

        {hostelOut.map((data, index) => {
          var fromdate = new Date(data.fromdate);
          var todate = new Date(data.todate);
          var to = parseInt(todate.getMonth()) + 1;
          var from = parseInt(fromdate.getMonth()) + 1;
          // console.log(date)
          var newtoDate =
            todate.getDate() + "-" + to + "-" + todate.getFullYear();
          var newfromDate =
            fromdate.getDate() + "-" + from + "-" + fromdate.getFullYear();
          // console.log(date.getDate())
          return (
            <tr
              className="border-b text-center border-slate-200 border-solid hover:bg-gray-300"
              key={index}
            >
              <td className="p-3">{index + 1}</td>

              {/* <td className="p-3 capitalize">{newfromDate}</td>
              <td className="p-3 capitalize">{newtoDate}</td> */}
              {/* <td className='p-3'>{certificate.approved?"Approved":(certificate.rejected?"Rejected":"In Progress")}</td> */}

              {/* <td className='p-3'>{certificate.approved?<DownloadIcon className="cursor-pointer" onClick={()=>{downloadCertificate(certificate.entryno,certificate.application_id,certificate.name)}}></DownloadIcon>:<BlockIcon/>}</td> */}
              <td>
                {editMode[data.entryno] ? (
                  // <input
                  //   type="date"
                  //   min={today}
                  //   value={dayjs(data.fromdate).format("YYYY-MM-DD")}
                  //   onChange={(e) =>
                  //     handleDateChange(data.entryno, "fromdate", e.target.value)
                  //   }
                  // />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      defaultValue={dayjs(data.fromdate)}
                      shouldDisableDate={(date) =>
                        changeFromDate(
                          date,
                          dayjs(data.fromdate),
                          dayjs(data.todate)
                        )
                      }
                      onChange={(newValue) => {
                        handleDateChange(data.entryno, "fromdate", newValue);
                      }}
                      views={["year", "month", "day"]}
                    />
                  </LocalizationProvider>
                ) : (
                  newfromDate
                )}
              </td>
              <td>
                {editMode[data.entryno] ? (
                  // <input
                  //   type="date"
                  //   value={dayjs(data.todate).format("YYYY-MM-DD")}
                  //   onChange={(e) =>
                  //     handleDateChange(data.entryno, "todate", e.target.value)
                  //   }
                  // />

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      defaultValue={dayjs(data.todate)}
                      shouldDisableDate={(date) =>
                        changeToDate(
                          date,
                          dayjs(data.fromdate),
                          dayjs(data.todate)
                        )
                      }
                      onChange={(newValue) => {
                        handleDateChange(data.entryno, "todate", newValue);
                      }}
                      views={["year", "month", "day"]}
                    />
                  </LocalizationProvider>
                ) : (
                  `${newtoDate}`
                )}
              </td>
              <td>
                <button onClick={() => toggleEditMode(data.entryno)}>
                  {editMode[data.entryno] ? "Save" : "Edit"}
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default HostelOutList;
