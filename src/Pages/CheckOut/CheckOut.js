import { Button, Image } from 'react-bootstrap';
import './CheckOut.css';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGraduationCap } from "react-icons/fa";

const CheckOut = () => {
    const courses = useLoaderData();
    const { title, image, price, instructor } = courses;
    const notify = () => toast("Checkout Complete", {
        position: 'top-center',
    });

    return (

        <div className='container setup mb-5 mt-5'>
            <Image className='img' src={image} ></Image>
            <p>{title}</p>
            <h4>Price: {price}$</h4>
            <p>Instructor: <FaGraduationCap /> {instructor.name}</p>
            <Button onClick={notify}>Checkout</Button>
            <ToastContainer />
        </div>
    );
};

export default CheckOut;