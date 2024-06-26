/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Counter, { CounterType, CounterNameType } from "@/app/components/page/tickets/components/counter/Counter";
import Button, { ButtonType } from "@/app/components/shared/button/Button";
import H2, { TitleColorType, TitleType } from "@/app/components/shared/h2/H2";
import H4 from "@/app/components/shared/h4/H4";
import H5 from "@/app/components/shared/h5/H5";
import { ExhibitionType, Inputs } from "@/app/interfaces";
import { initialState, addFullData } from "@/app/services/ticketsSlice";
import styles from "./order.module.scss";
import Card from "../card/Card";
import { RootState } from "../../../services/store";

const months = [
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

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const prices = {
  [ExhibitionType["Permanent exhibition"]]: {
    basic: 20,
    senior: 10,
  },
  [ExhibitionType["Temporary exhibition"]]: {
    basic: 25,
    senior: 12.5,
  },
  [ExhibitionType["Combined Admission"]]: {
    basic: 40,
    senior: 20,
  },
};

function Order() {
  const dispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.tickets);

  const methods = useForm<Inputs>({
    defaultValues: tickets || initialState,
    reValidateMode: "onSubmit",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const [exhibition, date, time, senior, basic] = watch(["exhibition", "date", "time", "senior", "basic"]);

  const fields = watch();

  useEffect(() => {
    dispatch(addFullData({ ...fields }));
  }, [dispatch, fields]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container} noValidate>
      <div className={styles.container_form}>
        <div className={styles.header}>
          <Image src="/img/img-triangle.png" width={85} height={41} alt="Triangle" />
          <H2 colorType={TitleColorType.GOLD} type={TitleType.REGULAR} className={styles.header__title}>
            booking tickets
          </H2>
          <p className={styles.header__addition}>Tour to Louvre</p>
        </div>

        <ul className={styles.form__list}>
          <li>
            <Image src="/svg/icon-date.svg" width={15} height={15} alt="Date" />
            <input type="date" {...register("date")} min={new Date().toISOString().split("T")[0]} />
            <Image src="/svg/icon-arrow.svg" width={15} height={15} alt="Arrow" />
          </li>
          <li>
            <Image src="/svg/icon-time.svg" width={15} height={15} alt="Time" />
            <select size={1} {...register("time")}>
              <option value="9:00">9:00</option>
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
            <Image src="/svg/icon-arrow.svg" width={15} height={15} alt="Arrow" />
          </li>
          <li>
            <Image src="/svg/icon-name.svg" width={15} height={15} alt="Name" />
            <input
              type="text"
              placeholder={errors.name?.message || "Name"}
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
          </li>
          <li>
            <Image src="/svg/icon-email.svg" width={15} height={15} alt="Email" />
            <input
              type="email"
              placeholder={errors.email?.message || "E-mail"}
              {...register("email", {
                required: {
                  value: true,
                  message: "E-mail is required",
                },
              })}
            />
          </li>
          <li>
            <Image src="/svg/icon-phone.svg" width={15} height={15} alt="Phone" />
            <input
              type="tel"
              placeholder={errors.phone?.message || "Phone"}
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone is required",
                },
              })}
            />
          </li>

          <li>
            <Image src="/svg/icon-ballot.svg" width={15} height={15} alt="Ballot" />
            <select size={1} {...register("exhibition")}>
              <option value="Permanent exhibition">Permanent exhibition</option>
              <option value="Temporary exhibition">Temporary exhibition</option>
              <option value="Combined Admission">Combined Admission</option>
            </select>

            <Image src="/svg/icon-arrow.svg" width={15} height={15} alt="Arrow" />
          </li>

          <li className={styles.counters}>
            <H5>Entry Ticket</H5>

            <ul className={styles.counter__list}>
              <li className={styles.counter}>
                <div>Basic 18+ ({prices[exhibition].basic}€)</div>
                <FormProvider {...methods}>
                  <Counter counterType={CounterType.DARK} counterName={CounterNameType.BASIC} />
                </FormProvider>
              </li>
              <li className={styles.counter}>
                <div>Senior 65+ ({prices[exhibition].senior}€)</div>
                <FormProvider {...methods}>
                  <Counter counterType={CounterType.DARK} counterName={CounterNameType.SENIOR} />
                </FormProvider>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className={styles.container_result}>
        <div className={styles.overview}>
          <Image
            src="/img/img-louvre.png"
            width={150}
            height={120}
            alt="Louvre"
            className={styles["overview__back-image"]}
          />
          <H4>Overview</H4>
          <p>Tour to Louvre</p>
          <ul className={styles.summary__list}>
            <li className={styles.summary}>
              <Image src="/svg/icon-date.svg" width={15} height={15} alt="Date" />
              {`${days[new Date(date).getDay()]}, ${months[new Date(date).getMonth()]} ${new Date(date).getDate()}`}
            </li>
            <li className={styles.summary}>
              <Image src="/svg/icon-time.svg" width={15} height={15} alt="Time" />
              <span>{time}</span>
            </li>
            <li className={styles.summary}>
              <Image src="/svg/icon-circle.svg" width={15} height={15} alt="Circle" />
              {exhibition}
            </li>
          </ul>

          <ul className={styles.note}>
            <li>
              <div className={styles.amount}>{basic}</div>
              <span className={styles.price}>Basic ({prices[exhibition].basic}€)</span>
              <span>{basic * prices[exhibition].basic}€</span>
            </li>
            <li>
              <div className={styles.amount}>{senior}</div>
              <span className={styles.price}>Senior ({prices[exhibition].senior}€)</span>
              <span>{senior * prices[exhibition].senior}€</span>
            </li>
          </ul>

          <div className={styles.bill}>
            Total:
            <span>{basic * prices[exhibition].basic + senior * prices[exhibition].senior}€</span>
          </div>
        </div>
        <FormProvider {...methods}>
          <Card />
        </FormProvider>

        <Button
          buttonType={ButtonType.SUB}
          className={styles.overview__button}
          globalType="submit"
          isDisabled={!(basic > 0 || senior > 0)}
        >
          Book
        </Button>
      </div>
    </form>
  );
}
export default Order;
