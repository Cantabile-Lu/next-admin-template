"use client";
import { Button, DatePicker } from "antd";
import dayjs from "dayjs";

interface Props {}

import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");
const App = (props) => {
    return (
        <div>
            <Button type={"primary"}>click</Button>
            <DatePicker />
        </div>
    );
};

export default App;
