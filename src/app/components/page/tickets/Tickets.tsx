/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InputsShort, ExhibitionType } from '@/app/interfaces';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addPreData } from '@/app/services/ticketsSlice';
import { RootState } from '@/app/services/store';
import { prices } from '@/app/tickets/page';
import styles from './tickets.module.scss';
import H2, { TitleColorType, TitleType } from '../../shared/h2/H2';
import H4 from '../../shared/h4/H4';
import Button, { ButtonType } from '../../shared/button/Button';
import Counter, {
  CounterNameType,
  CounterType,
} from './components/counter/Counter';

function Tickets() {
  const dispatch = useDispatch();

  const tickets = useSelector((state: RootState) => state.tickets);

  const methods = useForm<InputsShort>({
    defaultValues: {
      exhibition: tickets.exhibition || ExhibitionType['Permanent exhibition'],
      basic: tickets.basic || 0,
      senior: tickets.senior || 0,
    },

    reValidateMode: 'onSubmit',
  });

  const { register, watch } = methods;

  const [exhibition, basic, senior] = watch(['exhibition', 'basic', 'senior']);

  useEffect(() => {
    dispatch(addPreData({ exhibition, basic, senior }));
  }, [basic, dispatch, exhibition, senior]);

  return (
    <section className={styles.tickets} id="Tickets">
      <div className={`${styles.container} container`}>
        <H2
          type={TitleType.UNDERLINED}
          colorType={TitleColorType.GOLD}
          className={styles.title__h2}
        >
          Buy tickets
        </H2>

        <div className={styles.container__image}>
          <Image src="/img/img-tickets.jpg" fill alt="Piece of art" />
        </div>

        <form className={styles.content} noValidate>
          <div className={styles['ticket-type']}>
            <H4>Ticket Type</H4>

            <ul className={styles['ticket-type__list']}>
              <li>
                <label htmlFor="Permanent">
                  <input
                    type="radio"
                    {...register('exhibition')}
                    id="Permanent"
                    value="Permanent exhibition"
                  />
                  Permanent exhibition
                </label>
              </li>
              <li>
                <label htmlFor="Temporary">
                  <input
                    type="radio"
                    {...register('exhibition')}
                    id="Temporary"
                    value="Temporary exhibition"
                  />
                  Temporary exhibition
                </label>
              </li>
              <li>
                <label htmlFor="Combined">
                  <input
                    type="radio"
                    {...register('exhibition')}
                    id="Combined"
                    value="Combined Admission"
                  />
                  Combined Admission
                </label>
              </li>
            </ul>
          </div>

          <div className={styles.amount}>
            <H4>Amount</H4>

            <ul className={styles.counters}>
              <li>
                <p>Basic 18+</p>
                <FormProvider {...methods}>
                  <Counter
                    counterType={CounterType.LIGHT}
                    counterName={CounterNameType.BASIC}
                  />
                </FormProvider>
              </li>
              <li>
                <p>Senior 65+</p>
                <FormProvider {...methods}>
                  <Counter
                    counterType={CounterType.LIGHT}
                    counterName={CounterNameType.SENIOR}
                  />
                </FormProvider>
              </li>
            </ul>

            <H4>
              Total{' '}
              {basic * prices[exhibition].basic +
                senior * prices[exhibition].senior}{' '}
              €
            </H4>

            <Button buttonType={ButtonType.SUB}>
              <Link href="./tickets">Buy Now</Link>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Tickets;
