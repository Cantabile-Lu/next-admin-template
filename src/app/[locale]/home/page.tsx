import { FC, PropsWithChildren } from "react";

interface Props {}

const App: FC<PropsWithChildren<Props>> = (props) => {
    return <div className="border-2 border-b-slate-900">hello Home</div>;
};

export default App;
