import { createContext, useState } from "react";
import React from "react";

export const SecurityCodesContext = createContext();

const ContextProvider = ({ children }) => {
  const SECURITY_CODE = "paradigma";
  const [useError, setUseError] = useState(false);
  const [useSuccess, setUseSuccess] = useState(false);
  const [classError, setClassError] = useState(false);
  const [classSuccess, setClassSuccess] = useState(false);
  const [useLoading, setUseLoading] = useState(false);
  const [classLoading, setClassLoading] = useState(false);
  const [useValue, setUseValue] = useState("");
  const [classValue, setClassValue] = useState("");
  React.useEffect(() => {
    setTimeout(() => {
      useLoading && setUseLoading(false)
      classLoading && setClassLoading(false)
      isUsePasswordSuccess(useValue)
      isClassPasswordSuccess(classValue)
    }, 2000);
  }, [useLoading, classLoading]);

  const isUsePasswordSuccess = (password) => {
    if (useValue === SECURITY_CODE) {
      setUseSuccess(true);
      setUseError(false);
    } else if (useValue === "") {
      setUseError(false);
      setUseSuccess(false);
      setClassError(false);
      setClassSuccess(false);
    } else {
      setUseSuccess(false);
      setUseError(true);
    }
  };

  const isClassPasswordSuccess = (password) => {
    if (classValue === SECURITY_CODE) {
      setClassSuccess(true);
      setClassError(false);
    } else if (classValue === "") {
      setUseError(false);
      setUseSuccess(false);
      setClassError(false);
      setClassSuccess(false);
    } else {
      setClassSuccess(false);
      setClassError(true);
    }
  };

  const changeUseState = () =>{
    if(useError || useSuccess){
    setUseError(false)
    setUseSuccess(false)
    }
  }

  const changeClassState = () =>{
    if(classError || classSuccess){
    setClassError(false)
    setClassSuccess(false)
    }
  }

  return (
    <SecurityCodesContext.Provider
      value={{
        useError,
        setUseError,
        classError,
        setClassError,
        useSuccess,
        setUseSuccess,
        classSuccess,
        setClassSuccess,
        classValue,
        setClassValue,
        useValue,
        setUseValue,
        useLoading,
        setUseLoading,
        classLoading,
        setClassLoading,
        changeUseState,
        changeClassState,
        SECURITY_CODE,
      }}
    >
      {children}
    </SecurityCodesContext.Provider>
  );
};

export default ContextProvider;
