interface Props {}

const App = () => {
    return (
        <div>
            {Array(10)
                .fill(0)
                .map((_, i) => (
                    <div key={i}>{i}</div>
                ))}
        </div>
    );
};

export default App;
