import React, { Component, useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import Saving from './Saving';
import ApiComponent from '../ApiComponent';

var submit = false;

function AutoSaveComponent() {

    const [userQuery, setUserQuery] = useState("");
    var [submitState, setSubmitState] = useState(false);

    /*console.log(submitState);*/




    function updateQuery() {
        console.log("Executing update Query for : " + userQuery);
        showSave();
    }

    const delayedQuery = useCallback(debounce(updateQuery, 1000), [userQuery]);

    function onChange(e) {
        setUserQuery(e.target.value);
    }

    function showSave() {
        /*console.log("submitState in showSave = " + submitState);*/
        setSubmitState(true);
        /*console.log("submitState in showSave = " + submitState);
        console.log(setTimeout(setSubmitState(false), 2000));
        console.log("submitState in showSave = " + submitState);*/
        setTimeout(() => { setSubmitState(false); }, 1000);
        /*        console.log("SetTimeout is called.");*/
    }


    useEffect(() => {
        /*setSubmitState(false);*/
        /*console.log("Use effect is called & submitState =" + submitState);*/
        delayedQuery();
        return () => {
            delayedQuery.cancel();
        }
    }, [delayedQuery, userQuery]);



    return (
        <div className="text-center search" >
            {/*console.log("screen is rendering & submitState = " + submitState)*/}         
            <input onChange={onChange} 
            value={userQuery} 
            class="form-control" 
            placeholder="Search here....."/>
            {submitState ? <div><h2> Saved Successfully </h2> </div> :<h2></h2>}
            <div><ApiComponent searchValue={userQuery}/></div>
        </div>
    );
}

export default AutoSaveComponent;