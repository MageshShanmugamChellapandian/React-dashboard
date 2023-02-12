import Report from "../Report";
import "./Sidebar.css";
interface IProps {
  toggleState: boolean;
}

const Sidebar = (props: IProps) => {
  const { toggleState } = props;

  return (
    <div className={`sidebar ${toggleState ? "sidebar_close" : ""}`}>
      <div className="sidebar_wrapper">
        <div className="sidebar_data">
          <div className="sidebar_data_text sidebar_data_1">
            Sample Client name
          </div>
          <div className="sidebar_data_text sidebar_data_2">
            <div>Engagement</div>
            <div>Sample engagement name</div>
          </div>
          <div className="sidebar_data_text sidebar_data_3">
            <div>Period</div>
            <div>1 Jan 2022 - 30 Jun 2022</div>
          </div>
        </div>

        <div className="sidebar_links">
          <div className="sidebar_link sidebar_link_active">
            Metrics & benchmarking
          </div>
          <div className="sidebar_link">Offset analysis</div>
          <div className="sidebar_link">Data playground</div>
          <div className="sidebar_link">Data quality</div>
          <div className="sidebar_link">
            <Report />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
