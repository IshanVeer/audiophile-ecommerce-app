"use client"
import React,{Fragment} from 'react';
import css from './FunctionalButton.module.css';
import {ButtonProp} from '@/types/types';

const FunctionalButton:React.FC<{name:ButtonProp}> = ({name}) => {
  return (
    <Fragment>
        <button className={css.button}>
            {name}
        </button>
    </Fragment>
  )
}

export default FunctionalButton