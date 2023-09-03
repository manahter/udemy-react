function AboutUs() {
    const array = [];

    for (var i = 0; i < 100; i++) {
        array.push("Lorem ipsum dolor sit amet, consectetur adip occurence velit sed diam nonumy");
    }
    return (<div>
        {array.map((value, i) => <p key={i}> {i} {value}</p>)}
    </div>);
}

export default AboutUs;