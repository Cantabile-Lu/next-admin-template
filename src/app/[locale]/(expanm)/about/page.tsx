interface Props {}

const App = () => {
    return (
        <div>
            {Array(100)
                .fill(0)
                .map((_, i) => (
                    <div key={i}>{i}</div>
                ))}
        </div>
    );
};

export default App;
