/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React from 'react';
import styles from './page.module.scss';
import Counter, {
  CounterType,
} from '../components/page/tickets/components/counter/Counter';
import Button, { ButtonType } from '../components/shared/button/Button';
import Card from './components/card/Card';

function Order() {
  return (
    <main className={styles.main}>
      <div className="booking-tickets">
        <div className="container">
          <div>
            <div className="header-booking">
              <h2>booking tickets</h2>
              <p>Tour to Louvre</p>
            </div>

            <form action="#" id="booking-tickets">
              <ul>
                <li className="chooseDate">
                  Date
                  <input type="date" required name="date" id="date" />
                </li>

                <li className="chooseTime">
                  Time
                  <select name="chooseTime" id="chooseTime" required size={1}>
                    <option value="9:00" selected>
                      9:00
                    </option>
                    <option value="9:30">9:30</option>
                    <option value="10:00">10:00</option>
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                    <option value="15:30">15:30</option>
                    <option value="16:00">16:00</option>
                    <option value="16:30">16:30</option>
                    <option value="17:00">17:00</option>
                    <option value="17:30">17:30</option>
                    <option value="18:00">18:00</option>
                  </select>
                  <input
                    type="time"
                    required
                    name="time"
                    id="time"
                    min="09:00"
                    max="18:00"
                    value="13:30"
                    step="1800"
                  />
                </li>
                <li className="writeName">
                  Name
                  <input
                    type="text"
                    required
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </li>
                <li className="writeEmail">
                  E-mail
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    placeholder="E-mail"
                  />
                </li>
                <li className="writePhone">
                  Phone
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Phone"
                  />
                </li>
                <li className="selectType">
                  Ticket Type
                  <select name="select" required size={1}>
                    <option value="Permanent" selected>
                      Permanent exhibition
                    </option>
                    <option value="Temporary">Temporary exhibition</option>
                    <option value="Combined">Combined Admission</option>
                  </select>
                </li>
              </ul>

              <div className="entry-ticket">
                <h5>Entry Ticket</h5>

                <ul className="ticketsAmount">
                  <li>
                    <div>
                      Basic 18+ (<span className="basic-cost">0</span>
                      €)
                    </div>
                    <Counter counterType={CounterType.DARK} />
                  </li>
                  <li>
                    <div>
                      Senior 65+ (<span className="senior-cost">0</span>
                      €)
                    </div>
                    <Counter counterType={CounterType.DARK} />
                  </li>
                </ul>
              </div>
            </form>
          </div>

          <div>
            <div className="overview">
              <h4>Overview</h4>
              <p>Tour to Louvre</p>
              <ul className="total-options">
                <li className="choosen-date">
                  <span className="choosen-day-week">Friday</span>,
                  <span className="choosen-date-month-day">August 19</span>
                </li>
                <li className="choosen-time">16 : 30</li>
                <li className="choosen-type">Temporary exhibition</li>
              </ul>
              <ul className="total-summary">
                <li>
                  <div className="num-summary" />
                  Basic (<span className="basic-cost">0</span>
                  €)
                  <span className="tt">
                    <span className="total-basic">0</span>€
                  </span>
                </li>
                <li>
                  <div className="num-summary" />
                  Senior (<span className="senior-cost">0</span>
                  €)
                  <span className="tt">
                    <span className="total-senior">0</span>€
                  </span>
                </li>
              </ul>

              <h4>
                Total:
                <span>
                  <span className="total-sum-overwiew">0</span>€
                </span>
              </h4>
            </div>

            <Card />

            <Button buttonType={ButtonType.MAIN}>Book</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Order;
