import { useState } from "react";


const ACCOUNT_CREDENTIALS_KEY = "account-credentials"

interface AccountCredentialsType {
    username: String,
    password: String
}

export interface AccountCredentialsContextType{
    accountCredentials: AccountCredentialsType,
    setAccountCredentials: (newaccountCredentials: AccountCredentialsType) => void
}

function UseAccountCredentials(){
    const accountCredentialsString = sessionStorage.getItem(ACCOUNT_CREDENTIALS_KEY)
    const accountCredentialsObject = accountCredentialsString ? JSON.parse(accountCredentialsString) :null;

    const [accountCredentials, setAccountCredentials] = useState(accountCredentialsObject);

    const saveAccountCredentials = (newAccountCredentials: AccountCredentialsType) =>{
        sessionStorage.setItem(ACCOUNT_CREDENTIALS_KEY, JSON.stringify(newAccountCredentials));
        setAccountCredentials(newAccountCredentials);
    }

    return {accountCredentials, setAccountCredentials: saveAccountCredentials}
}

export default UseAccountCredentials;