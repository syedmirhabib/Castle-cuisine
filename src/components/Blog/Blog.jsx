import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useReactToPrint } from 'react-to-print';

const Blog = () => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Blog Question & Answer",
        onAfterPrint: () => toast("Data saved successfully")
    });

    return (
        <div className='container'>
            <div className='mt-4'>
                <button className="btn btn-success" onClick={handlePrint}>Print this Article</button>
            </div>
            <div ref={componentRef} style={{ width: "100%", padding: "0px 16px" }}>
                <h3 className='text-center my-3'>Text</h3>
                <hr />
                <div>
                    <h4>Text</h4>
                    <h5 className='ms-3'>Text: </h5>
                    <ol type='1'>
                        <li>Text</li>
                        <li>Text</li>
                        <li>Text</li>
                    </ol>
                    <h5 className='ms-3'>Text: </h5>
                    <ol type='1'>
                        <li>Text</li>
                        <li>Text</li>
                        <li>Text</li>
                    </ol>
                </div>

                <div>
                    <h4>Text</h4>
                    <p>
                        Text
                    </p>
                </div>

                <div>
                    <h4>Text</h4>
                    <p>Text<br /><br />
                        Text</p>
                </div>

                <div>
                    <h4>Text</h4>
                    <p>Text
                        Text
                        Text

                        Text</p>
                </div>
                <hr />
            </div>
            <ToastContainer />
        </div>
    );
}

export default Blog;
