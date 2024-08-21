import React from 'react';
import './bookings.scss';

const Bookings = () => {
  return (
    <div className='bookingsComponent'>
      <div className="option">
        <div><span>New Bookings</span></div>
        <div><span>Booked Rooms</span></div>
        <div><span>Record</span></div>
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
            <th>Document</th>
            <th>Status</th>
          </tr>
        </thead>


        <tbody>
          {/* Repeated rows for illustration */}


          <tr>
            <td>001</td>
            <td>23423b2j</td>
            <td>
              <div>
                15/08/2024
                <br /> to <br />
                15/08/2024
              </div>
            </td>
            <td>101a</td>
            <td>Arbaz Hasan</td>
            <td>
              <div style={{ textAlign: 'left' }}>
                Adults: 5 <br />
                Children: 2
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
            </td>
            <td>
              <div className="inputTab">
                <select>
                  <option>Check-In</option>
                  <option>Check-Out</option>
                  <option>Cancelled</option>
                </select>
                <button>Update</button>
              </div>
            </td>
          </tr>


          <tr>
            <td>001</td>
            <td>23423b2j</td>
            <td>
              <div>
                15/08/2024
                <br /> to <br />
                15/08/2024
              </div>
            </td>
            <td>101a</td>
            <td>Arbaz Hasan</td>
            <td>
              <div style={{ textAlign: 'left' }}>
                Adults: 5 <br />
                Children: 2
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
            </td>
            <td>
              <div className="inputTab">
                <select>
                  <option>Check-In</option>
                  <option>Check-Out</option>
                  <option>Cancelled</option>
                </select>
                <button>Update</button>
              </div>
            </td>
          </tr>


          <tr>
            <td>001</td>
            <td>23423b2j</td>
            <td>
              <div>
                15/08/2024
                <br /> to <br />
                15/08/2024
              </div>
            </td>
            <td>101a</td>
            <td>Arbaz Hasan</td>
            <td>
              <div style={{ textAlign: 'left' }}>
                Adults: 5 <br />
                Children: 2
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
            </td>
            <td>
              <div className="inputTab">
                <select>
                  <option>Check-In</option>
                  <option>Check-Out</option>
                  <option>Cancelled</option>
                </select>
                <button>Update</button>
              </div>
            </td>
          </tr>


          <tr>
            <td>001</td>
            <td>23423b2j</td>
            <td>
              <div>
                15/08/2024
                <br /> to <br />
                15/08/2024
              </div>
            </td>
            <td>101a</td>
            <td>Arbaz Hasan</td>
            <td>
              <div style={{ textAlign: 'left' }}>
                Adults: 5 <br />
                Children: 2
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
            </td>
            <td>
              <div className="inputTab">
                <select>
                  <option>Check-In</option>
                  <option>Check-Out</option>
                  <option>Cancelled</option>
                </select>
                <button>Update</button>
              </div>
            </td>
          </tr>


          <tr>
            <td>001</td>
            <td>23423b2j</td>
            <td>
              <div>
                15/08/2024
                <br /> to <br />
                15/08/2024
              </div>
            </td>
            <td>101a</td>
            <td>Arbaz Hasan</td>
            <td>
              <div style={{ textAlign: 'left' }}>
                Adults: 5 <br />
                Children: 2
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
            </td>
            <td>
              <div className="inputTab">
                <select>
                  <option>Check-In</option>
                  <option>Check-Out</option>
                  <option>Cancelled</option>
                </select>
                <button>Update</button>
              </div>
            </td>
          </tr>



        </tbody>
      </table>

      <div className="nextPage">
        <div>1</div>
        <div className='currentPage'>2</div>
        <div>3</div>
        <div>4</div>
        <div>5...</div>
      </div>
    </div>
  );
};

export default Bookings;
