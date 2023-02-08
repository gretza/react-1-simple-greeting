const containerStyle = {
    maxWidth: "960px",
    margin: "0 auto"
};

const Container = (props) => {
    return <div style={ containerStyle }> { props.children } </div>
};

export default Container;