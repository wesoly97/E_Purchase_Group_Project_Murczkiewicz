import React,{useState, useEffect} from "react";
import Axios from "axios";

import User from "../components/User";
import Admin from "../components/Admin";
import { useHistory } from 'react-router-dom';
import Navbar from "../layout/Navbar";
import Materialize from "materialize-css";

export default function Main(){

    const[role,setRole] = useState("");
    const history = useHistory();

    Axios.defaults.withCredentials = true;//zajebiscie wazne
    useEffect(()=>{
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setRole(response.data.user[0].role);
            }
            else{
                history.push("/register");
            }
        });
    },[]);

    function abc(){
        Materialize.updateTextFields();
    }
    
    return(
        <div>
            <Navbar/>
            <div className="container">
            <h1>Wiadomości</h1>
                <div className="row">
                    <div className="col s3">
                        <div class="row">
                            <div class="col s9">
                                <div className="input-field inline">
                                    <input id="searchUser" type="text" class="validate"/>
                                    <label htmlFor="searchUser">Wyszukaj użytkownika</label>
                                </div>
                            </div>
                            <div class="col s3">
                                <a className="btn-floating btn-large waves-effect waves-light red"><i
                                    className="material-icons">search</i></a>
                            </div>
                        </div>
                        <div className="collection">
                            <a href="#!" className="collection-item ">Adam Małysz</a>
                            <a href="#!" className="collection-item active">Marcin Najman</a>
                            <a href="#!" className="collection-item">Alina Krawczyk</a>
                            <a href="#!" className="collection-item">Tadeusz Norek</a>
                        </div>
                    </div>
                    <div className="col s9 lime lighten-5">
                        <div style={{overflowY: "auto", height: "400px", overflowX: "hidden"}}>
                            <div className="row">
                                <div className="col s10 m10 l10">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                            <span className="card-title">Marcin Najman</span>
                                            <p>Podoba Ci się moja nowa niebieska kurtka?</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s10 m10 offset-s2 offset-l2 offset-m2">
                                    <div className="card lime lighten-4">
                                        <div className="card-content black-text">
                                            <span className="card-title right-align">Ja</span>
                                            <p className="right-align">Tak niezupełnie</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s10 m10 l10">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                            <span className="card-title">Marcin Najman</span>
                                            <p>Aha okej</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s10 m10 offset-s2 offset-l2 offset-m2">
                                    <div className="card lime lighten-4">
                                        <div tabIndex="0" autofocus="autofocus" className="card-content black-text">
                                            <span className="card-title right-align">Ja</span>
                                            <p className="right-align">A dlaczego pytasz?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s9">
                                <input id="message" type="text" className="validate"/>
                                <label htmlFor="message">Wpisz wiadomość</label>
                            </div>
                            <div class="col s3 ">
                                <br/>
                                <a className="waves-effect waves-light btn valign-wrapper"><i className="material-icons left">send</i>Wyślij wiadomość</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}