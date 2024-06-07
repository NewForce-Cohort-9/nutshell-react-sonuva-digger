// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ChatIcon, ChecklistIcon, DateIcon, NewsIcon } from "../../assets/icons.jsx";
import "./splash.css";

export const Splash = () => {
    return (
        <div className="wrapper-center">
            <div className="splash">
                <h1>
                    <span>Welcome to </span>
                    <span>NUTSHELL</span>
                </h1>
                <div className="splash-subtitle">
                    Your #1 Social app for news, events, and tasks management
                </div>
                <div className="mini">
                    <h2>
                        <div className="splash-icon">
                            News <NewsIcon />
                            Events! <DateIcon />
                            Tasks! <ChecklistIcon />
                            LiveChat! <ChatIcon />
                        </div>
                    </h2>
                </div>
            </div>
        </div>
    );
};
