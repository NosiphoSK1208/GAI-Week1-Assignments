import React from "react";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFooter,
} from "@ionic/react";
import "@ionic/react/css/core.css";
import "./theme/App.css";

const App: React.FC = () => (
  <IonApp>
    <IonHeader className="header">
      <IonToolbar>
        <IonTitle>Hello Nosipho App</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="main-content">
      <h1>Welcome to Bootcamp</h1>
    </IonContent>

    <IonFooter className="footer">
      <IonToolbar>
        <IonTitle>DAY 1 ASSIGNMENT</IonTitle>
      </IonToolbar>
    </IonFooter>
  </IonApp>
);

export default App;
