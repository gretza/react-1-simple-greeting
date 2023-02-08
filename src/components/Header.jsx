const headerStyle = {
    backgroundColor: "grey",
    width: "960px",
    height: "100px",
    position: "fixed",
    display: "flex",
    justifyContent: "end",
    alignItems: "center"
};


const ulStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    listStyleType: "none",
    paddingRight: "10px"
};


const Header = () => {
    return (
    <header style={ headerStyle }>
        <nav>
            <ul style={ulStyle}>
                <li href="#">About</li>
                <li href="#">Info</li>
                <li href="#">Edit</li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;