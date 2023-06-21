import { createContext, useState } from "react";
import React from "react";

export const SecurityCodesContext = createContext();

const ContextProvider = ({ children }) => {
  const [useSECURITY_CODE, setUseSECURITY_CODE] = useState("paradigma")
  const [classSECURITY_CODE, setClassSECURITY_CODE] = useState("olograma")
  const [useError, setUseError] = useState(false);
  const [classError, setClassError] = useState(false);
  const [useSuccess, setUseSuccess] = useState(false);
  const [classSuccess, setClassSuccess] = useState(false);
  const [useLoading, setUseLoading] = useState(false);
  const [classLoading, setClassLoading] = useState(false);
  const [useValue, setUseValue] = useState("");
  const [classValue, setClassValue] = useState("");
  React.useEffect(() => {
    setTimeout(() => {
      classLoading && setClassLoading(false);
      isClassPasswordSuccess();
    }, 2000);
  }, [classLoading]);

React.useEffect(() => {
  setTimeout(() => {
    useLoading && setUseLoading(false);
    isUsePasswordSuccess();
  }, 2000);
}, [useLoading]);

  const isUsePasswordSuccess = () => {
    if (useValue === useSECURITY_CODE) {
      setUseSuccess(true);
      setUseError(false);
      renderModifyPassword();
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

  const isClassPasswordSuccess = () => {
    if (classValue === classSECURITY_CODE) {
      setClassSuccess(true);
      setClassError(false);
      renderModifyPassword();
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

  const changeUseState = () => {
    if (useError || useSuccess) {
      setUseError(false);
      setUseSuccess(false);
    }
  };

  const changeClassState = () => {
    if (classError || classSuccess) {
      setClassError(false);
      setClassSuccess(false);
    }
  };

  const renderModifyPassword = (setIsChangePasswordActive, boolean) => (
    <div className="flex w-[190px] items-center justify-between">
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 
          font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Eliminar
      </button>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 
          font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => setIsChangePasswordActive(boolean)}
      >
        Cambiar
      </button>
    </div>
  );

  const [isClassChangePasswordActive, setIsClassChangePasswordActive] = useState(false);
  const [isUseChangePasswordActive, setIsUseChangePasswordActive] = useState(false);
  const [classNewPassword, setClassNewPassword] = useState("");
  const [useNewPassword, setUseNewPassword] = useState("");

  const renderChangePassword = (
    newPassword,
    setNewPassword,
    setSECURITY_CODE,
    setIsChangePasswordActive,
    setValue,
    isPasswordSuccess,
    setChangeState
  ) => (
    <div className="w-full flex flex-col items-center mt-10 mb-5">
      <h2 className="font-medium text-xl">Cambiar contraseña</h2>
      <p className="text-lg mb-1">Instroduzca su nueva contraseña.</p>
      <input
        placeholder="Nueva contraseña"
        className="w-150 border border-gray-400 p-1 mb-2 rounded-lg"
        onChange={(event) => setNewPassword(event.target.value)}
      />
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 
         font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => {
          setSECURITY_CODE(newPassword);
          setIsChangePasswordActive(false)
          setValue('')
          isPasswordSuccess()
          setChangeState()
        }}
      >
        Cambiar
      </button>
    </div>
  );

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
        useSECURITY_CODE,
        setUseSECURITY_CODE,
        classSECURITY_CODE, 
        setClassSECURITY_CODE,
        renderModifyPassword,
        renderChangePassword,
        isClassChangePasswordActive, 
        setIsClassChangePasswordActive,
        isUseChangePasswordActive, 
        setIsUseChangePasswordActive,
        useNewPassword, 
        setUseNewPassword,
        classNewPassword,
        setClassNewPassword,
        isUsePasswordSuccess,
        isClassPasswordSuccess,
      }}
    >
      {children}
    </SecurityCodesContext.Provider>
  );
};

export default ContextProvider;
