import { useState } from "react";


/**
 * The function `UseAccountCredentials` manages and saves account credentials in the session storage.
 * returns The `UseAccountCredentials` function is returning an object with two properties:
 * 1. `accountCredentials`: This property holds the account credentials object retrieved from the
 * session storage or `null` if no credentials are found.
 * 2. `setAccountCredentials`: This property is a function that can be used to save new account
 * credentials to the session storage and update the `accountCredentials` state.
 */
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