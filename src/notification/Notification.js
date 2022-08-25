import { useState, createContext } from "react";

const Notification = ({ message, severity, classes }) => {
    const notificationStyles = {
        position: "absolute",
        top: 100,
        right: 10,
        width: "auto",
        height: "10px 20px, 10px, 20px",
        color: "white",
        padding: "10px",
        backgroundColor: severity === "success" ? "red" : "green",
    };

    if (message === "") return;

    const config = true
        ? { className: `unaClase ${classes || ""}`, style: notificationStyles }
        : {};

    return <div {...config}>{message}</div>;
};

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("success");

    const setNotification = (sev, msg) => {
        setMessage(msg);
        setSeverity(sev);
        setTimeout(() => {
            setMessage("");
        }, 2000);
    };

    return (
        <NotificationContext.Provider
            value={{ setNotification }}
            message={message}
            severity={severity}
        >
            <Notification message={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationContext;
