const Home = () => {

    const handleClick = () => {
        alert("Hello Ninjas!");
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;