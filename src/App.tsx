import { DatePicker } from "antd";
import locale from "antd/lib/date-picker/locale/pt_BR";

function App() {
  return (
    <div className="App">
      <DatePicker locale={locale} />
    </div>
  );
}

export default App;
