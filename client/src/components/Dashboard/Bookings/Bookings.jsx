import React, { useEffect, useState } from 'react';
import './bookings.scss';
import { updateBookingAction, vendorBookingAction } from '../../../Redux/actions/vendorBookingAction';
import { useDispatch, useSelector } from 'react-redux';

const Bookings = () => {


  const dispatch = useDispatch();
  const { bookingsArray } = useSelector(state => state.vendorBookingReducer);

  const [bookingStatus, setBookingStatus] = useState("Check In");

  const bookingHandler = (type) => {
    console.log(type);
    vendorBookingAction(dispatch, type);

  };

  const updateStatusHandler = (bookingId) => {

    updateBookingAction(dispatch, bookingStatus, bookingId);

    if (bookingStatus === "New Booking")
      return bookingHandler("New Booking")

    if (bookingStatus === "Check-In")
      return bookingHandler("Check-In")

    if (bookingStatus === "Check-Out")
      return bookingHandler("Check-Out")

    if (bookingStatus === "Cancelled")
      return bookingHandler("Cancelled")

  };



  useEffect(() => {
    // console.log(bookingsArray)
    // console.log(bookingStatus)
  }, [bookingsArray, bookingStatus])

  return (
    <div className='bookingsComponent'>
      <div className="option">
        <div onClick={() => bookingHandler("New Booking")}><span>New Bookings</span></div>
        <div onClick={() => bookingHandler("Check-In")}><span>Booked Rooms</span></div>
        <div onClick={() => bookingHandler("Record")}><span>Record</span></div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>BookingId</th>
            <th>Reservation</th>
            <th>Room No</th>
            <th>Name</th>
            <th>No of People</th>
            <th>Booking Date</th>
            <th>Status</th>
          </tr>
        </thead>


        <tbody>
          {
            bookingsArray.map((val, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{val.bookingId}</td>
                <td>
                  <div>

                    {new Date(val.reservationDates.from).toLocaleDateString()}
                    <br /> to <br />
                    {new Date(val.reservationDates.to).toLocaleDateString()}

                  </div>
                </td>

                <td>{val.roomNo}</td>

                <td>
                  {val.customerDetails.name}
                  <br></br>
                  <p style={{ color: "gray" }}>
                    {val.customerDetails.phoneNumber}
                    <br></br>
                    {val.customerDetails.city}, {val.customerDetails.country}
                  </p>


                </td>

                <td>
                  <div style={{ textAlign: 'left' }}>
                    Adults: {val.customerDetails.adults} <br />
                    Children: {val.customerDetails.children}
                  </div>
                </td>
                <td>
                  <div className="inputTab">
                    <select>
                      <option>Aadhar Card</option>
                      <option>Pan Card</option>
                      <option>Voter Card</option>
                      <option>Bankpass Book</option>
                    </select>
                    <input type="text" />
                  </div>
                  {new Date(val.createdAt).toLocaleDateString()} || {new Date(val.createdAt).toLocaleTimeString()}
                </td>
                <td>
                  <div className="inputTab">
                    <select onChange={(e) => setBookingStatus(e.target.value)} value={val.status}>
                      <option>select</option>
                      <option>New Booking</option>
                      <option>Check-In</option>
                      <option>Check-Out</option>
                      <option>Cancelled</option>
                    </select>
                    <button onClick={() => updateStatusHandler(val._id)}>Update</button>
                  </div>
                </td>
              </tr>
            ))
          }


        </tbody>


      </table>

      {/* <div className="nextPage">
        <div>1</div>
        <div className='currentPage'>2</div>
        <div>3</div>
        <div>4</div>
        <div>5...</div>
      </div> */}
    </div>
  );
};

export default Bookings;


// import React, { useEffect, useState } from 'react';
// import './bookings.scss';
// import { updateBookingAction, vendorBookingAction } from '../../../Redux/actions/vendorBookingAction';
// import { useDispatch, useSelector } from 'react-redux';

// const Bookings = () => {
//   const dispatch = useDispatch();
//   const { bookingsArray } = useSelector(state => state.vendorBookingReducer);

//   // Local state to store updated statuses for each booking
//   const [updatedBookings, setUpdatedBookings] = useState(bookingsArray);

//   // Function to update the booking status for a specific booking
//   const handleBookingStatusChange = (bookingId, status) => {
//     setUpdatedBookings(prevBookings =>
//       prevBookings.map(booking =>
//         booking._id === bookingId ? { ...booking, status } : booking
//       )
//     );
//   };

//   const bookingHandler = (type) => {
//     console.log(type);
//     vendorBookingAction(dispatch, type);
//   };

//   const updateStatusHandler = (bookingId) => {
//     const bookingStatus = updatedBookings.find(booking => booking._id === bookingId).status;

//     updateBookingAction(dispatch, bookingStatus, bookingId);

//     if (bookingStatus === "New Booking")
//       return bookingHandler("New Booking");

//     if (bookingStatus === "Check-In")
//       return bookingHandler("Check-In");

//     if (bookingStatus === "Check-Out")
//       return bookingHandler("Check-Out");

//     if (bookingStatus === "Cancelled")
//       return bookingHandler("Cancelled");
//   };

//   useEffect(() => {
//     // Sync the `updatedBookings` state with `bookingsArray` whenever `bookingsArray` changes
//     setUpdatedBookings(bookingsArray);
//   }, [bookingsArray]);

//   return (
//     <div className='bookingsComponent'>
//       <div className="option">
//         <div onClick={() => bookingHandler("New Booking")}><span>New Bookings</span></div>
//         <div onClick={() => bookingHandler("Check-In")}><span>Booked Rooms</span></div>
//         <div onClick={() => bookingHandler("Record")}><span>Record</span></div>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>Sr</th>
//             <th>BookingId</th>
//             <th>Reservation</th>
//             <th>Room No</th>
//             <th>Name</th>
//             <th>No of People</th>
//             <th>Booking Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           {
//             [...updatedBookings].reverse().map((val, index) => (
//               <tr key={val._id}>
//                 <td>{index + 1}</td>
//                 <td>{val.bookingId}</td>
//                 <td>
//                   <div>
//                     {new Date(val.reservationDates.from).toLocaleDateString()}
//                     <br /> to <br />
//                     {new Date(val.reservationDates.to).toLocaleDateString()}
//                   </div>
//                 </td>
//                 <td>{val.roomNo}</td>
//                 <td>
//                   {val.customerDetails.name}
//                   <br />
//                   <p style={{ color: "gray" }}>
//                     {val.customerDetails.phoneNumber}
//                     <br />
//                     {val.customerDetails.city}, {val.customerDetails.country}
//                   </p>
//                 </td>
//                 <td>
//                   <div style={{ textAlign: 'left' }}>
//                     Adults: {val.customerDetails.adults} <br />
//                     Children: {val.customerDetails.children}
//                   </div>
//                 </td>
//                 <td>
//                   {new Date(val.createdAt).toLocaleDateString()} || {new Date(val.createdAt).toLocaleTimeString()}
//                 </td>
//                 <td>
//                   <div className="inputTab">
//                     <select
//                       onChange={(e) => handleBookingStatusChange(val._id, e.target.value)}
//                       value={val.status}
//                     >
//                       <option>select</option>
//                       <option>New Booking</option>
//                       <option>Check-In</option>
//                       <option>Check-Out</option>
//                       <option>Cancelled</option>
//                     </select>
//                     <button onClick={() => updateStatusHandler(val._id)}>Update</button>
//                   </div>
//                 </td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Bookings;
