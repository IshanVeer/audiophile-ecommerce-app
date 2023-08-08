"use client"
import React,{Fragment} from 'react';
import css from './FunctionalButton.module.css';


const FunctionalButton:React.FC<{name:string}> = ({name}) => {
  return (
    <Fragment>
        <button className={css.button}>
            {name}
        </button>
    </Fragment>
  )
}

export default FunctionalButton