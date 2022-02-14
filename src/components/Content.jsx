import React from 'react';
import icon from "../Assets/c1.png"
import ProgressCircle from './Modules/ProgressCircle';
import { Switch } from '@mui/material';

const Content = () => {
    return (
        <div>
            <>
                <div className="main-title text-left mt-3 ml-3">
                    <h3 className="text-light">Dashboard</h3>
                </div>
                <main className="mt-5 d-flex flex-row-reverse justify-content-around">
                    <section className="box1 d-flex">
                        <div className="s-balance h-100">
                            <h5>Supply Balance</h5>
                            <h5>$0</h5>
                        </div>
                        <div className="circle h-100">
                            <ProgressCircle/>
                            <Switch defaultChecked color="warning"/>
                        </div>
                        <div className="b-balance h-100">
                            <h5>Borrow Balance</h5>
                            <h5>$0</h5>
                        </div>
                    </section>
                    <section className="box2">
                        <div className="left-content1 mb-3 w-100 d-flex align-content-center justify-content-between">
                            <div className="xvs ml-2 d-flex align-items-center">
                                <img src={icon} alt="icon"/>
                                    <span>0 XVS</span>
                            </div>
                            <div></div>
                        </div>
                        <div className="left-content1 mb-3 w-100 d-flex align-content-center justify-content-between">
                            <div className="xvs ml-2 d-flex align-items-center">
                                <img src={icon} alt="c1"/>
                                    <span>0 XVS</span>
                            </div>
                            <div></div>
                        </div>

                    </section>
                </main>
            </>
        </div>
    );
};

export default Content;