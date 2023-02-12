import "./App.css";
import React from "react";
import { createContext, useState, Dispatch, SetStateAction } from "react";

import Main from "./Main";
import Layout from "./Layout";

export interface IReportModal {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ReportModalContext = createContext<IReportModal | null>(null);

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const reportValue: IReportModal = {
    open: modalOpen,
    setOpen: setModalOpen,
  };
  return (
    <ReportModalContext.Provider value={reportValue}>
      <div className={`App ${modalOpen ? "modalOpen" : ""}`}>
        <Layout>
          <Main />
        </Layout>
      </div>
    </ReportModalContext.Provider>
  );
}

export default App;
