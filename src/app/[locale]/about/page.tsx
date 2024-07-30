import Layout from "@/components/Layout";

interface Props {}

const App = () => {
    return (
        <Layout>
            <div>
                {Array(100)
                    .fill(0)
                    .map((_, i) => (
                        <div key={i}>{i}</div>
                    ))}
            </div>
        </Layout>
    );
};

export default App;
