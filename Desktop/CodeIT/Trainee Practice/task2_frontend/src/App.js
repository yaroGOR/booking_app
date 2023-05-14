import List from "./components/forms/List";
import CreateUser from "./components/forms/CreateUser";
import SearchUser from "./components/forms/SearchUser";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useSelector } from "react-redux";

import "./App.css";

function App() {
  let data = useSelector((state) => state.userStore.value);
  console.log(data);
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="form">
        <CreateUser />
        <SearchUser />
        </div>
        {data.length !== 0 && <List />}
      </LocalizationProvider>
    </div>
  );
}

export default App;
