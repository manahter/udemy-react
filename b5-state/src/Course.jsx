import Angular from "./assets/images/angular.jpg"
import Bootstrap5 from "./assets/images/bootstrap5.png"
import Ccsharp from "./assets/images/ccsharp.png"
import Kompleweb from "./assets/images/kompleweb.jpg"

const courseArray = {
    Angular,
    Bootstrap5,
    Ccsharp,
    Kompleweb
};


function Course({ courseName }) {
    return (<img src={courseArray[courseName]} width="300px" alt="" />);
}

export default Course;